"use client";

import { useEffect, useState } from "react";
import { EvidenceCarousel } from "../mockups/acquit-case-workspace/EvidenceCarousel";
import { osData } from "../../lib/osData";

export function EvidenceLockerPage() {
  const [nodes, setNodes] = useState<any[]>([]);
  const [tab, setTab] = useState<"locker" | "research">("locker");

  useEffect(() => {
    void osData.listDocumentNodes(40).then(setNodes);
  }, []);

  return (
    <main className="min-h-screen bg-[#0A0A0A] p-4 pb-20 text-white md:p-8">
      <header className="mb-4 flex flex-wrap items-end justify-between gap-3">
        <div>
          <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-[#D4AF37]">
            Investigations
          </p>
          <h1 className="font-serif text-2xl">Evidence Locker</h1>
        </div>
        <div className="flex gap-1 rounded-lg border border-white/10 p-0.5">
          <button
            type="button"
            onClick={() => setTab("locker")}
            className={`rounded-md px-3 py-1.5 text-xs font-semibold ${
              tab === "locker" ? "bg-[#D4AF37] text-black" : "text-white/60"
            }`}
          >
            Evidence Locker
          </button>
          <button
            type="button"
            onClick={() => setTab("research")}
            className={`rounded-md px-3 py-1.5 text-xs font-semibold ${
              tab === "research" ? "bg-[#D4AF37] text-black" : "text-white/60"
            }`}
          >
            Active Research
          </button>
        </div>
      </header>

      {tab === "locker" ? (
        <>
          <EvidenceCarousel />
          <div className="mt-6 grid gap-2 sm:grid-cols-2 lg:grid-cols-3">
            {nodes.map((n) => (
              <div
                key={n.id}
                className="rounded-lg border border-white/10 bg-white/[0.03] p-3 text-xs"
              >
                <p className="font-medium text-white">{n.title || n.name || n.id}</p>
                <p className="mt-1 font-mono text-[10px] text-white/40">{n.node_type || "node"}</p>
              </div>
            ))}
          </div>
        </>
      ) : (
        <section className="rounded-xl border border-white/10 bg-[#0E0E0E] p-6">
          <h2 className="mb-2 text-lg font-semibold">Active Research</h2>
          <p className="text-sm text-white/50">
            Case-scoped search surface (authorities + charge hints). Wire to Law Library search
            API next; Stitch remains design reference only.
          </p>
        </section>
      )}
    </main>
  );
}

export default EvidenceLockerPage;
