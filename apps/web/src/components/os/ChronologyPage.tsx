"use client";

import { useState } from "react";
import { osData } from "../../lib/osData";

export function ChronologyPage() {
  const [title, setTitle] = useState("");
  const [eventType, setEventType] = useState("case_note");
  const [msg, setMsg] = useState<string | null>(null);
  const [busy, setBusy] = useState(false);

  const log = async () => {
    if (!title.trim()) return;
    setBusy(true);
    try {
      await osData.logEvent({
        event_type: eventType,
        title: title.trim(),
        event_date: new Date().toISOString(),
      });
      setMsg("Event logged via API.");
      setTitle("");
    } catch (e) {
      setMsg(e instanceof Error ? e.message : String(e));
    } finally {
      setBusy(false);
    }
  };

  return (
    <main className="min-h-screen bg-[#0A0A0A] p-4 pb-20 text-white md:p-8">
      <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-[#D4AF37]">
        Case Timeline
      </p>
      <h1 className="mb-4 font-serif text-2xl">Chronology</h1>

      <section className="mb-8 max-w-lg rounded-xl border border-white/10 bg-[#0E0E0E] p-4">
        <h2 className="mb-3 text-[11px] font-bold uppercase tracking-wider text-white/50">
          Log Event
        </h2>
        <select
          value={eventType}
          onChange={(e) => setEventType(e.target.value)}
          className="mb-2 w-full rounded-lg border border-white/15 bg-black/50 px-3 py-2 text-sm"
        >
          <option value="arrest">Arrest</option>
          <option value="arraignment">Arraignment</option>
          <option value="filing_deadline">Filing Deadline</option>
          <option value="case_note">Case Note</option>
          <option value="order_entered">Order Entered</option>
        </select>
        <input
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder="Event title"
          className="mb-2 w-full rounded-lg border border-white/15 bg-black/50 px-3 py-2 text-sm outline-none focus:border-[#D4AF37]"
        />
        <button
          type="button"
          disabled={busy}
          onClick={() => void log()}
          className="rounded-lg bg-[#D4AF37] px-4 py-2 text-sm font-bold text-black"
        >
          Log Event
        </button>
        {msg && <p className="mt-2 text-xs text-white/50">{msg}</p>}
      </section>

      <p className="text-sm text-white/40">
        Timeline canvas will load case events from Supabase once the events table is fully populated.
        Command Center chronology rail already lists cases as a stand-in.
      </p>
    </main>
  );
}

export default ChronologyPage;
