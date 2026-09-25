// AUTO-GENERATED from acquit.ai_telegram_genteam_ai_workspace_lemonade_server/code.html by scripts/convert-stitch-to-react.mjs -- do not edit.
import AppShell from "@/components/alexandria/AppShell";
import "./acquit.ai_telegram_genteam_ai_workspace_lemonade_server.css";

export default function AcquitAiTelegramGenteamAiWorkspaceLemonadeServer() {
  return (
    <AppShell pageName="acquit.ai_telegram_genteam_ai_workspace_lemonade_server">
      <div className="stitch-page">


<header className="h-14 border-b border-[#262525] bg-[#141313] px-4 flex items-center justify-between shrink-0 z-30">

<div className="flex items-center gap-3">
<div className="flex items-center gap-2">
<div className="w-8 h-8 rounded-lg bg-gradient-to-br from-[#facc15] via-[#ca8a04] to-[#713f12] p-[1px] shadow-sm">
<div className="w-full h-full bg-[#181717] rounded-[7px] flex items-center justify-center">
<span className="material-symbols-outlined text-lemon-400 text-lg">bolt</span>
</div>
</div>
<div>
<div className="flex items-center gap-1.5">
<span className="font-serif font-black tracking-tight text-white text-sm">ACQUIT.AI</span>
<span className="text-[10px] font-mono uppercase px-1.5 py-0.2 rounded bg-[#201f1f] text-lemon-400 border border-[#38362b]">LEMONADE CORE</span>
</div>
<p className="text-[10px] font-mono text-[#8a8888] leading-none">GenTeam Orchestration Host v2.4</p>
</div>
</div>
<div className="h-5 w-[1px] bg-[#2a2929] mx-1"></div>

<div className="flex items-center gap-2 px-2.5 py-1 rounded-md bg-[#181717] border border-[#2d2c2c] text-xs font-mono">
<span className="relative flex h-2 w-2">
<span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
<span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
</span>
<span className="text-[#a8a7a7]">Lemonade RPC:</span>
<span className="text-white font-semibold">http://localhost:8765</span>
<span className="text-[10px] text-[#5cb85c] bg-[#142918] px-1.5 py-0.5 rounded border border-[#1f4726]">CONNECTED</span>
</div>
<div className="hidden xl:flex items-center gap-2 px-2.5 py-1 rounded-md bg-[#181717] border border-[#2d2c2c] text-xs font-mono">
<span className="material-symbols-outlined text-sm text-[#8c8a8a]">memory</span>
<span className="text-[#a8a7a7]">Active Matter:</span>
<span className="text-lemon-400 font-semibold">#2024-CR-8821 (US v. Sterling)</span>
</div>
</div>

<div className="flex items-center p-1 bg-[#1a1919] border border-[#2a2929] rounded-lg">
<button className="flex items-center gap-1.5 px-3 py-1 rounded-md bg-[#2d2c2c] text-white text-xs font-medium shadow-sm">
<span className="material-symbols-outlined text-sm text-lemon-400">groups</span>
<span>GenTeam Hub</span>
</button>
<button className="flex items-center gap-1.5 px-3 py-1 rounded-md text-[#9e9d9d] hover:text-white text-xs font-medium hover:bg-[#222121] transition">
<span className="material-symbols-outlined text-sm">psychology</span>
<span>Persona Forge</span>
</button>
<button className="flex items-center gap-1.5 px-3 py-1 rounded-md text-[#9e9d9d] hover:text-white text-xs font-medium hover:bg-[#222121] transition">
<span className="material-symbols-outlined text-sm">terminal</span>
<span>Playground Arena</span>
</button>
<button className="flex items-center gap-1.5 px-3 py-1 rounded-md text-[#9e9d9d] hover:text-white text-xs font-medium hover:bg-[#222121] transition">
<span className="material-symbols-outlined text-sm text-lemon-400">dns</span>
<span>Lemonade Topology</span>
</button>
</div>

<div className="flex items-center gap-2">

<button className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-gradient-to-r from-lemon-500 to-amber-600 hover:from-lemon-400 hover:to-amber-500 text-black font-bold text-xs shadow-md transition transform active:scale-95">
<span className="material-symbols-outlined text-base">person_add</span>
<span>+ Assemble New Agent</span>
</button>
<button className="p-2 rounded-lg bg-[#1a1919] border border-[#2a2929] text-[#a09e9e] hover:text-white transition" title="The Clerk Notifications">
<span className="material-symbols-outlined text-lg">notifications</span>
</button>
<button className="p-2 rounded-lg bg-[#1a1919] border border-[#2a2929] text-[#a09e9e] hover:text-white transition" title="Server Logs &amp; Telemetry">
<span className="material-symbols-outlined text-lg">developer_board</span>
</button>
<div className="w-7 h-7 rounded-full bg-[#262525] border border-[#3b3a3a] flex items-center justify-center font-mono text-[11px] font-bold text-lemon-400">
        SC
      </div>
</div>
</header>

<div className="flex-1 flex overflow-hidden w-full h-[calc(100vh-3.5rem)]">

<nav className="w-[72px] bg-[#100f0f] border-r border-[#242323] flex flex-col items-center py-3 justify-between shrink-0 select-none z-20">
<div className="flex flex-col items-center gap-4 w-full">

<div className="relative group flex flex-col items-center cursor-pointer">
<div className="w-11 h-11 rounded-2xl bg-[#222121] text-lemon-400 flex items-center justify-center border border-[#38362b] shadow-sm transition hover:bg-[#2a2929]">
<span className="material-symbols-outlined text-2xl">chat</span>
</div>
<span className="text-[10px] font-sans mt-1 text-white font-medium">All</span>
<span className="absolute -top-1 right-2 px-1.5 py-0.2 bg-lemon-400 text-black text-[9px] font-bold rounded-full font-mono shadow">12</span>
</div>

<div className="relative group flex flex-col items-center cursor-pointer">
<div className="w-11 h-11 rounded-2xl bg-gradient-to-tr from-[#3a280c] to-[#705213] text-white flex items-center justify-center border border-lemon-400 shadow-md transition">
<span className="material-symbols-outlined text-2xl text-lemon-400">groups</span>
</div>
<span className="text-[10px] font-sans mt-1 text-lemon-400 font-bold">GenTeam</span>
<span className="absolute -top-1 right-2 px-1.5 py-0.2 bg-emerald-500 text-black text-[9px] font-bold rounded-full font-mono animate-pulse">5</span>
</div>

<div className="relative group flex flex-col items-center cursor-pointer opacity-75 hover:opacity-100 transition">
<div className="w-11 h-11 rounded-2xl bg-[#181717] text-[#aaa] hover:text-white flex items-center justify-center border border-[#292828] hover:bg-[#222121]">
<span className="material-symbols-outlined text-2xl">smart_toy</span>
</div>
<span className="text-[10px] font-sans mt-1 text-[#888]">Bots</span>
<span className="absolute -top-1 right-2 px-1.5 py-0.2 bg-[#2d2c2c] text-[#bbb] text-[9px] font-bold rounded-full font-mono">3</span>
</div>

<div className="relative group flex flex-col items-center cursor-pointer opacity-75 hover:opacity-100 transition">
<div className="w-11 h-11 rounded-2xl bg-[#181717] text-[#aaa] hover:text-white flex items-center justify-center border border-[#292828] hover:bg-[#222121]">
<span className="material-symbols-outlined text-2xl">bookmark</span>
</div>
<span className="text-[10px] font-sans mt-1 text-[#888]">Briefs</span>
</div>

<div className="relative group flex flex-col items-center cursor-pointer opacity-75 hover:opacity-100 transition">
<div className="w-11 h-11 rounded-2xl bg-[#181717] text-[#aaa] hover:text-white flex items-center justify-center border border-[#292828] hover:bg-[#222121]">
<span className="material-symbols-outlined text-2xl text-emerald-400">dns</span>
</div>
<span className="text-[10px] font-sans mt-1 text-[#888]">vLLM</span>
</div>
</div>

<div className="flex flex-col items-center gap-3 w-full pb-2">
<button className="w-10 h-10 rounded-xl bg-[#181717] text-[#888] hover:text-white flex items-center justify-center hover:bg-[#222121] border border-[#262525] transition" title="Telegram Client Settings">
<span className="material-symbols-outlined text-xl">settings</span>
</button>
<div className="w-9 h-9 rounded-full bg-gradient-to-tr from-[#2d2c2c] to-[#454749] border border-lemon-400 text-lemon-400 flex items-center justify-center text-xs font-serif font-bold shadow-md cursor-pointer">
        SC
      </div>
</div>
</nav>

<aside className="w-[340px] border-r border-[#242323] bg-[#141313] flex flex-col shrink-0 select-none">

<div className="p-3 border-b border-[#242323] bg-[#161515]">
<div className="relative flex items-center mb-2.5">
<span className="material-symbols-outlined absolute left-3 text-sm text-[#777]">search</span>
<input className="w-full bg-[#100f0f] border border-[#2b2a2a] rounded-full pl-9 pr-4 py-1.5 text-xs text-white placeholder-[#636161] focus:outline-none focus:border-lemon-400 transition font-sans" placeholder="Search chats, bots, or case cites..." type="text" />
</div>

<div className="flex items-center gap-1.5 overflow-x-auto text-[11px] font-medium">
<button className="px-2.5 py-0.5 rounded-full bg-lemon-400 text-black font-bold shadow-sm">All</button>
<button className="px-2.5 py-0.5 rounded-full bg-[#201f1f] text-[#bbb] hover:text-white border border-[#2d2c2c] transition">GenTeam Squad</button>
<button className="px-2.5 py-0.5 rounded-full bg-[#201f1f] text-[#bbb] hover:text-white border border-[#2d2c2c] transition">Bot DMs</button>
<button className="px-2.5 py-0.5 rounded-full bg-[#201f1f] text-[#bbb] hover:text-white border border-[#2d2c2c] transition">Sparring</button>
</div>
</div>

<div className="flex-1 overflow-y-auto divide-y divide-[#1e1d1d]">

<div className="p-3 bg-[#201f1f] border-l-2 border-lemon-400 cursor-pointer flex items-start gap-3 transition">
<div className="relative shrink-0">
<div className="w-12 h-12 rounded-2xl bg-gradient-to-tr from-[#3a280c] to-[#705213] border border-lemon-400 flex items-center justify-center text-lg shadow-md">
            ⚖️
          </div>
<span className="absolute -bottom-0.5 -right-0.5 w-3.5 h-3.5 bg-emerald-500 border-2 border-[#201f1f] rounded-full"></span>
</div>
<div className="flex-1 min-w-0">
<div className="flex items-center justify-between">
<h4 className="text-xs font-bold text-white truncate font-serif flex items-center gap-1.5">
<span>GenTeam Defense Squad</span>
<span className="material-symbols-outlined text-xs text-lemon-400">push_pin</span>
</h4>
<span className="text-[10px] font-mono text-lemon-400">10:41 AM</span>
</div>
<p className="text-[11px] text-[#cfcece] truncate font-sans mt-0.5">
<span className="text-lemon-400 font-semibold">Marcus Sterling:</span> Colleagues, warrant violates Fourth Amend...
          </p>
<div className="flex items-center justify-between mt-1.5">
<span className="text-[9px] font-mono px-1.5 py-0.2 rounded bg-[#162729] text-cyan-300 border border-[#1e3c3f]">5 bots active • vLLM</span>
<span className="w-4 h-4 rounded-full bg-lemon-400 text-black text-[9px] font-mono font-bold flex items-center justify-center">3</span>
</div>
</div>
</div>

<div className="p-3 hover:bg-[#181717] cursor-pointer flex items-start gap-3 transition group">
<div className="relative shrink-0">
<div className="w-12 h-12 rounded-2xl bg-[#232222] border border-[#3b3a3a] flex items-center justify-center font-serif font-bold text-lemon-400 text-sm shadow">
            MS
          </div>
<span className="absolute -bottom-0.5 -right-0.5 w-3.5 h-3.5 bg-emerald-500 border-2 border-[#141313] rounded-full"></span>
</div>
<div className="flex-1 min-w-0">
<div className="flex items-center justify-between">
<h4 className="text-xs font-bold text-white group-hover:text-lemon-400 truncate font-serif flex items-center gap-1">
<span>Marcus Sterling AI</span>
<span className="text-[9px] font-mono text-lemon-400 uppercase bg-[#28261e] px-1 rounded">BOT</span>
</h4>
<span className="text-[10px] font-mono text-[#777]">10:39 AM</span>
</div>
<p className="text-[11px] text-[#888] truncate font-sans mt-0.5 flex items-center gap-1">
<span className="material-symbols-outlined text-xs text-cyan-400">done_all</span>
<span>Suppression brief outline ready for review.</span>
</p>
<div className="flex items-center gap-1 mt-1">
<span className="text-[9px] font-mono text-[#666]">lemonade://claude-3-5-sonnet</span>
</div>
</div>
</div>

<div className="p-3 hover:bg-[#181717] cursor-pointer flex items-start gap-3 transition group">
<div className="relative shrink-0">
<div className="w-12 h-12 rounded-2xl bg-[#2a1b1b] border border-[#522929] flex items-center justify-center text-sm shadow">
            ⚔️
          </div>
<span className="absolute -bottom-0.5 -right-0.5 w-3.5 h-3.5 bg-amber-500 border-2 border-[#141313] rounded-full"></span>
</div>
<div className="flex-1 min-w-0">
<div className="flex items-center justify-between">
<h4 className="text-xs font-bold text-white group-hover:text-red-400 truncate font-serif flex items-center gap-1">
<span>AUSA Vance (Sparring)</span>
<span className="text-[9px] font-mono text-red-400 uppercase bg-[#331c1c] px-1 rounded">MOCK</span>
</h4>
<span className="text-[10px] font-mono text-[#777]">10:34 AM</span>
</div>
<p className="text-[11px] text-[#888] truncate font-sans mt-0.5 flex items-center gap-1">
<span className="text-red-300">Sparring Challenge:</span> Franks hearing motion will be denied.
          </p>
<div className="flex items-center gap-1 mt-1">
<span className="text-[9px] font-mono text-[#666]">lemonade://llama-3-3-70b</span>
</div>
</div>
</div>

<div className="p-3 hover:bg-[#181717] cursor-pointer flex items-start gap-3 transition group">
<div className="relative shrink-0">
<div className="w-12 h-12 rounded-2xl bg-[#182324] border border-[#274649] flex items-center justify-center text-sm shadow">
            📚
          </div>
<span className="absolute -bottom-0.5 -right-0.5 w-3.5 h-3.5 bg-emerald-500 border-2 border-[#141313] rounded-full"></span>
</div>
<div className="flex-1 min-w-0">
<div className="flex items-center justify-between">
<h4 className="text-xs font-bold text-white group-hover:text-cyan-300 truncate font-serif flex items-center gap-1">
<span>Lex-Archivist (R1)</span>
<span className="text-[9px] font-mono text-emerald-400 uppercase bg-[#172522] px-1 rounded">CoT</span>
</h4>
<span className="text-[10px] font-mono text-[#777]">10:28 AM</span>
</div>
<p className="text-[11px] text-[#888] truncate font-sans mt-0.5 flex items-center gap-1">
<span className="material-symbols-outlined text-xs text-cyan-400">done_all</span>
<span>SDNY Judge Rakoff 2023 opinion downloaded.</span>
</p>
<div className="flex items-center gap-1 mt-1">
<span className="text-[9px] font-mono text-[#666]">lemonade://deepseek-r1-671b</span>
</div>
</div>
</div>

<div className="p-3 hover:bg-[#181717] cursor-pointer flex items-start gap-3 transition group">
<div className="relative shrink-0">
<div className="w-12 h-12 rounded-2xl bg-[#1a1919] border border-[#2d2c2c] flex items-center justify-center text-sm text-lemon-400 shadow">
            📡
          </div>
</div>
<div className="flex-1 min-w-0">
<div className="flex items-center justify-between">
<h4 className="text-xs font-bold text-white truncate font-serif flex items-center gap-1">
<span>Lemonade Telemetry</span>
<span className="material-symbols-outlined text-xs text-[#777]">volume_off</span>
</h4>
<span className="text-[10px] font-mono text-[#777]">10:15 AM</span>
</div>
<p className="text-[11px] text-[#777] truncate font-mono mt-0.5">
            [vLLM] FlashInfer cache allocated 7,480 blks.
          </p>
</div>
</div>

<div className="p-3 hover:bg-[#181717] cursor-pointer flex items-start gap-3 transition group">
<div className="relative shrink-0">
<div className="w-12 h-12 rounded-2xl bg-[#231b26] border border-[#43294c] flex items-center justify-center text-sm shadow">
            📜
          </div>
</div>
<div className="flex-1 min-w-0">
<div className="flex items-center justify-between">
<h4 className="text-xs font-bold text-white truncate font-serif">
              The Clerk (Notice Bot)
            </h4>
<span className="text-[10px] font-mono text-[#777]">09:40 AM</span>
</div>
<p className="text-[11px] text-[#777] truncate font-sans mt-0.5">
            Notice: Motion due at 5:00 PM EST in SDNY Part I.
          </p>
</div>
</div>
</div>
</aside>

<main className="flex-1 flex flex-col bg-[#0e0e0e] min-w-0 relative">

<div className="h-14 border-b border-[#242323] px-5 flex items-center justify-between bg-[#141313] shrink-0 z-10">
<div className="flex items-center gap-3">
<div className="w-9 h-9 rounded-xl bg-gradient-to-tr from-[#3a280c] to-[#705213] border border-lemon-400 flex items-center justify-center text-white text-base shadow">
          ⚖️
        </div>
<div>
<div className="flex items-center gap-2">
<h2 className="font-serif font-bold text-white text-sm">GenTeam Defense Squad</h2>
<span className="text-[10px] font-mono uppercase px-1.5 py-0.2 rounded bg-[#201d12] text-lemon-400 border border-[#443818]">GROUP CHAT</span>
</div>
<p className="text-[11px] font-sans text-[#888]">
            5 bots, 1 human, 1 Lemonade node active • <span className="text-emerald-400 font-mono">vLLM cluster online</span>
</p>
</div>
</div>

<div className="flex items-center gap-2">
<button className="p-2 rounded-lg bg-[#181717] hover:bg-[#222121] border border-[#2b2a2a] text-[#aaa] hover:text-white transition" title="Search in Chat">
<span className="material-symbols-outlined text-base">search</span>
</button>
<button className="p-2 rounded-lg bg-[#181717] hover:bg-[#222121] border border-[#2b2a2a] text-[#aaa] hover:text-white transition" title="Voice Sparring Call">
<span className="material-symbols-outlined text-base">call</span>
</button>
<button className="p-2 rounded-lg bg-[#181717] hover:bg-[#222121] border border-[#2b2a2a] text-lemon-400 hover:text-white transition" title="Group Info / Lemonade Panel">
<span className="material-symbols-outlined text-base">right_panel_open</span>
</button>
<button className="p-2 rounded-lg bg-[#181717] hover:bg-[#222121] border border-[#2b2a2a] text-[#aaa] hover:text-white transition">
<span className="material-symbols-outlined text-base">more_vert</span>
</button>
</div>
</div>

<div className="px-4 py-2 bg-[#171616] border-b border-[#242323] flex items-center justify-between text-xs z-10">
<div className="flex items-center gap-2 min-w-0">
<div className="w-1 h-7 bg-lemon-400 rounded-full shrink-0"></div>
<div className="min-w-0">
<div className="font-sans font-bold text-lemon-400 text-[11px] leading-tight">Pinned Message #3</div>
<p className="text-[#bbb] text-xs truncate font-serif">
            Carpenter v. US Motion to Suppress Draft v3.2 — SDNY Case 24-CR-8821
          </p>
</div>
</div>
<div className="flex items-center gap-2">
<button className="text-[11px] font-mono text-lemon-400 hover:underline shrink-0">View Full Brief</button>
<button className="text-[#777] hover:text-white text-xs">
<span className="material-symbols-outlined text-sm">close</span>
</button>
</div>
</div>

<div className="flex-1 overflow-y-auto p-5 space-y-4 font-sans bg-[#111010]">

<div className="flex justify-center my-1">
<span className="px-3 py-0.5 rounded-full bg-[#1c1b1b] border border-[#292828] text-[10px] font-mono text-[#888] shadow-inner">
          Today, October 24
        </span>
</div>

<div className="flex items-start gap-2.5 max-w-3xl">
<div className="w-8 h-8 rounded-full bg-gradient-to-tr from-[#3a280c] to-[#705213] border border-lemon-400 flex items-center justify-center font-serif text-white font-bold text-xs shrink-0 mt-0.5">
          MS
        </div>
<div className="bg-[#1b1a1a] border border-[#2c2b2b] rounded-2xl rounded-tl-sm p-3.5 shadow-md relative group">

<div className="flex items-center gap-2 mb-1.5">
<span className="text-xs font-bold text-lemon-400 font-serif">Marcus Sterling AI</span>
<span className="text-[9px] font-mono px-1 rounded bg-[#28261e] text-lemon-400 border border-[#484025]">LEAD LITIGATION</span>
<span className="text-[10px] font-mono text-[#777]">BOT</span>
</div>
<div className="text-xs text-[#dedede] space-y-1.5 font-serif leading-relaxed">
<p>
              Colleagues, the government obtained our client's location data via a <strong>reverse-location geofence warrant</strong> targeting a 300-meter radius around 450 Lexington Ave.
            </p>
<p>
              This violates the Fourth Amendment’s particularity requirement under <span className="text-lemon-400 font-mono">United States v. Chatrie, 590 F. Supp. 3d 901</span> and the landmark framework of <span className="text-lemon-400 font-mono">Carpenter v. United States</span>.
            </p>
</div>

<div className="mt-3 pt-2.5 border-t border-[#292828] flex flex-wrap gap-2 font-mono">
<button className="px-2.5 py-1 rounded-lg bg-[#242323] hover:bg-[#2e2c2c] border border-[#383737] text-[11px] text-lemon-400 flex items-center gap-1 transition shadow-sm">
<span>📝 Rule 12(b)(3) Motion</span>
</button>
<button className="px-2.5 py-1 rounded-lg bg-[#242323] hover:bg-[#2e2c2c] border border-[#383737] text-[11px] text-cyan-300 flex items-center gap-1 transition shadow-sm">
<span>📋 Copy Citations</span>
</button>
</div>
<div className="text-right mt-1.5">
<span className="text-[10px] font-mono text-[#666]">10:41 AM</span>
</div>
</div>
</div>

<div className="flex items-start gap-2.5 max-w-3xl ml-4">
<div className="w-8 h-8 rounded-full bg-[#182324] border border-[#274649] flex items-center justify-center font-serif text-cyan-300 font-bold text-xs shrink-0 mt-0.5">
          LA
        </div>
<div className="bg-[#181717] border border-[#282727] rounded-2xl rounded-tl-sm p-3.5 shadow-md relative flex-1">
<div className="flex items-center gap-2 mb-1.5">
<span className="text-xs font-bold text-emerald-400 font-serif">Lex-Archivist</span>
<span className="text-[9px] font-mono px-1 rounded bg-[#172522] text-emerald-400 border border-[#20493e]">PRECEDENT SPIDER</span>
<span className="text-[10px] font-mono text-[#777]">DeepSeek-R1</span>
</div>

<div className="mb-2.5 p-2 rounded-lg bg-[#100f0f] border border-[#292828] font-mono text-[11px]">
<div className="flex items-center justify-between text-[#bbb] font-semibold text-[10px] pb-1 border-b border-[#222121]">
<span className="flex items-center gap-1 text-lemon-400">
<span className="material-symbols-outlined text-xs">psychology</span>
                Thinking process (1,480 tokens) • Lemonade Server
              </span>
<span className="text-[9px] text-[#666]">0.42s latency</span>
</div>
<p className="text-[#8c8a8a] text-[10px] mt-1 leading-normal">
              &gt; Crawled 2nd Circuit geofence rulings. 142 innocent third parties captured in Step 1 without individualized suspicion. Judge Rakoff's ruling applies directly.
            </p>
</div>
<p className="text-xs text-[#dedede] font-serif leading-relaxed">
            In the Southern District of New York, Judge Rakoff made clear: <em>“A dragnet geofence warrant that fails to limit police discretion at Steps 2 and 3 constitutes a modern general warrant prohibited by the Framers.”</em>
</p>

<div className="mt-2.5 flex flex-wrap gap-1.5 font-mono text-[10px]">
<span className="px-2 py-0.5 rounded bg-[#1f281e] text-emerald-400 border border-[#2b442b]">✓ Chatrie (99.8% Grounded)</span>
<span className="px-2 py-0.5 rounded bg-[#201d12] text-lemon-400 border border-[#443818]">★ Fed. R. Evid. 902(14) Match</span>
</div>
<div className="text-right mt-1">
<span className="text-[10px] font-mono text-[#666]">10:41 AM</span>
</div>
</div>
</div>

<div className="flex items-start gap-2.5 max-w-3xl ml-8">
<div className="w-8 h-8 rounded-full bg-[#2a1b1b] border border-[#522929] flex items-center justify-center font-serif text-red-300 font-bold text-xs shrink-0 mt-0.5">
          AV
        </div>
<div className="bg-[#1d1616] border border-[#3d1f1f] rounded-2xl rounded-tl-sm p-3.5 shadow-md relative flex-1">
<div className="flex items-center gap-2 mb-1.5">
<span className="text-xs font-bold text-red-400 font-serif">AUSA Vance (Opposing Counsel Mock)</span>
<span className="text-[9px] font-mono px-1 rounded bg-[#331c1c] text-red-300 border border-[#542424]">SPARRING BOT</span>
</div>
<p className="text-xs text-[#dedede] font-serif leading-relaxed">
<strong className="text-red-300 font-mono text-[11px]">Adversarial Sparring Counter:</strong> The government invokes the <strong>Leon Good-Faith Exception</strong>. Agents strictly adhered to Google's published 3-step geofence protocol. Counsel cannot prove bad faith under <em>Franks</em>.
          </p>

<div className="mt-2.5">
<button className="px-2.5 py-1 rounded-lg bg-red-950 hover:bg-red-900 border border-red-700 text-[11px] text-red-200 font-mono flex items-center gap-1 shadow-sm transition">
<span>⚔️ Generate Sparring Inoculation</span>
</button>
</div>
<div className="text-right mt-1">
<span className="text-[10px] font-mono text-[#666]">10:42 AM</span>
</div>
</div>
</div>

<div className="flex items-end justify-end gap-2">
<div className="bg-[#26251b] border border-[#484025] rounded-2xl rounded-tr-sm p-3 max-w-xl shadow-md text-right">
<p className="text-xs text-white font-sans text-left leading-relaxed">
<span className="text-lemon-400 font-bold font-mono">@Marcus</span> draft Section II focusing on lack of individualized probable cause at Step 1. <span className="text-lemon-400 font-bold font-mono">@AUSA-Vance</span> prepare to challenge with United States v. Rhine.
          </p>
<div className="flex items-center justify-end gap-1 mt-1.5 text-[10px] font-mono text-[#aaa]">
<span>10:42 AM</span>
<span className="material-symbols-outlined text-xs text-cyan-400">done_all</span>
</div>
</div>
</div>
</div>

<div className="p-3.5 border-t border-[#242323] bg-[#141313] shrink-0">

<div className="flex items-center gap-1.5 mb-2 overflow-x-auto text-[10px] font-mono">
<span className="text-[#777] uppercase">Commands:</span>
<button className="px-2 py-0.5 rounded bg-[#1c1b1b] hover:bg-[#252424] text-lemon-400 border border-[#333131] transition">/spar @AUSA-Vance</button>
<button className="px-2 py-0.5 rounded bg-[#1c1b1b] hover:bg-[#252424] text-lemon-400 border border-[#333131] transition">/brief [Carpenter]</button>
<button className="px-2 py-0.5 rounded bg-[#1c1b1b] hover:bg-[#252424] text-cyan-300 border border-[#333131] transition">/cite Shepardize</button>
<button className="px-2 py-0.5 rounded bg-[#1c1b1b] hover:bg-[#252424] text-emerald-400 border border-[#333131] transition">/lemonade status</button>
</div>
<div className="flex items-center gap-2">

<button className="p-2 rounded-full bg-[#1c1b1b] hover:bg-[#262525] border border-[#2f2e2e] text-[#aaa] hover:text-white transition" title="Attach Discovery File or Exhibit">
<span className="material-symbols-outlined text-xl">attach_file</span>
</button>

<div className="flex-1 relative flex items-center">
<input className="w-full bg-[#100f0f] border border-[#2f2e2e] rounded-xl pl-4 pr-10 py-2.5 text-xs text-white placeholder-[#636161] focus:outline-none focus:border-lemon-400 font-sans shadow-inner transition" placeholder="Message GenTeam or type /command..." type="text" />
<button className="absolute right-3 text-[#777] hover:text-white" title="Bot Emoji &amp; Stickers">
<span className="material-symbols-outlined text-lg">sentiment_satisfied</span>
</button>
</div>

<button className="p-2 rounded-full bg-[#1c1b1b] hover:bg-[#262525] border border-[#2f2e2e] text-[#aaa] hover:text-white transition" title="Voice Dictation">
<span className="material-symbols-outlined text-xl">mic</span>
</button>

<button className="w-10 h-10 rounded-full bg-lemon-400 hover:bg-lemon-300 text-black flex items-center justify-center font-bold shadow-md transition transform active:scale-95 shrink-0" title="Send Message">
<span className="material-symbols-outlined text-lg">send</span>
</button>
</div>
</div>
</main>

<aside className="w-[320px] border-l border-[#242323] bg-[#141313] flex flex-col shrink-0 select-none">

<div className="p-3.5 border-b border-[#242323] bg-[#161515] flex items-center justify-between">
<div className="flex items-center gap-2">
<span className="material-symbols-outlined text-lemon-400 text-lg">info</span>
<h3 className="font-serif font-bold text-white text-xs">Group &amp; Server Info</h3>
</div>
<span className="text-[9px] font-mono px-1.5 py-0.2 rounded bg-[#1f281e] text-emerald-400 border border-[#2b442b]">vLLM ONLINE</span>
</div>
<div className="flex-1 overflow-y-auto p-3.5 space-y-4 font-mono text-xs">

<div className="p-3 rounded-xl bg-[#181717] border border-[#292828] text-center flex flex-col items-center">
<div className="w-16 h-16 rounded-2xl bg-gradient-to-tr from-[#3a280c] to-[#705213] border-2 border-lemon-400 flex items-center justify-center text-3xl shadow-lg mb-2">
          ⚖️
        </div>
<h4 className="font-serif font-bold text-white text-sm">GenTeam Defense Squad</h4>
<p className="text-[10px] text-lemon-400 font-mono mt-0.5">@genteam_sdny_defense_bot</p>
<p className="text-[11px] font-sans text-[#888] mt-1.5 leading-tight">
          Autonomous constitutional defense squad for Case 24-CR-8821.
        </p>
</div>

<div className="p-3 rounded-xl bg-[#181717] border border-[#292828] space-y-2">
<div className="flex items-center justify-between pb-1 border-b border-[#242323]">
<span className="font-serif font-bold text-white text-xs">Lemonade Node Status</span>
<span className="text-[10px] text-emerald-400">:8765 RPC</span>
</div>
<div className="flex justify-between text-[#888] text-[11px]">
<span>VRAM Usage:</span>
<span className="text-white font-bold">18.4 / 24 GB</span>
</div>
<div className="w-full h-1.5 bg-[#222121] rounded-full overflow-hidden">
<div className="h-full bg-gradient-to-r from-emerald-500 via-lemon-400 to-amber-500 w-[76%]"></div>
</div>
<div className="flex justify-between text-[10px] text-[#777]">
<span>KV Cache FlashInfer</span>
<span>7,480 / 9,800 blks</span>
</div>
</div>

<div className="p-3 rounded-xl bg-[#181717] border border-[#292828] space-y-3">
<div className="flex items-center justify-between pb-1 border-b border-[#242323]">
<span className="font-serif font-bold text-white text-xs">Active Agent Tuning</span>
<span className="text-[10px] text-lemon-400">@Marcus</span>
</div>

<div>
<div className="flex justify-between text-[11px] mb-1">
<span className="text-[#888]">Temperature:</span>
<span className="text-white font-bold">0.15</span>
</div>
<input className="w-full accent-lemon-400 bg-[#222121] h-1 rounded cursor-pointer" max="100" min="0" type="range" value="15" />
</div>

<div>
<div className="flex justify-between text-[11px] mb-1">
<span className="text-[#888]">Sparring Rigor:</span>
<span className="text-lemon-400 font-bold">0.88 (War Room)</span>
</div>
<input className="w-full accent-lemon-400 bg-[#222121] h-1 rounded cursor-pointer" max="100" min="0" type="range" value="88" />
</div>
</div>

<div className="p-3 rounded-xl bg-[#181717] border border-[#292828] space-y-2">
<div className="flex items-center justify-between pb-1 border-b border-[#242323]">
<span className="font-serif font-bold text-white text-xs">Mounted LoRA Weights</span>
<span className="text-[10px] text-[#888]">3 Loaded</span>
</div>
<div className="space-y-1.5 text-[10px]">
<div className="p-1.5 rounded bg-[#121111] border border-[#242323] flex items-center justify-between">
<div>
<p className="font-bold text-white">sdny-criminal-v3</p>
<p className="text-[#666]">Rank 64 | Alpha 128</p>
</div>
<span className="px-1 py-0.2 rounded bg-[#1a2e1d] text-emerald-400 border border-[#284f2e]">ON</span>
</div>
<div className="p-1.5 rounded bg-[#121111] border border-[#242323] flex items-center justify-between">
<div>
<p className="font-bold text-white">4th-amend-suppress</p>
<p className="text-[#666]">Rank 32 | Alpha 64</p>
</div>
<span className="px-1 py-0.2 rounded bg-[#1a2e1d] text-emerald-400 border border-[#284f2e]">ON</span>
</div>
</div>
</div>

<button className="w-full py-2.5 rounded-xl bg-gradient-to-r from-lemon-500 via-lemon-400 to-amber-500 hover:from-lemon-400 hover:to-amber-400 text-black font-serif font-bold text-xs shadow-lg transition flex items-center justify-center gap-1.5 transform active:scale-95">
<span className="material-symbols-outlined text-base">swords</span>
<span>Launch Mock Trial Sparring Arena</span>
</button>
</div>
</aside>
</div>

      </div>
    </AppShell>
  );
}
