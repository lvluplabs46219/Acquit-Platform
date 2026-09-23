import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, Code2, ExternalLink } from "lucide-react";
import {
  ALL_STITCH_MOCKUPS,
  formatMockupName,
  findCategoryForMockup,
} from "@/components/stitch/stitchConfig";

interface StitchViewerProps {
  params: Promise<{ mockupName: string }>;
}

export function generateStaticParams() {
  return ALL_STITCH_MOCKUPS.map((mockupName) => ({ mockupName }));
}

export async function generateMetadata({ params }: StitchViewerProps) {
  const { mockupName } = await params;
  const label = formatMockupName(decodeURIComponent(mockupName));
  return { title: `${label} — Acquit.ai Stitch OS` };
}

export default async function StitchViewerPage({ params }: StitchViewerProps) {
  const { mockupName: raw } = await params;
  const mockupName = decodeURIComponent(raw);

  if (!ALL_STITCH_MOCKUPS.includes(mockupName)) {
    notFound();
  }

  const category = findCategoryForMockup(mockupName);
  const label = formatMockupName(mockupName);

  return (
    <div className="flex min-h-screen flex-col bg-[#141313] text-[#e5e2e1]">
      {/* Header / Breadcrumbs */}
      <header className="border-b border-[#44474a]/40 bg-[#1c1b1b]/80 px-4 py-3 backdrop-blur">
        <div className="flex flex-wrap items-center justify-between gap-3">
          <div className="flex items-center gap-3 text-xs">
            <Link
              href="/stitch"
              className="flex items-center gap-1.5 font-semibold uppercase tracking-widest text-[#b5c8df] hover:text-white"
            >
              <ArrowLeft size={14} />
              Stitch Gallery
            </Link>
            <span className="text-[#8f9194]">/</span>
            <span className="font-mono uppercase tracking-wider text-[#8f9194]">
              {category?.label || "Workspace"}
            </span>
            <span className="text-[#8f9194]">/</span>
            <span className="font-semibold text-white">{label}</span>
          </div>

          <div className="flex items-center gap-2">
            <a
              href={`/assets/stitch/${mockupName}/code.html`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 rounded border border-[#44474a]/60 px-3 py-1.5 text-xs font-semibold text-[#c5c6ca] transition hover:border-[#b5c8df]/60 hover:text-white"
            >
              <Code2 size={13} />
              Live Code
            </a>
            <a
              href={`/assets/stitch/${mockupName}/screen.png`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 rounded border border-[#44474a]/60 px-3 py-1.5 text-xs font-semibold text-[#c5c6ca] transition hover:border-[#b5c8df]/60 hover:text-white"
            >
              <ExternalLink size={13} />
              Screen Spec
            </a>
          </div>
        </div>
      </header>

      {/* Interactive iframe */}
      <main className="flex-1 p-4">
        <div className="h-full overflow-hidden rounded-xl border border-[#44474a]/50 bg-[#0e0e0e] shadow-2xl">
          <iframe
            src={`/assets/stitch/${mockupName}/code.html`}
            title={label}
            className="h-[calc(100vh-8rem)] w-full border-0"
            sandbox="allow-scripts allow-same-origin allow-popups allow-forms"
          />
        </div>
      </main>
    </div>
  );
}
