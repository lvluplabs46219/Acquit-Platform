import fs from "fs/promises";
import path from "path";

/**
 * Fallback renderer for designs not yet in the React registry.
 * Uses a full-viewport iframe so Tailwind Play CDN + full HTML work.
 * Prefer getStitchComponent() after `npm run stitch:convert`.
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
          <p className="mb-4 text-sm text-white/60 leading-relaxed">
            Run conversion or copy mockups, then hard-refresh.
          </p>
          <pre className="rounded-lg bg-white/5 p-4 text-left text-xs text-emerald-300 overflow-x-auto">
{`cd apps/web
npm run stitch:convert   # React components
npm run mockups:copy     # iframe fallback assets
npm run dev`}
          </pre>
        </div>
      </main>
    );
  }

  const src = `/mockups/${encodeURIComponent(folder)}/index.html`;

  return (
    <div className="fixed inset-0 w-screen h-screen overflow-hidden bg-[#0A0A0A]">
      <iframe
        title={folder}
        src={src}
        className="absolute inset-0 h-full w-full border-0"
        sandbox="allow-scripts allow-same-origin allow-forms allow-popups allow-modals"
      />
    </div>
  );
}
