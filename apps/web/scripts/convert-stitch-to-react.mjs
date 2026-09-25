import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const webRoot = path.resolve(__dirname, "..");
const SOURCE = path.join(
  webRoot, "components", "mockups", "acquit-case-workspace",
  "NEWSTITCH", "stitch_acquit.ai_legal_operating_system"
);
const OUT_DIR = path.join(webRoot, "src", "components", "stitch", "pages");
const REGISTRY = path.join(webRoot, "src", "components", "stitch", "registry.ts");
const TOKENS = path.join(webRoot, "src", "components", "stitch", "tokens.css");
const INDEX_CSS = path.join(webRoot, "src", "index.css");

const VOID_ELEMENTS = new Set([
  "area","base","br","col","embed","hr","img","input","link","meta",
  "param","source","track","wbr",
]);

const ATTR_MAP = {
  "class": "className", "for": "htmlFor", "tabindex": "tabIndex",
  "autocomplete": "autoComplete", "autofocus": "autoFocus",
  "colspan": "colSpan", "rowspan": "rowSpan", "readonly": "readOnly",
  "maxlength": "maxLength", "minlength": "minLength",
  "novalidate": "noValidate", "srcset": "srcSet", "crossorigin": "crossOrigin",
  "datetime": "dateTime", "contenteditable": "contentEditable",
  "spellcheck": "spellCheck", "playsinline": "playsInline",
};

function camelAttr(name) {
  if (ATTR_MAP[name] !== undefined) return ATTR_MAP[name];
  if (name.startsWith("data-") || name.startsWith("aria-")) return name;
  return name.replace(/-([a-z])/g, (_, c) => c.toUpperCase());
}

function cssPropToJs(prop) {
  return prop.replace(/-([a-z])/g, (_, c) => c.toUpperCase());
}

function inlineStyleToObject(raw) {
  const entries = [];
  for (const decl of raw.split(";")) {
    const idx = decl.indexOf(":");
    if (idx === -1) continue;
    const prop = decl.slice(0, idx).trim();
    const value = decl.slice(idx + 1).trim();
    if (!prop || !value) continue;
    entries.push(cssPropToJs(prop) + ": " + JSON.stringify(value));
  }
  return entries.length ? "{{ " + entries.join(", ") + " }}" : undefined;
}

function pascal(name) {
  const parts = name.split(/[^a-zA-Z0-9]+/).filter(Boolean).map((p) => p.charAt(0).toUpperCase() + p.slice(1));
  let out = parts.join("");
  if (/^[0-9]/.test(out)) out = "Page" + out;
  return out || "Page";
}

