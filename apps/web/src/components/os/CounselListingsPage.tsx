"use client";

import { FeaturedAttorneysCarousel } from "../mockups/acquit-case-workspace/FeaturedAttorneysCarousel";

export function CounselListingsPage() {
  return (
    <main className="min-h-screen bg-[#0A0A0A] p-4 pb-20 text-white md:p-8">
      <div className="mb-4 rounded-lg border border-amber-500/30 bg-amber-950/20 px-3 py-2 text-xs text-amber-100/90">
        <strong>Directory Notice:</strong> Listings are informational only and do not constitute
        endorsement, referral, or representation by Acquit.ai.
      </div>
      <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-[#D4AF37]">
        Counsel Directory
      </p>
      <h1 className="mb-6 font-serif text-2xl">Counsel Listings</h1>
      <FeaturedAttorneysCarousel />
      <p className="mt-6 text-sm text-white/40">
        Full directory grid will bind to <code className="text-[#D4AF37]">/api/directory</code> when
        live lawyer rows are available.
      </p>
    </main>
  );
}

export default CounselListingsPage;
