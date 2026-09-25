"use client";

import { useState } from "react";
import { osData } from "../../lib/osData";

export function RightsAuditPage() {
  const [transcript, setTranscript] = useState("");
  const [out, setOut] = useState<string | null>(null);
  const [busy, setBusy] = useState(false);

  const run = async () => {
    setBusy(true);
    try {
      const res = await osData.runAgent({
        agent_key: "rights_audit",
        prompt: `Rights audit of encounter:\n${transcript}`,
        sensitivity: "high",
      });
      setOut(JSON.stringify(res, null, 2));
    } catch (e) {
      setOut(e instanceof Error ? e.message : String(e));
    } finally {
      setBusy(false);
    }
  };

  return (
    <main className="min-h-screen bg-[#0A0A0A] p-4 pb-20 text-white md:p-8">
      <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-[#D4AF37]">
        Chambers · Rights Audit
      </p>
      <h1 className="mb-4 font-serif text-2xl">Rights Audit</h1>
      <p className="mb-4 max-w-2xl text-sm text-white/50">
        Analyze police interaction / arrest narrative for Fourth, Fifth, and Sixth Amendment risk
        flags. Not legal advice.
      </p>
      <textarea
        value={transcript}
        onChange={(e) => setTranscript(e.target.value)}
        rows={8}
        placeholder="Paste encounter narrative or officer report text…"
        className="mb-3 w-full max-w-3xl rounded-xl border border-white/15 bg-black/50 p-3 text-sm outline-none focus:border-[#D4AF37]"
      />
      <button
        type="button"
        disabled={busy || !transcript.trim()}
        onClick={() => void run()}
        className="rounded-lg bg-[#174E48] px-4 py-2 text-sm font-semibold text-[#D4AF37] disabled:opacity-40"
      >
        {busy ? "Auditing…" : "Run Rights Audit"}
      </button>
      {out && (
        <pre className="mt-4 max-w-3xl overflow-auto rounded-xl border border-white/10 bg-black/60 p-3 text-xs text-white/70">
          {out}
        </pre>
      )}
    </main>
  );
}

export default RightsAuditPage;
