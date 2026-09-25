"use client";

import { useEffect, useState } from "react";
import { osData, type CaseRow } from "../../lib/osData";

export function DocketEntriesPage() {
  const [cases, setCases] = useState<CaseRow[]>([]);
  const [loading, setLoading] = useState(true);
  const [title, setTitle] = useState("");
  const [caseNumber, setCaseNumber] = useState("");
  const [busy, setBusy] = useState(false);
  const [msg, setMsg] = useState<string | null>(null);

  const refresh = async () => {
    setLoading(true);
    const c = await osData.listCases(100);
    setCases(c);
    setLoading(false);
  };

  useEffect(() => {
    void refresh();
  }, []);

  const openMatter = async () => {
    if (!title.trim()) return;
    setBusy(true);
    setMsg(null);
    try {
      await osData.openMatter({
        title: title.trim(),
        case_number: caseNumber.trim() || undefined,
      });
      setTitle("");
      setCaseNumber("");
      setMsg("Matter submitted via API.");
      await refresh();
    } catch (e) {
      setMsg(e instanceof Error ? e.message : String(e));
    } finally {
      setBusy(false);
    }
  };

  return (
    <main className="min-h-screen bg-[#0A0A0A] p-4 pb-20 text-white md:p-8">
      <header className="mb-6">
        <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-[#D4AF37]">
          The Docket
        </p>
        <h1 className="font-serif text-2xl">Docket Entries</h1>
        <p className="mt-1 max-w-xl text-sm text-white/50">
          Master list of matters. Open a Matter posts to the API; list reads from Supabase{" "}
          <code className="text-[#D4AF37]">cases</code>.
        </p>
      </header>

      <section className="mb-8 rounded-xl border border-[#D4AF37]/25 bg-[#0E0E0E] p-4">
        <h2 className="mb-3 text-[11px] font-bold uppercase tracking-wider text-white/60">
          Open a Matter
        </h2>
        <div className="flex flex-col gap-2 sm:flex-row">
          <input
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            placeholder="Matter title"
            className="flex-1 rounded-lg border border-white/15 bg-black/50 px-3 py-2 text-sm outline-none focus:border-[#D4AF37]"
          />
          <input
            value={caseNumber}
            onChange={(e) => setCaseNumber(e.target.value)}
            placeholder="Case # (optional)"
            className="sm:w-40 rounded-lg border border-white/15 bg-black/50 px-3 py-2 text-sm outline-none focus:border-[#D4AF37]"
          />
          <button
            type="button"
            disabled={busy || !title.trim()}
            onClick={() => void openMatter()}
            className="rounded-lg bg-[#D4AF37] px-4 py-2 text-sm font-bold text-black disabled:opacity-40"
          >
            {busy ? "Filing…" : "Open Matter"}
          </button>
        </div>
        {msg && <p className="mt-2 text-xs text-white/60">{msg}</p>}
      </section>

      <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
        {loading && <p className="text-sm text-white/40">Loading docket…</p>}
        {!loading && cases.length === 0 && (
          <p className="text-sm text-white/40">No docket entries.</p>
        )}
        {cases.map((c) => (
          <article
            key={c.id}
            className="rounded-xl border border-white/10 bg-white/[0.03] p-4 transition hover:border-[#D4AF37]/40"
          >
            <div className="mb-2 flex items-center justify-between gap-2">
              <span className="rounded bg-white/10 px-2 py-0.5 font-mono text-[10px] uppercase text-white/70">
                {c.status || "active"}
              </span>
              <span className="font-mono text-[10px] text-white/40">
                {c.case_number || c.id.slice(0, 8)}
              </span>
            </div>
            <h3 className="font-semibold text-white">{c.title || "Untitled matter"}</h3>
            <p className="mt-1 text-xs text-white/45">{c.court || "Court TBD"}</p>
          </article>
        ))}
      </div>
    </main>
  );
}

export default DocketEntriesPage;
