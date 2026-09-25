import fs from "fs/promises";
import path from "path";

/**
 * Renders a Stitch design as the actual full-bleed application page.
 *
 * IMPORTANT: Do NOT inject full code.html via dangerouslySetInnerHTML.
 * Each design is a complete HTML document (html/head/body + Tailwind CDN
 * config script). Nested documents inside a React div do not run scripts
 * and produce blank / collapsed layouts.
 *
 * Instead serve the file materialised by scripts/copy-mockups.mjs at
 *   public/mockups/<folder>/index.html
 * through a full-viewport iframe. That preserves the design's own
 * Tailwind Play CDN, fonts, and scripts exactly as in Stitch.
 */
export async function stitchAssetExists(folder: string): Promise<boolean> {
  const filePath = path.join(
    process.cwd(),
    "public",
    "mockups",
    folder,
    "index.html"
  );
  try {
    await fs.access(filePath);
    return true;
  } catch {
    return false;
  }
}

export default async function StitchPage({
  folder,
}: {
  folder: string;
}) {
  const exists = await stitchAssetExists(folder);

  if (!exists) {
    return (
      <main className="flex min-h-screen items-center justify-center bg-[#0A0A0A] px-6">
        <div className="max-w-lg text-center">
          <h1 className="mb-3 text-2xl font-semibold text-white">
            Design unavailable: {folder}
          </h1>
          <p className="mb-4 text-white/60 text-sm leading-relaxed">
            Mockup HTML is missing under <code className="text-white/80">public/mockups/{folder}/index.html</code>.
            Copy the Stitch sources, then hard-refresh.
          </p>
          <pre className="rounded-lg bg-white/5 p-4 text-left text-xs text-emerald-300 overflow-x-auto">
{`cd apps/web
npm run mockups:copy
# or: npm run dev   (runs predev → copy-mockups)
npm run dev`}
          </pre>
        </div>
      </main>
    );
  }

  // Full-bleed iframe — design runs as its own document (Tailwind CDN works).
  const src = `/mockups/${encodeURIComponent(folder)}/index.html`;

  return (
    <div className="fixed inset-0 w-screen h-screen overflow-hidden bg-[#0A0A0A]">
      <iframe
        title={folder}
        src={src}
        className="absolute inset-0 h-full w-full border-0"
        // Allow same-origin scripts (Tailwind CDN, design JS)
        sandbox="allow-scripts allow-same-origin allow-forms allow-popups allow-modals"
      />
    </div>
  );
}
