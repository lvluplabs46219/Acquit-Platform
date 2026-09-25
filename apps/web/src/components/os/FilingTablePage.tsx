"use client";

import { useEffect, useState } from "react";
import { osData, type FilingRow } from "../../lib/osData";

export function FilingTablePage() {
  const [rows, setRows] = useState<FilingRow[]>([]);
  const [title, setTitle] = useState("");
  const [busy, setBusy] = useState(false);
  const [msg, setMsg] = useState<string | null>(null);

  const refresh = async () => setRows(await osData.listFilings(80));

  useEffect(() => {
    void refresh();
  }, []);

  const file = async () => {
    if (!title.trim()) return;
    setBusy(true);
    try {
      await osData.fileRecord({ title: title.trim(), filing_type: "exhibit" });
      setTitle("");
      setMsg("Record submitted.");
      await refresh();
    } catch (e) {
      setMsg(e instanceof Error ? e.message : String(e));
    } finally {
      setBusy(false);
    }
  };

  return (
    <main className="min-h-screen bg-[#0A0A0A] p-4 pb-20 text-white md:p-8">
      <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-[#D4AF37]">
        Record Room
      </p>
      <h1 className="mb-4 font-serif text-2xl">Filing Table</h1>

      <div className="mb-6 flex flex-col gap-2 sm:flex-row">
        <input
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder="File a Record — title"
          className="flex-1 rounded-lg border border-white/15 bg-black/50 px-3 py-2 text-sm outline-none focus:border-[#D4AF37]"
        />
        <button
          type="button"
          disabled={busy}
          onClick={() => void file()}
          className="rounded-lg bg-[#174E48] px-4 py-2 text-sm font-semibold text-[#D4AF37]"
        >
          File a Record
        </button>
      </div>
      {msg && <p className="mb-4 text-xs text-white/50">{msg}</p>}

      <div className="overflow-x-auto rounded-xl border border-white/10">
        <table className="w-full min-w-[640px] text-left text-sm">
          <thead className="bg-white/5 text-[10px] uppercase tracking-wider text-white/50">
            <tr>
              <th className="px-3 py-2">Name</th>
              <th className="px-3 py-2">Filed As</th>
              <th className="px-3 py-2">Status</th>
              <th className="px-3 py-2">Date</th>
            </tr>
          </thead>
          <tbody>
            {rows.map((r) => (
              <tr key={r.id} className="border-t border-white/5">
                <td className="px-3 py-2">{r.title || r.id}</td>
                <td className="px-3 py-2 font-mono text-xs">{r.filing_type || "—"}</td>
                <td className="px-3 py-2">{r.status || "—"}</td>
                <td className="px-3 py-2 font-mono text-xs text-white/40">
                  {r.created_at || ""}
                </td>
              </tr>
            ))}
            {rows.length === 0 && (
              <tr>
                <td colSpan={4} className="px-3 py-6 text-center text-white/40">
                  No filings yet.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </main>
  );
}

export default FilingTablePage;