function convertAttrs(attrText) {
  const out = [];
  const attrRe = /([a-zA-Z_:@\.\-][\w:\.@\-\[\]]*)(?:\s*=\s*(?:"([^"]*)"|'([^']*)'|([^\s"'>]+)))?/g;
  let m;
  while ((m = attrRe.exec(attrText))) {
    const rawName = m[1];
    const value = m[2] !== undefined ? m[2] : (m[3] !== undefined ? m[3] : m[4]);
    const name = camelAttr(rawName);
    if (value === undefined) { out.push(name); continue; }
    if (name === "style") {
      const obj = inlineStyleToObject(value);
      if (obj) { out.push("style=" + obj); continue; }
    }
    const escaped = value.replace(/"/g, "&quot;").replace(/\n/g, " ");
    out.push(name + '="' + escaped + '"');
  }
  return out.length ? " " + out.join(" ") : "";
}

function escapeTextBraces(text) {
  return text.replace(/\{/g, "&#123;").replace(/\}/g, "&#125;");
}

function htmlToJsx(html) {
  let out = "";
  let last = 0;
  const tagRe = /<(\/?)([a-zA-Z][\w:-]*)((?:"[^"]*"|'[^']*'|[^>"'])*)(\/?)>/g;
  let m;
  while ((m = tagRe.exec(html))) {
    out += escapeTextBraces(html.slice(last, m.index));
    const close = m[1], name = m[2], attrText = m[3], selfClose = m[4];
    if (selfClose || VOID_ELEMENTS.has(name.toLowerCase())) {
      out += "<" + name + convertAttrs(attrText) + " />";
    } else if (close) {
      out += "</" + name + ">";
    } else {
      out += "<" + name + convertAttrs(attrText) + ">";
    }
    last = m.index + m[0].length;
  }
  out += escapeTextBraces(html.slice(last));
  return out;
}

function extractBody(doc) {
  const bodyMatch = doc.match(/<body[^>]*>([\s\S]*?)<\/body>/i);
  const raw = bodyMatch ? bodyMatch[1] : doc;
  return raw
    .replace(/<!--[\s\S]*?-->/g, "")
    .replace(/<script[\s\S]*?<\/script>/gi, "");
}

function extractBodyClasses(doc) {
  const m = doc.match(/<body[^>]*class="([^"]*)"/i);
  return m ? m[1] : "";
}

function extractStyles(doc) {
  const styles = [];
  const re = /<style[^>]*>([\s\S]*?)<\/style>/gi;
  let m;
  while ((m = re.exec(doc))) styles.push(m[1]);
  return styles.join("\n\n");
}

function parseTailwindConfig(doc) {
  const m = doc.match(/<script id="tailwind-config">([\s\S]*?)<\/script>/);
  if (!m) return null;
  let text = m[1].trim();
  const eq = text.indexOf("=");
  if (eq !== -1) text = text.slice(eq + 1).trim();
  text = text.replace(/;\s*$/, "");
  try {
    return (new Function("return (" + text + ")"))();
  } catch (e) {
    console.warn("[stitch:convert] Could not parse tailwind config: " + e.message);
    return null;
  }
}

// theme categories: [configKey, cssVarPrefix, placeholderValue]
const CATS = [
  ["colors", "--color-", "#000000"],
  ["fontFamily", "--font-", "sans-serif"],
  ["fontSize", "--text-", "1rem"],
  ["fontWeight", "--font-weight-", "400"],
  ["borderRadius", "--radius-", "0.5rem"],
  ["lineHeight", "--leading-", "1.5"],
  ["boxShadow", "--shadow-", "0 0 #0000"],
  ["opacity", "--opacity-", "1"],
  ["zIndex", "--z-", "1"],
];

function themeOf(cfg) {
  if (!cfg || !cfg.theme) return {};
  const t = cfg.theme;
  return t.extend ? Object.assign({}, t, t.extend) : t;
}

function normalizeValue(cat, value) {
  if (value === undefined || value === null) return null;
  if (Array.isArray(value)) {
    if (cat === "fontFamily") return value.join(", ");
    return String(value[0]);
  }
  if (typeof value === "object") return null; // nested objects unsupported
  return String(value);
}

function hexToHsl(hex) {
  const m = hex.trim().match(/^#?([0-9a-f]{6})$/i);
  if (!m) return null;
  const int = parseInt(m[1], 16);
  const r = ((int >> 16) & 255) / 255;
  const g = ((int >> 8) & 255) / 255;
  const b = (int & 255) / 255;
  const max = Math.max(r, g, b), min = Math.min(r, g, b);
  let h = 0, s = 0;
  const l = (max + min) / 2;
  if (max !== min) {
    const d = max - min;
    s = l > 0.5 ? d / (2 - max - min) : d / (max + min);
    if (max === r) h = ((g - b) / d + (g < b ? 6 : 0));
    else if (max === g) h = ((b - r) / d + 2);
    else h = ((r - g) / d + 4);
    h *= 60;
  }
  return Math.round(h) + " " + Math.round(s * 100) + "% " + Math.round(l * 100) + "%";
}

// Token names already registered by src/index.css (@theme inline). For these,
// utilities reference hsl(var(--name)), so we override the inner var per page.
function existingIndexTokens() {
  const set = new Set();
  try {
    const css = fs.readFileSync(INDEX_CSS, "utf-8");
    const re = /--color-([a-z0-9-]+)\s*:/g;
    let m;
    while ((m = re.exec(css))) set.add(m[1]);
  } catch (e) { /* index.css not found; skip */ }
  return set;
}

function main() {
  if (!fs.existsSync(SOURCE)) {
    console.error("[stitch:convert] Source not found: " + SOURCE);
    process.exit(1);
  }

  const indexTokens = existingIndexTokens();
  fs.rmSync(OUT_DIR, { recursive: true, force: true });
  fs.mkdirSync(OUT_DIR, { recursive: true });

  const folders = fs
    .readdirSync(SOURCE, { withFileTypes: true })
    .filter((e) => e.isDirectory())
    .map((e) => e.name)
    .sort();

  // Pass 1: parse everything
  const parsed = [];
  const skipped = [];
  for (const folder of folders) {
    const htmlPath = path.join(SOURCE, folder, "code.html");
    if (!fs.existsSync(htmlPath)) { skipped.push(folder + " (no code.html)"); continue; }
    const doc = fs.readFileSync(htmlPath, "utf-8");
    parsed.push({
      folder,
      doc,
      theme: themeOf(parseTailwindConfig(doc)),
      bodyClasses: extractBodyClasses(doc),
    });
  }

  // Pass 2: union of all token names per category (excluding index.css tokens)
  const union = new Map(); // cat -> Set(names)
  for (const cat of CATS) union.set(cat[0], new Set());
  for (const p of parsed) {
    for (const [catKey] of CATS) {
      const entries = p.theme[catKey];
      if (!entries || typeof entries !== "object") continue;
      for (const name of Object.keys(entries)) {
        if (name === "DEFAULT") continue;
        if (catKey === "colors" && indexTokens.has(name)) continue;
        union.get(catKey).add(name);
      }
    }
  }

  // Pass 3: emit global tokens.css (placeholders; real values are page-scoped)
  const themeLines = [];
  for (const [catKey, prefix, placeholder] of CATS) {
    for (const name of Array.from(union.get(catKey)).sort()) {
      themeLines.push("  " + prefix + name + ": " + placeholder + ";");
    }
  }
  const tokensCss = [
    "/* AUTO-GENERATED by scripts/convert-stitch-to-react.mjs -- do not edit.",
    "   Registers every Stitch design token with Tailwind v4. Utilities compile to",
    "   var(--color-*) etc., so each page scopes its own real values via [data-page].",
    "   Tokens already defined in src/index.css (@theme inline) are NOT redefined here;",
    "   those are overridden per page through their hsl(var(--*)) inner variables. */",
    "@theme {",
    ...themeLines,
    "}",
    "",
    "/* Material Symbols support (designs load the font via Google Fonts in layout.tsx) */",
    ".material-symbols-outlined {",
    '  font-family: "Material Symbols Outlined";',
    "  font-weight: normal;",
    "  font-style: normal;",
    "  display: inline-block;",
    "  line-height: 1;",
    "  letter-spacing: normal;",
    "  text-transform: none;",
    "  white-space: nowrap;",
    "  direction: ltr;",
    "  -webkit-font-smoothing: antialiased;",
    "}",
    "",
  ].join("\n");
  fs.writeFileSync(TOKENS, tokensCss);

  // Pass 4: emit components
  const registry = new Map();
  let converted = 0;
  for (const p of parsed) {
    const { folder, doc, theme, bodyClasses } = p;
    const css = extractStyles(doc);
    const jsx = htmlToJsx(extractBody(doc));
    const componentName = pascal(folder);
    const safeFile = folder.replace(/[^a-zA-Z0-9._-]/g, "_");
    const cssFile = safeFile + ".css";

    // Page-scoped CSS variables with the page's real token values.
    const varLines = [];
    for (const [catKey, prefix] of CATS) {
      const entries = theme[catKey];
      if (!entries || typeof entries !== "object") continue;
      for (const name of Object.keys(entries)) {
        if (name === "DEFAULT") continue;
        const value = normalizeValue(catKey, entries[name]);
        if (!value) continue;
        if (catKey === "colors" && indexTokens.has(name)) {
          // index.css token: override the inner hsl variable so existing
          // @theme inline utilities pick up this page's value.
          const hsl = hexToHsl(value);
          if (hsl) varLines.push("  --" + name + ": " + hsl + ";");
          varLines.push("  " + prefix + name + ": " + value + ";");
        } else {
          varLines.push("  " + prefix + name + ": " + value + ";");
        }
      }
    }

    const scopedVars = varLines.length
      ? '[data-page="' + safeFile + '"] {\n' + varLines.join("\n") + "\n}\n\n"
      : "";

    const wrapperClass = ("stitch-page " + bodyClasses).replace(/"/g, "&quot;").trim();

    const component = [
      "// AUTO-GENERATED from " + folder + "/code.html by scripts/convert-stitch-to-react.mjs -- do not edit.",
      'import AppShell from "@/components/alexandria/AppShell";',
      'import "./' + cssFile + '";',
      "",
      "export default function " + componentName + "() {",
      "  return (",
      '    <AppShell pageName="' + folder.replace(/"/g, "'") + '">',
      '      <div className="' + wrapperClass + '" data-page="' + safeFile + '">',
      jsx,
      "      </div>",
      "    </AppShell>",
      "  );",
      "}",
      "",
    ].join("\n");

    fs.writeFileSync(path.join(OUT_DIR, safeFile + ".tsx"), component);
    fs.writeFileSync(
      path.join(OUT_DIR, cssFile),
      "/* AUTO-GENERATED page styles (" + folder + ") */\n" + scopedVars + css + "\n"
    );
    registry.set(folder, { componentName, safeFile });
    converted += 1;
  }

  const importLines = [];
  const entries = [];
  for (const [folder, info] of registry) {
    importLines.push('import ' + info.componentName + ' from "./pages/' + info.safeFile + '";');
    entries.push('  ' + JSON.stringify(folder) + ": " + info.componentName + ",");
  }
  const registrySrc = [
    "// AUTO-GENERATED by scripts/convert-stitch-to-react.mjs -- do not edit.",
    'import type { ComponentType } from "react";',
    ...importLines,
    "",
    "export const stitchComponents: Record<string, ComponentType> = {",
    ...entries,
    "};",
    "",
    "export function getStitchComponent(name?: string | null): ComponentType | null {",
    "  if (!name) return null;",
    "  return stitchComponents[name] ?? null;",
    "}",
    "",
  ].join("\n");
  fs.writeFileSync(REGISTRY, registrySrc);

  const tokenCount = themeLines.length;
  console.log("[stitch:convert] Converted " + converted + " pages into React components.");
  console.log("[stitch:convert] Registered " + tokenCount + " global design tokens (+" + indexTokens.size + " reused from index.css).");
  if (skipped.length) {
    console.log("[stitch:convert] Skipped " + skipped.length + ":");
    for (const s of skipped) console.log("  - " + s);
  }
}

main();
