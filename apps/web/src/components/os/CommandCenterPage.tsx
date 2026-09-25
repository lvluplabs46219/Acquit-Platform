"use client";

import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { osData, type CaseRow, type AgentRunRow } from "../../lib/osData";

export function CommandCenterPage() {
  const [cases, setCases] = useState<CaseRow[]>([]);
  const [runs, setRuns] = useState<AgentRunRow[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    let cancelled = false;
    (async () => {
      try {
        const [c, r] = await Promise.all([
          osData.listCases(20),
          osData.listAgentRuns(10),
        ]);
        if (!cancelled) {
          setCases(c);
          setRuns(r);
        }
      } catch (e) {
        if (!cancelled) setError(e instanceof Error ? e.message : String(e));
      } finally {
        if (!cancelled) setLoading(false);
      }
    })();
    return () => {
      cancelled = true;
    };
  }, []);

  const active = cases[0];
  const chargeCount = cases.length;
  const taskLike = runs.filter((r) => r.status === "running" || r.status === "pending").length;

  return (
    <main className="min-h-screen bg-[#0A0A0A] pb-16 text-white">
      <div className="border-b border-[#D4AF37]/20 bg-[#0E0E0E] px-4 py-3">
        <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-[#D4AF37]">
          Command Center · War Room
        </p>
        <div className="mt-1 flex flex-wrap items-center gap-3">
          <h1 className="font-serif text-xl text-white">
            {active?.title || active?.case_number || "State v. [Litigant]"}
          </h1>
          <span className="rounded border border-emerald-500/40 bg-emerald-950/40 px-2 py-0.5 font-mono text-[10px] text-emerald-400">
            {(active?.status || "ACTIVE").toUpperCase()}
          </span>
          <span className="font-mono text-xs text-white/50">
            #{active?.case_number || "—"}
          </span>
        </div>
      </div>

      {error && (
        <div className="mx-4 mt-4 rounded-lg border border-red-500/30 bg-red-950/30 px-3 py-2 text-sm text-red-200">
          {error}
        </div>
      )}

      <div className="mx-auto grid max-w-7xl gap-4 p-4 sm:grid-cols-2 lg:grid-cols-4">
        {[
          { label: "Matters", value: chargeCount },
          { label: "Agent runs", value: runs.length },
          { label: "Pending counsel", value: taskLike },
          { label: "Records", value: "—" },
        ].map((kpi) => (
          <div
            key={kpi.label}
            className="rounded-xl border border-white/10 bg-white/[0.03] p-4"
          >
            <p className="text-[10px] font-bold uppercase tracking-wider text-white/50">
              {kpi.label}
            </p>
            <p className="mt-1 font-mono text-2xl text-[#D4AF37]">
              {loading ? "…" : kpi.value}
            </p>
          </div>
        ))}
      </div>

      <div className="mx-auto grid max-w-7xl gap-4 px-4 lg:grid-cols-[55%_1fr]">
        <section className="rounded-xl border border-white/10 bg-[#0E0E0E] p-4">
          <h2 className="mb-3 text-[11px] font-bold uppercase tracking-wider text-white/60">
            Chronology Rail
          </h2>
          <ul className="space-y-2">
            {cases.slice(0, 8).map((c) => (
              <li
                key={c.id}
                className="flex items-center gap-3 rounded-lg border border-white/5 bg-black/40 px-3 py-2 text-sm"
              >
                <span className="h-2 w-2 shrink-0 rounded-full bg-[#D4AF37] shadow-[0_0_8px_rgba(212,175,55,0.6)]" />
                <div className="min-w-0 flex-1">
                  <p className="truncate font-medium">{c.title || c.case_number || c.id}</p>
                  <p className="font-mono text-[10px] text-white/40">
                    {c.updated_at || c.created_at || ""}
                  </p>
                </div>
              </li>
            ))}
            {!loading && cases.length === 0 && (
              <p className="text-sm text-white/40">No cases in Supabase yet.</p>
            )}
          </ul>
          <Link
            to="/timeline"
            className="mt-3 inline-block text-xs font-semibold text-[#D4AF37] hover:underline"
          >
            Open full Chronology →
          </Link>
        </section>

        <section className="rounded-xl border border-white/10 bg-[#0E0E0E] p-4">
          <h2 className="mb-3 text-[11px] font-bold uppercase tracking-wider text-white/60">
            Chambers Panel
          </h2>
          <ul className="space-y-2">
            {runs.slice(0, 6).map((r) => (
              <li
                key={r.id}
                className="rounded-lg border border-white/5 bg-black/40 px-3 py-2 text-xs"
              >
                <span className="font-mono text-white/80">{r.status || "unknown"}</span>
                <span className="ml-2 text-white/40">{r.agent_id || r.id.slice(0, 8)}</span>
              </li>
            ))}
            {!loading && runs.length === 0 && (
              <p className="text-sm text-white/40">No agent_runs yet.</p>
            )}
          </ul>
          <Link
            to="/chambers"
            className="mt-3 inline-block text-xs font-semibold text-[#D4AF37] hover:underline"
          >
            Enter Conference Room →
          </Link>
        </section>
      </div>

      <div className="mx-auto mt-4 flex max-w-7xl flex-wrap gap-2 px-4">
        <Link
          to="/docket"
          className="rounded-lg border border-[#D4AF37]/40 bg-[#D4AF37]/10 px-3 py-2 text-xs font-semibold text-[#D4AF37]"
        >
          The Docket
        </Link>
        <Link
          to="/investigations"
          className="rounded-lg border border-white/15 bg-white/5 px-3 py-2 text-xs text-white/80"
        >
          Evidence Locker
        </Link>
        <Link
          to="/record-room"
          className="rounded-lg border border-white/15 bg-white/5 px-3 py-2 text-xs text-white/80"
        >
          Record Room
        </Link>
        <Link
          to="/gallery"
          className="rounded-lg border border-white/10 px-3 py-2 text-xs text-white/40"
        >
          Stitch gallery (design ref)
        </Link>
      </div>
    </main>
  );
}

export default CommandCenterPage;
