"use client";

import { useEffect, useState } from "react";
import { osData } from "../../lib/osData";

export function ConferenceRoomPage() {
  const [agents, setAgents] = useState<any[]>([]);
  const [prompt, setPrompt] = useState("");
  const [output, setOutput] = useState<string | null>(null);
  const [busy, setBusy] = useState(false);

  useEffect(() => {
    void osData.listAgents().then(setAgents);
  }, []);

  const run = async () => {
    if (!prompt.trim()) return;
    setBusy(true);
    setOutput(null);
    try {
      const res = await osData.runAgent({
        prompt: prompt.trim(),
        agent_key: "research",
        sensitivity: "standard",
      });
      setOutput(JSON.stringify(res, null, 2));
    } catch (e) {
      setOutput(e instanceof Error ? e.message : String(e));
    } finally {
      setBusy(false);
    }
  };

  return (
    <main className="flex min-h-screen flex-col bg-[#0A0A0A] text-white lg:flex-row">
      <aside className="w-full border-b border-white/10 bg-[#0E0E0E] p-4 lg:w-56 lg:border-b-0 lg:border-r">
        <h2 className="mb-3 text-[11px] font-bold uppercase tracking-wider text-white/50">
          Counsel Roster
        </h2>
        <ul className="space-y-1 text-sm">
          {(agents.length ? agents : [{ name: "Research AI" }, { name: "Rights Checker" }]).map(
            (a, i) => (
              <li
                key={a.id || i}
                className="rounded-lg px-2 py-1.5 text-white/80 hover:bg-white/5"
              >
                {a.name || a.key || "Counsel"}
              </li>
            ),
          )}
        </ul>
        <a
          href="/chambers?sub=rights_audit"
          className="mt-4 block text-xs font-semibold text-[#D4AF37]"
        >
          Rights Audit →
        </a>
      </aside>

      <section className="flex flex-1 flex-col p-4">
        <h1 className="mb-2 font-serif text-xl text-[#D4AF37]">Conference Room</h1>
        <p className="mb-4 text-xs text-white/40">
          Notice of AI Assistance — not legal advice. Runs via `/api/v1/agents/execute`.
        </p>
        <div className="mb-3 flex-1 overflow-auto rounded-xl border border-white/10 bg-black/40 p-3 font-mono text-xs text-white/70">
          {output || "Counsel responses appear here."}
        </div>
        <div className="flex gap-2">
          <input
            value={prompt}
            onChange={(e) => setPrompt(e.target.value)}
            placeholder="Brief counsel…"
            className="flex-1 rounded-lg border border-white/15 bg-[#0E0E0E] px-3 py-2 text-sm outline-none focus:border-[#D4AF37]"
          />
          <button
            type="button"
            disabled={busy}
            onClick={() => void run()}
            className="rounded-lg bg-[#174E48] px-4 py-2 text-sm font-semibold text-[#D4AF37] disabled:opacity-40"
          >
            {busy ? "Running…" : "Send"}
          </button>
        </div>
      </section>
    </main>
  );
}

export default ConferenceRoomPage;
