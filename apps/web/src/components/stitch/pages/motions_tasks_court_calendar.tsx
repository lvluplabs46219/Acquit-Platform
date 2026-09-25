// AUTO-GENERATED from motions_tasks_court_calendar/code.html by scripts/convert-stitch-to-react.mjs -- do not edit.
import AppShell from "@/components/alexandria/AppShell";
import "./motions_tasks_court_calendar.css";

export default function MotionsTasksCourtCalendar() {
  return (
    <AppShell pageName="motions_tasks_court_calendar">
      <div className="stitch-page">


<nav className="bg-background dark:bg-background w-[280px] h-screen fixed left-0 top-0 border-r border-outline-variant dark:border-outline-variant flex flex-col h-full py-md z-50">
<div className="px-md mb-lg">
<h1 className="font-headline-md text-headline-md font-bold text-on-surface dark:text-on-surface tracking-tighter">ACQUIT.AI</h1>
<p className="font-data-mono text-data-mono text-on-surface-variant text-xs mt-1">Legal OS v1.0</p>
</div>
<div className="flex-1 overflow-y-auto mt-4 space-y-1">
<a className="flex items-center gap-3 text-on-surface-variant dark:text-on-surface-variant px-4 py-3 hover:text-on-surface hover:bg-surface-container dark:hover:bg-surface-container transition-colors font-body-md text-body-md uppercase tracking-wider" href="#">
<span className="material-symbols-outlined" data-icon="dashboard">dashboard</span>
<span>Command Center</span>
</a>
<a className="flex items-center gap-3 text-on-surface-variant dark:text-on-surface-variant px-4 py-3 hover:text-on-surface hover:bg-surface-container dark:hover:bg-surface-container transition-colors font-body-md text-body-md uppercase tracking-wider" href="#">
<span className="material-symbols-outlined" data-icon="gavel">gavel</span>
<span>The Docket</span>
</a>
<a className="flex items-center gap-3 text-on-surface-variant dark:text-on-surface-variant px-4 py-3 hover:text-on-surface hover:bg-surface-container dark:hover:bg-surface-container transition-colors font-body-md text-body-md uppercase tracking-wider" href="#">
<span className="material-symbols-outlined" data-icon="meeting_room">meeting_room</span>
<span>Chambers</span>
</a>
<a className="flex items-center gap-3 text-on-surface-variant dark:text-on-surface-variant px-4 py-3 hover:text-on-surface hover:bg-surface-container dark:hover:bg-surface-container transition-colors font-body-md text-body-md uppercase tracking-wider" href="#">
<span className="material-symbols-outlined" data-icon="library_books">library_books</span>
<span>Law Library</span>
</a>
<a className="flex items-center gap-3 text-on-surface-variant dark:text-on-surface-variant px-4 py-3 hover:text-on-surface hover:bg-surface-container dark:hover:bg-surface-container transition-colors font-body-md text-body-md uppercase tracking-wider" href="#">
<span className="material-symbols-outlined" data-icon="folder_open">folder_open</span>
<span>Record Room</span>
</a>
<a className="flex items-center gap-3 text-on-surface-variant dark:text-on-surface-variant px-4 py-3 hover:text-on-surface hover:bg-surface-container dark:hover:bg-surface-container transition-colors font-body-md text-body-md uppercase tracking-wider" href="#">
<span className="material-symbols-outlined" data-icon="query_stats">query_stats</span>
<span>Investigations</span>
</a>
<a className="flex items-center gap-3 text-on-surface-variant dark:text-on-surface-variant px-4 py-3 hover:text-on-surface hover:bg-surface-container dark:hover:bg-surface-container transition-colors font-body-md text-body-md uppercase tracking-wider" href="#">
<span className="material-symbols-outlined" data-icon="history_edu">history_edu</span>
<span>Case Timeline</span>
</a>
<a className="flex items-center gap-3 text-on-surface-variant dark:text-on-surface-variant px-4 py-3 hover:text-on-surface hover:bg-surface-container dark:hover:bg-surface-container transition-colors font-body-md text-body-md uppercase tracking-wider" href="#">
<span className="material-symbols-outlined" data-icon="visibility">visibility</span>
<span>Court Watch</span>
</a>
<a className="flex items-center gap-3 text-on-surface-variant dark:text-on-surface-variant px-4 py-3 hover:text-on-surface hover:bg-surface-container dark:hover:bg-surface-container transition-colors font-body-md text-body-md uppercase tracking-wider" href="#">
<span className="material-symbols-outlined" data-icon="contact_page">contact_page</span>
<span>Counsel Directory</span>
</a>

<a className="flex items-center gap-3 text-primary dark:text-primary border-l-4 border-primary bg-primary-container/10 px-4 py-3 font-bold hover:bg-surface-container dark:hover:bg-surface-container transition-colors font-body-md text-body-md uppercase tracking-wider" href="#">
<span className="material-symbols-outlined icon-filled" data-icon="assignment">assignment</span>
<span>Motions &amp; Tasks</span>
</a>
</div>
<div className="px-md mt-auto pt-4 border-t border-outline-variant">
<button className="w-full bg-primary text-background font-label-caps text-label-caps py-3 px-4 border border-primary hover:bg-primary-fixed-dim transition-colors flex items-center justify-center gap-2">
<span className="material-symbols-outlined text-sm" data-icon="add">add</span>
                New Filing
            </button>
</div>
</nav>

<div className="flex-1 ml-[280px] flex flex-col h-screen relative">

<header className="bg-surface dark:bg-surface h-16 border-b border-outline-variant dark:border-outline-variant flex items-center justify-between px-md w-full sticky top-0 z-40">
<div className="flex items-center gap-4">
<span className="font-headline-md text-headline-md text-on-surface dark:text-on-surface font-bold">2024-CV-8821</span>
<span className="px-2 py-1 bg-surface-container-high border border-outline-variant text-primary font-data-mono text-xs uppercase">Active Case</span>
</div>
<div className="flex items-center gap-6">

<div className="relative hidden md:block">
<span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-on-surface-variant text-sm" data-icon="search">search</span>
<input className="bg-surface-container-highest border border-outline-variant text-on-surface font-data-mono text-sm py-1.5 pl-9 pr-4 w-64 focus:ring-1 focus:ring-primary focus:border-primary outline-none transition-all placeholder:text-on-surface-variant/50" placeholder="Search case files..." type="text" />
</div>
<div className="flex items-center gap-4">
<button className="text-on-surface-variant hover:text-primary dark:hover:text-primary transition-opacity relative group">
<span className="material-symbols-outlined" data-icon="notifications">notifications</span>
<span className="absolute top-0 right-0 w-2 h-2 bg-error rounded-full border border-surface"></span>
</button>
<button className="text-on-surface-variant hover:text-primary dark:hover:text-primary transition-opacity">
<span className="material-symbols-outlined" data-icon="settings">settings</span>
</button>
<button className="text-on-surface-variant hover:text-primary dark:hover:text-primary transition-opacity">
<span className="material-symbols-outlined" data-icon="help_outline">help_outline</span>
</button>
<div className="w-8 h-8 rounded-full border border-outline-variant overflow-hidden bg-surface-container flex items-center justify-center ml-2">
<span className="material-symbols-outlined text-on-surface-variant text-sm" data-icon="person">person</span>
</div>
</div>
</div>
</header>

<main className="flex-1 overflow-hidden flex">

<div className="flex-1 overflow-y-auto p-md lg:p-lg bg-surface-dim">

<div className="flex justify-between items-end mb-lg">
<div>
<h2 className="font-display-case text-display-case text-on-surface mb-1">OCTOBER 2024</h2>
<div className="flex items-center gap-4 font-data-mono text-data-mono text-on-surface-variant">
<span>Jurisdiction: SDNY</span>
<span className="text-outline-variant">|</span>
<span>Judge: Hon. A. Carter</span>
</div>
</div>
<div className="flex gap-2">
<button className="px-3 py-1.5 bg-surface-container border border-outline-variant text-on-surface font-data-mono text-sm hover:border-primary transition-colors flex items-center gap-2">
<span className="material-symbols-outlined text-sm" data-icon="chevron_left">chevron_left</span>
</button>
<button className="px-4 py-1.5 bg-surface-container border border-outline-variant text-on-surface font-label-caps text-label-caps hover:border-primary transition-colors uppercase">
                            Today
                        </button>
<button className="px-3 py-1.5 bg-surface-container border border-outline-variant text-on-surface font-data-mono text-sm hover:border-primary transition-colors flex items-center gap-2">
<span className="material-symbols-outlined text-sm" data-icon="chevron_right">chevron_right</span>
</button>
</div>
</div>

<div className="border-brutalist bg-surface-container-lowest">

<div className="grid grid-cols-7 border-b border-outline-variant bg-surface-container-high">
<div className="p-2 text-center font-label-caps text-label-caps text-on-surface-variant border-r border-outline-variant last:border-r-0">SUN</div>
<div className="p-2 text-center font-label-caps text-label-caps text-on-surface-variant border-r border-outline-variant last:border-r-0">MON</div>
<div className="p-2 text-center font-label-caps text-label-caps text-on-surface-variant border-r border-outline-variant last:border-r-0">TUE</div>
<div className="p-2 text-center font-label-caps text-label-caps text-on-surface-variant border-r border-outline-variant last:border-r-0">WED</div>
<div className="p-2 text-center font-label-caps text-label-caps text-on-surface-variant border-r border-outline-variant last:border-r-0">THU</div>
<div className="p-2 text-center font-label-caps text-label-caps text-on-surface-variant border-r border-outline-variant last:border-r-0">FRI</div>
<div className="p-2 text-center font-label-caps text-label-caps text-on-surface-variant">SAT</div>
</div>

<div className="grid grid-cols-7 auto-rows-[minmax(120px,auto)] bg-background">

<div className="border-b border-r border-outline-variant/50 p-2 opacity-50 bg-surface-container-lowest"></div>

<div className="border-b border-r border-outline-variant/50 p-2 hover:bg-surface-container-low transition-colors relative group">
<div className="font-data-mono text-sm text-on-surface-variant mb-2">01</div>
</div>

<div className="border-b border-r border-outline-variant/50 p-2 hover:bg-surface-container-low transition-colors relative">
<div className="font-data-mono text-sm text-on-surface-variant mb-2">02</div>

<div className="bg-surface-container border border-outline-variant p-1.5 mb-1 cursor-pointer hover:border-primary">
<div className="flex items-center gap-1 mb-1">
<div className="w-1.5 h-1.5 rounded-full bg-secondary"></div>
<span className="font-data-mono text-[10px] text-secondary uppercase">Deadline</span>
</div>
<div className="font-body-md text-xs text-on-surface truncate">Submit Initial Disclosures</div>
</div>
</div>

<div className="border-b border-r border-outline-variant/50 p-2 hover:bg-surface-container-low transition-colors relative">
<div className="font-data-mono text-sm text-on-surface-variant mb-2">03</div>
</div>

<div className="border-b border-r border-outline-variant/50 p-2 hover:bg-surface-container-low transition-colors relative bg-surface-container/30">
<div className="font-data-mono text-sm text-on-surface font-bold mb-2">04</div>

<div className="bg-surface-container-high border-l-2 border-l-primary border-y border-r border-outline-variant p-1.5 mb-1 cursor-pointer">
<div className="flex justify-between items-center mb-1">
<span className="font-data-mono text-[10px] text-primary uppercase">Hearing @ 09:00 AM</span>
<span className="material-symbols-outlined text-[12px] text-primary" data-icon="gavel">gavel</span>
</div>
<div className="font-body-md text-xs text-on-surface truncate font-semibold">Motion to Dismiss</div>
</div>
</div>

<div className="border-b border-r border-outline-variant/50 p-2 hover:bg-surface-container-low transition-colors relative">
<div className="font-data-mono text-sm text-on-surface-variant mb-2">05</div>
</div>

<div className="border-b border-outline-variant/50 p-2 hover:bg-surface-container-low transition-colors relative bg-surface-container-lowest">
<div className="font-data-mono text-sm text-outline mb-2">06</div>
</div>


<div className="border-b border-r border-outline-variant/50 p-2 hover:bg-surface-container-low transition-colors relative bg-surface-container-lowest">
<div className="font-data-mono text-sm text-outline mb-2">07</div>
</div>
<div className="border-b border-r border-outline-variant/50 p-2 hover:bg-surface-container-low transition-colors relative">
<div className="font-data-mono text-sm text-on-surface-variant mb-2">08</div>
</div>
<div className="border-b border-r border-outline-variant/50 p-2 hover:bg-surface-container-low transition-colors relative shadow-[inset_0_0_0_1px_#c6c6c9] bg-surface-container/20">

<div className="flex justify-between items-center mb-2">
<div className="w-6 h-6 rounded bg-primary text-background flex items-center justify-center font-data-mono text-sm font-bold">09</div>
<span className="font-label-caps text-[10px] text-primary">TODAY</span>
</div>
<div className="bg-surface-container border border-outline-variant p-1.5 mb-1 cursor-pointer hover:border-error">
<div className="flex items-center gap-1 mb-1">
<div className="w-1.5 h-1.5 rounded-full bg-error"></div>
<span className="font-data-mono text-[10px] text-error uppercase">Deadline EOD</span>
</div>
<div className="font-body-md text-xs text-on-surface truncate">File Response to MSJ</div>
</div>
</div>
<div className="border-b border-r border-outline-variant/50 p-2 hover:bg-surface-container-low transition-colors relative">
<div className="font-data-mono text-sm text-on-surface-variant mb-2">10</div>
</div>
<div className="border-b border-r border-outline-variant/50 p-2 hover:bg-surface-container-low transition-colors relative">
<div className="font-data-mono text-sm text-on-surface-variant mb-2">11</div>
<div className="bg-surface-container border border-outline-variant p-1.5 mb-1 cursor-pointer hover:border-primary">
<div className="flex items-center gap-1 mb-1">
<span className="material-symbols-outlined text-[12px] text-on-surface-variant" data-icon="groups">groups</span>
<span className="font-data-mono text-[10px] text-on-surface-variant uppercase">Deposition @ 14:00</span>
</div>
<div className="font-body-md text-xs text-on-surface truncate">Dr. H. Vance (Expert)</div>
</div>
</div>
<div className="border-b border-r border-outline-variant/50 p-2 hover:bg-surface-container-low transition-colors relative">
<div className="font-data-mono text-sm text-on-surface-variant mb-2">12</div>
</div>
<div className="border-b border-outline-variant/50 p-2 hover:bg-surface-container-low transition-colors relative bg-surface-container-lowest">
<div className="font-data-mono text-sm text-outline mb-2">13</div>
</div>
</div>
</div>
</div>

<aside className="w-80 border-l border-outline-variant bg-surface-container-lowest flex flex-col hidden lg:flex h-full">
<div className="p-4 border-b border-outline-variant bg-surface">
<h3 className="font-label-caps text-label-caps text-on-surface uppercase flex items-center gap-2">
<span className="material-symbols-outlined text-sm text-primary" data-icon="bolt">bolt</span>
                        Priority Docket (Next 7 Days)
                    </h3>
</div>
<div className="flex-1 overflow-y-auto p-4 space-y-4">

<div className="border-brutalist bg-surface hover:shadow-brutalist transition-shadow group cursor-pointer">
<div className="bg-error-container/20 border-b border-outline-variant px-3 py-2 flex justify-between items-center">
<span className="font-data-mono text-[10px] text-error font-bold uppercase tracking-wider">CRITICAL DEADLINE</span>
<span className="font-data-mono text-xs text-on-surface-variant">TODAY 17:00</span>
</div>
<div className="p-3">
<h4 className="font-headline-md text-lg text-on-surface leading-tight mb-2">File Response to Defendant's MSJ</h4>
<div className="flex items-center gap-2 text-on-surface-variant font-data-mono text-xs mb-3">
<span className="material-symbols-outlined text-[14px]" data-icon="folder_special">folder_special</span>
<span>Doc #142</span>
</div>
<div className="flex gap-2">
<button className="flex-1 border border-outline-variant py-1 text-xs font-data-mono hover:bg-surface-container hover:text-primary">REVIEW DRAFT</button>
</div>
</div>
</div>

<div className="border-brutalist bg-surface hover:shadow-brutalist transition-shadow group cursor-pointer">
<div className="bg-surface-container-high border-b border-outline-variant px-3 py-2 flex justify-between items-center">
<span className="font-data-mono text-[10px] text-primary font-bold uppercase tracking-wider">EVENT</span>
<span className="font-data-mono text-xs text-on-surface-variant">OCT 11 • 14:00</span>
</div>
<div className="p-3">
<h4 className="font-headline-md text-lg text-on-surface leading-tight mb-2">Deposition: Dr. H. Vance</h4>
<p className="font-body-md text-sm text-on-surface-variant mb-3 line-clamp-2">Expert witness regarding technical specifications in plaintiff's original patent filing.</p>
<div className="flex gap-2">
<button className="px-2 py-1 bg-surface-container border border-outline-variant flex items-center justify-center hover:text-primary">
<span className="material-symbols-outlined text-sm" data-icon="description">description</span>
</button>
<button className="flex-1 border border-outline-variant py-1 text-xs font-data-mono hover:bg-surface-container hover:text-primary">PREP OUTLINE</button>
</div>
</div>
</div>
</div>
</aside>
</main>
</div>

      </div>
    </AppShell>
  );
}
