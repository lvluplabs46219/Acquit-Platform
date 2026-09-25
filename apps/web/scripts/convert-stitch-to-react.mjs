import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const webRoot = path.resolve(__dirname, "..");
const SOURCE = path.join(
  webRoot,
  "components",
  "mockups",
  "acquit-case-workspace",
  "NEWSTITCH",
  "stitch_acquit.ai_legal_operating_system"
);
const OUT_DIR = path.join(webRoot, "src", "components", "stitch", "pages");
const REGISTRY = path.join(webRoot, "src", "components", "stitch", "registry.ts");

const VOID_ELEMENTS = new Set([
  "area","base","br","col","embed","hr","img","input","link","meta",
  "param","source","track","wbr",
]);

const ATTR_MAP = {
  "class": "className",
  "for": "htmlFor",
  "tabindex": "tabIndex",
  "autocomplete": "autoComplete",
  "autofocus": "autoFocus",
  "colspan": "colSpan",
  "rowspan": "rowSpan",
  "readonly": "readOnly",
  "maxlength": "maxLength",
  "minlength": "minLength",
  "novalidate": "noValidate",
  "srcset": "srcSet",
  "crossorigin": "crossOrigin",
  "datetime": "dateTime",
  "contenteditable": "contentEditable",
  "spellcheck": "spellCheck",
  "playsinline": "playsInline",
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
  const parts = name.split(/[^a-zA-Z0-9]+/).filter(Boolean).map((p) => {
    return p.charAt(0).toUpperCase() + p.slice(1);
  });
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
    if (value === undefined) {
      out.push(name);
      continue;
    }
    if (name === "style") {
      const obj = inlineStyleToObject(value);
      if (obj) { out.push("style=" + obj); continue; }
    }
    const escaped = value.replace(/"/g, "&quot;").replace(/\n/g, " ");
    out.push(name + "=\"" + escaped + "\"");
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
    const close = m[1];
    const name = m[2];
    const attrText = m[3];
    const selfClose = m[4];
    if (selfClose) {
      out += "<" + name + convertAttrs(attrText) + " />";
    } else if (VOID_ELEMENTS.has(name.toLowerCase())) {
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

function extractStyles(doc) {
  const styles = [];
  const re = /<style[^>]*>([\s\S]*?)<\/style>/gi;
  let m;
  while ((m = re.exec(doc))) styles.push(m[1]);
  return styles.join("\n\n");
}

function main() {
  if (!fs.existsSync(SOURCE)) {
    console.error("[stitch:convert] Source not found: " + SOURCE);
    console.error("[stitch:convert] Run from apps/web, after mockups exist in the repo.");
    process.exit(1);
  }

  fs.rmSync(OUT_DIR, { recursive: true, force: true });
  fs.mkdirSync(OUT_DIR, { recursive: true });

  const folders = fs
    .readdirSync(SOURCE, { withFileTypes: true })
    .filter((e) => e.isDirectory())
    .map((e) => e.name)
    .sort();

  const registry = new Map();
  let converted = 0;
  const skipped = [];

  for (const folder of folders) {
    const htmlPath = path.join(SOURCE, folder, "code.html");
    if (!fs.existsSync(htmlPath)) {
      skipped.push(folder + " (no code.html)");
      continue;
    }
    const doc = fs.readFileSync(htmlPath, "utf-8");
    const css = extractStyles(doc);
    const jsx = htmlToJsx(extractBody(doc));

    const componentName = pascal(folder);
    const safeFile = folder.replace(/[^a-zA-Z0-9._-]/g, "_");
    const cssFile = safeFile + ".css";

    const component = [
      "// AUTO-GENERATED from " + folder + "/code.html by scripts/convert-stitch-to-react.mjs -- do not edit.",
      'import AppShell from "@/components/alexandria/AppShell";',
      'import "./' + cssFile + '";',
      "",
      "export default function " + componentName + "() {",
      "  return (",
      '    <AppShell pageName="' + folder.replace(/"/g, "'") + '">',
      '      <div className="stitch-page">',
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
      "/* AUTO-GENERATED page styles (" + folder + ") */\n" + css + "\n"
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

  console.log("[stitch:convert] Converted " + converted + " pages into React components.");
  if (skipped.length) {
    console.log("[stitch:convert] Skipped " + skipped.length + ":");
    for (const s of skipped) console.log("  - " + s);
  }
  console.log("[stitch:convert] Registry written: " + path.relative(webRoot, REGISTRY));
}

main();
