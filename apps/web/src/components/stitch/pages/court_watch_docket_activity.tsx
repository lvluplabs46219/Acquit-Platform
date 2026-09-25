// AUTO-GENERATED from court_watch_docket_activity/code.html by scripts/convert-stitch-to-react.mjs -- do not edit.
import AppShell from "@/components/alexandria/AppShell";
import "./court_watch_docket_activity.css";

export default function CourtWatchDocketActivity() {
  return (
    <AppShell pageName="court_watch_docket_activity">
      <div className="stitch-page">


<header className="bg-surface-container-low dark:bg-surface-container-low text-primary dark:text-primary h-16 fixed top-0 right-0 left-0 md:left-[280px] z-50 border-b border-outline-variant flex justify-between items-center px-lg">
<div className="flex items-center gap-lg">
<span className="font-headline-md text-headline-md font-black text-primary md:hidden">Acquit.ai</span>
<nav className="hidden md:flex gap-lg h-full items-center">
<a className="text-primary border-b-2 border-primary pb-1 font-body-md text-body-md font-medium h-full flex items-center hover:bg-surface-bright dark:hover:bg-surface-bright px-sm" href="#">Live Feed</a>
<a className="text-on-surface-variant hover:text-primary font-body-md text-body-md h-full flex items-center hover:bg-surface-bright dark:hover:bg-surface-bright px-sm transition-colors duration-150" href="#">Followed Matters</a>
<a className="text-on-surface-variant hover:text-primary font-body-md text-body-md h-full flex items-center hover:bg-surface-bright dark:hover:bg-surface-bright px-sm transition-colors duration-150" href="#">Alert History</a>
</nav>
</div>
<div className="flex items-center gap-md">
<div className="relative hidden sm:block">
<span className="material-symbols-outlined absolute left-2 top-1/2 -translate-y-1/2 text-on-surface-variant text-[18px]">search</span>
<input className="bg-surface-container-high border border-outline-variant rounded-DEFAULT py-xs pl-8 pr-sm text-data-mono font-data-mono text-on-surface w-64 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all duration-200" placeholder="Search court feeds..." type="text" />
</div>
<div className="flex items-center gap-xs">
<button className="p-xs text-on-surface-variant hover:text-primary hover:bg-surface-bright rounded-full transition-colors duration-150">
<span className="material-symbols-outlined">notifications</span>
</button>
<button className="p-xs text-on-surface-variant hover:text-primary hover:bg-surface-bright rounded-full transition-colors duration-150">
<span className="material-symbols-outlined">history</span>
</button>
</div>
<div className="h-8 w-8 rounded-full overflow-hidden border border-outline-variant ml-sm">
<img alt="Counsel Avatar" className="w-full h-full object-cover" data-alt="A sophisticated, high-contrast black and white portrait of a senior legal counsel in a sharply tailored suit, looking authoritative against a dark, minimalist institutional background. The lighting is dramatic, emphasizing the 'War Room' aesthetic." src="https://lh3.googleusercontent.com/aida-public/AB6AXuBbe29O_LgeOUTLQnXmQwBfA0BMmVbfDMzNWz29kQFl-VjVejtGyaFjptSGQhd6RnOc59QThB1MDC2OD3qxHtb98_gqjbDoTRBeD8F-n8TXVQipyQ48nboP-vwKmu_gd0eFM9z4GhDcTs53-9zXwUpqtv5z-tqytRQZBGeutIemTSKkH8841ovnZA1Xj_ieg-vj5_YuFAWmepmd0z0ZjdCSqO6S99JDs3-0AWTAQN8WqlaqwFsfT-KCSw" />
</div>
</div>
</header>

<aside className="hidden md:flex flex-col h-full py-md bg-background dark:bg-background text-primary dark:text-primary w-[280px] h-screen fixed left-0 top-0 border-r border-outline-variant z-40">
<div className="px-lg pb-lg">
<h1 className="font-headline-lg text-headline-lg font-bold text-primary tracking-tighter uppercase mb-sm">Acquit.ai</h1>
<div className="flex items-center gap-sm">
<div className="h-10 w-10 rounded-full border border-outline-variant overflow-hidden">
<img alt="User Profile" className="w-full h-full object-cover" data-alt="A sophisticated, high-contrast black and white portrait of a senior legal counsel in a sharply tailored suit, looking authoritative against a dark, minimalist institutional background. The lighting is dramatic, emphasizing the 'War Room' aesthetic." src="https://lh3.googleusercontent.com/aida-public/AB6AXuB5cdAnh4uBmfmCOPhJoW2CH1Zu4Dmq1tQyZCuVm93R8mXOY6OdnnNV5DPyQEXkmyQ7_GHV5Qvsc2A_MKxIWwa0F0688qURXdpwytXTUDJOQJq6b-kA1na7KRYyJWW9NiI5kkbv5mMV6VleZsH0590tNR1Mq4uabPzkQ5boP_ANgGZOQbLWCWs2ROQYzO1IwK3VRe7yeNlRUOCmoRRIkpmsGLfMW97NUh8L8bkPOOLboxU3HhS2T2fZPQ" />
</div>
<div>
<p className="font-label-caps text-label-caps text-on-surface">Senior Counsel</p>
<p className="font-data-mono text-data-mono text-on-surface-variant text-[12px]">ID: 8492-AX</p>
</div>
</div>
<button className="w-full mt-lg bg-secondary-container text-on-secondary-container hover:bg-secondary hover:text-on-secondary font-label-caps text-label-caps py-sm px-md rounded-DEFAULT border border-outline-variant transition-colors duration-150 flex items-center justify-center gap-xs">
<span className="material-symbols-outlined text-[16px]">add</span> NEW FILING
            </button>
</div>
<nav className="flex-1 overflow-y-auto mt-sm px-sm space-y-1">
<a className="flex items-center gap-md px-md py-sm text-on-surface-variant font-medium hover:text-on-surface hover:bg-surface-container-high transition-colors duration-150 rounded-DEFAULT" href="#">
<span className="material-symbols-outlined">dashboard</span>
<span className="font-label-caps text-label-caps">Command Center</span>
</a>
<a className="flex items-center gap-md px-md py-sm text-on-surface-variant font-medium hover:text-on-surface hover:bg-surface-container-high transition-colors duration-150 rounded-DEFAULT" href="#">
<span className="material-symbols-outlined">gavel</span>
<span className="font-label-caps text-label-caps">The Docket</span>
</a>
<a className="flex items-center gap-md px-md py-sm text-on-surface-variant font-medium hover:text-on-surface hover:bg-surface-container-high transition-colors duration-150 rounded-DEFAULT" href="#">
<span className="material-symbols-outlined">account_balance</span>
<span className="font-label-caps text-label-caps">Chambers</span>
</a>
<a className="flex items-center gap-md px-md py-sm text-on-surface-variant font-medium hover:text-on-surface hover:bg-surface-container-high transition-colors duration-150 rounded-DEFAULT" href="#">
<span className="material-symbols-outlined">library_books</span>
<span className="font-label-caps text-label-caps">Law Library</span>
</a>
<a className="flex items-center gap-md px-md py-sm text-on-surface-variant font-medium hover:text-on-surface hover:bg-surface-container-high transition-colors duration-150 rounded-DEFAULT" href="#">
<span className="material-symbols-outlined">folder_open</span>
<span className="font-label-caps text-label-caps">Record Room</span>
</a>
<a className="flex items-center gap-md px-md py-sm text-on-surface-variant font-medium hover:text-on-surface hover:bg-surface-container-high transition-colors duration-150 rounded-DEFAULT" href="#">
<span className="material-symbols-outlined">policy</span>
<span className="font-label-caps text-label-caps">Investigations</span>
</a>
<a className="flex items-center gap-md px-md py-sm text-on-surface-variant font-medium hover:text-on-surface hover:bg-surface-container-high transition-colors duration-150 rounded-DEFAULT" href="#">
<span className="material-symbols-outlined">timeline</span>
<span className="font-label-caps text-label-caps">Case Timeline</span>
</a>
<a className="flex items-center gap-md px-md py-sm text-primary border-l-4 border-primary bg-secondary-container/30 font-bold hover:bg-surface-container-high transition-all duration-75 rounded-r-DEFAULT" href="#">
<span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1" }}>visibility</span>
<span className="font-label-caps text-label-caps">Court Watch</span>
</a>
<a className="flex items-center gap-md px-md py-sm text-on-surface-variant font-medium hover:text-on-surface hover:bg-surface-container-high transition-colors duration-150 rounded-DEFAULT" href="#">
<span className="material-symbols-outlined">groups</span>
<span className="font-label-caps text-label-caps">Counsel Directory</span>
</a>
<a className="flex items-center gap-md px-md py-sm text-on-surface-variant font-medium hover:text-on-surface hover:bg-surface-container-high transition-colors duration-150 rounded-DEFAULT" href="#">
<span className="material-symbols-outlined">assignment</span>
<span className="font-label-caps text-label-caps">Motions &amp; Tasks</span>
</a>
</nav>
<div className="mt-auto px-sm pt-md border-t border-outline-variant space-y-1">
<a className="flex items-center gap-md px-md py-sm text-on-surface-variant font-medium hover:text-on-surface hover:bg-surface-container-high transition-colors duration-150 rounded-DEFAULT" href="#">
<span className="material-symbols-outlined">settings</span>
<span className="font-label-caps text-label-caps">Settings</span>
</a>
<a className="flex items-center gap-md px-md py-sm text-on-surface-variant font-medium hover:text-on-surface hover:bg-surface-container-high transition-colors duration-150 rounded-DEFAULT" href="#">
<span className="material-symbols-outlined">help</span>
<span className="font-label-caps text-label-caps">Support</span>
</a>
</div>
</aside>

<main className="md:ml-[280px] pt-16 h-screen flex flex-col sm:flex-row overflow-hidden bg-background">

<div className="flex-1 overflow-y-auto p-lg flex flex-col gap-lg border-r border-outline-variant relative">
<div className="flex justify-between items-end pb-sm border-b border-outline-variant">
<div>
<h2 className="font-headline-lg text-headline-lg text-on-surface">Live Docket Stream</h2>
<p className="font-data-mono text-data-mono text-on-surface-variant mt-xs">Monitoring 42 active cases across 3 jurisdictions</p>
</div>
<div className="flex items-center gap-sm">
<span className="relative flex h-3 w-3">
<span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-secondary opacity-75"></span>
<span className="relative inline-flex rounded-full h-3 w-3 bg-secondary"></span>
</span>
<span className="font-label-caps text-label-caps text-secondary">SYNC ACTIVE</span>
</div>
</div>

<div className="space-y-sm">

<div className="border border-outline-variant bg-surface-container p-md rounded-DEFAULT hover:bg-surface-container-high transition-colors duration-150 flex gap-md relative overflow-hidden group">
<div className="absolute left-0 top-0 bottom-0 w-1 bg-error"></div>
<div className="flex-shrink-0 pt-xs">
<div className="h-10 w-10 rounded-full border border-error flex items-center justify-center text-error bg-error/10">
<span className="material-symbols-outlined text-[20px]">warning</span>
</div>
</div>
<div className="flex-1">
<div className="flex justify-between items-start mb-xs">
<span className="font-data-mono text-data-mono text-error">2024-CV-8821 • SDNY</span>
<span className="font-data-mono text-data-mono text-on-surface-variant">Just now</span>
</div>
<h3 className="font-headline-md text-[18px] leading-tight text-on-surface mb-xs">Emergency Motion for Injunctive Relief Filed</h3>
<p className="font-body-md text-[14px] text-on-surface-variant mb-sm">Filed by Plaintiff's counsel. Immediate review required by presiding judge. Hearing requested within 24 hours.</p>
<div className="flex gap-sm">
<button className="bg-surface-variant border border-outline-variant text-on-surface font-label-caps text-[10px] px-sm py-xs rounded flex items-center gap-xs hover:bg-surface-bright">
<span className="material-symbols-outlined text-[14px]">description</span> VIEW DOCUMENT
                             </button>
<button className="bg-surface-variant border border-outline-variant text-on-surface font-label-caps text-[10px] px-sm py-xs rounded flex items-center gap-xs hover:bg-surface-bright">
<span className="material-symbols-outlined text-[14px]">share</span> ASSIGN TO TEAM
                             </button>
</div>
</div>
</div>

<div className="border border-outline-variant bg-surface-container p-md rounded-DEFAULT hover:bg-surface-container-high transition-colors duration-150 flex gap-md">
<div className="flex-shrink-0 pt-xs">
<div className="h-10 w-10 rounded-full border border-outline flex items-center justify-center text-on-surface-variant bg-surface-variant">
<span className="material-symbols-outlined text-[20px]">gavel</span>
</div>
</div>
<div className="flex-1">
<div className="flex justify-between items-start mb-xs">
<span className="font-data-mono text-data-mono text-primary">2023-CR-1190 • EDPA</span>
<span className="font-data-mono text-data-mono text-on-surface-variant">14 mins ago</span>
</div>
<h3 className="font-headline-md text-[18px] leading-tight text-on-surface mb-xs">Order Scheduling Status Conference</h3>
<p className="font-body-md text-[14px] text-on-surface-variant mb-sm">Judge Carter has scheduled a telephonic status conference for Nov 14, 2024, at 10:00 AM EST.</p>
<button className="bg-surface-variant border border-outline-variant text-on-surface font-label-caps text-[10px] px-sm py-xs rounded flex items-center gap-xs hover:bg-surface-bright w-fit">
<span className="material-symbols-outlined text-[14px]">event</span> ADD TO CALENDAR
                         </button>
</div>
</div>

<div className="border border-outline-variant bg-surface-container p-md rounded-DEFAULT hover:bg-surface-container-high transition-colors duration-150 flex gap-md">
<div className="flex-shrink-0 pt-xs">
<div className="h-10 w-10 rounded-full border border-outline flex items-center justify-center text-on-surface-variant bg-surface-variant">
<span className="material-symbols-outlined text-[20px]">file_upload</span>
</div>
</div>
<div className="flex-1">
<div className="flex justify-between items-start mb-xs">
<span className="font-data-mono text-data-mono text-primary">2024-CV-3341 • NDCA</span>
<span className="font-data-mono text-data-mono text-on-surface-variant">42 mins ago</span>
</div>
<h3 className="font-headline-md text-[18px] leading-tight text-on-surface mb-xs">Notice of Appearance</h3>
<p className="font-body-md text-[14px] text-on-surface-variant">Attorney Sarah Jenkins appearing on behalf of Defendant TechCorp Inc.</p>
</div>
</div>

<button className="w-full py-sm border border-outline-variant border-dashed text-on-surface-variant font-label-caps text-label-caps hover:bg-surface-container hover:text-on-surface transition-colors duration-150 rounded-DEFAULT">
                    LOAD PREVIOUS ENTRIES
                </button>
</div>
</div>

<aside className="w-full sm:w-[320px] bg-surface-container-low flex-shrink-0 flex flex-col h-full overflow-y-auto">
<div className="p-md border-b border-outline-variant bg-surface-container sticky top-0 z-10">
<h3 className="font-headline-md text-[18px] text-on-surface flex items-center gap-sm">
<span className="material-symbols-outlined text-secondary">calendar_today</span>
                    Priority Appearances
                </h3>
<p className="font-data-mono text-data-mono text-on-surface-variant mt-xs text-[12px]">Next 48 Hours</p>
</div>
<div className="p-md space-y-sm">

<div className="bg-background border border-outline-variant rounded-DEFAULT p-sm relative overflow-hidden">
<div className="absolute left-0 top-0 bottom-0 w-1 bg-secondary"></div>
<div className="pl-sm">
<div className="flex justify-between items-center mb-xs">
<span className="font-label-caps text-[10px] text-secondary">TOMORROW • 09:00 AM</span>
<span className="bg-surface-variant px-xs py-[2px] rounded text-[10px] font-data-mono text-on-surface-variant border border-outline-variant">IN-PERSON</span>
</div>
<h4 className="font-headline-md text-[16px] text-on-surface mb-xs leading-tight">Motion to Dismiss Hearing</h4>
<p className="font-data-mono text-[12px] text-primary mb-xs">2023-CV-9912 • Judge Reyes</p>
<p className="font-body-md text-[12px] text-on-surface-variant">Courtroom 4B, Southern District</p>
</div>
</div>

<div className="bg-background border border-outline-variant rounded-DEFAULT p-sm relative overflow-hidden">
<div className="absolute left-0 top-0 bottom-0 w-1 bg-outline-variant"></div>
<div className="pl-sm">
<div className="flex justify-between items-center mb-xs">
<span className="font-label-caps text-[10px] text-on-surface-variant">THURSDAY • 02:30 PM</span>
<span className="bg-surface-variant px-xs py-[2px] rounded text-[10px] font-data-mono text-on-surface-variant border border-outline-variant">ZOOM</span>
</div>
<h4 className="font-headline-md text-[16px] text-on-surface mb-xs leading-tight">Settlement Conference</h4>
<p className="font-data-mono text-[12px] text-primary mb-xs">2024-CV-1105 • Mag. Smith</p>
<p className="font-body-md text-[12px] text-on-surface-variant">Link in docket entry #42</p>
</div>
</div>
</div>
</aside>
</main>

<nav className="md:hidden fixed bottom-0 left-0 right-0 bg-surface-container-low border-t border-outline-variant h-16 flex justify-around items-center z-50">
<a className="flex flex-col items-center gap-xs text-on-surface-variant" href="#">
<span className="material-symbols-outlined">dashboard</span>
<span className="font-label-caps text-[10px]">Home</span>
</a>
<a className="flex flex-col items-center gap-xs text-primary" href="#">
<span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1" }}>visibility</span>
<span className="font-label-caps text-[10px]">Watch</span>
</a>
<a className="flex flex-col items-center gap-xs text-on-surface-variant" href="#">
<span className="material-symbols-outlined">assignment</span>
<span className="font-label-caps text-[10px]">Tasks</span>
</a>
</nav>

      </div>
    </AppShell>
  );
}
