// AUTO-GENERATED from motions_tasks_motion_board/code.html by scripts/convert-stitch-to-react.mjs -- do not edit.
import AppShell from "@/components/alexandria/AppShell";
import "./motions_tasks_motion_board.css";

export default function MotionsTasksMotionBoard() {
  return (
    <AppShell pageName="motions_tasks_motion_board">
      <div className="stitch-page">


<header aria-label="Top App Bar" className="bg-surface border-b border-outline-variant h-16 fixed top-0 right-0 left-[280px] z-50 flex items-center justify-between px-md w-full">
<div className="flex items-center gap-4">
<span className="font-data-mono text-data-mono text-primary font-bold">2024-CV-8821</span>
</div>
<div className="flex items-center gap-md">

<div className="relative hidden sm:block">
<span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-on-surface-variant">search</span>
<input className="bg-surface-container-highest border border-outline-variant rounded pl-10 pr-4 py-1 text-data-mono font-data-mono text-on-surface focus:ring-1 focus:ring-primary focus:border-primary outline-none transition-shadow w-64" placeholder="Search Motions..." type="text" />
</div>

<button aria-label="Notifications" className="text-on-surface-variant hover:text-primary transition-opacity">
<span className="material-symbols-outlined" data-icon="notifications">notifications</span>
</button>
<button aria-label="Settings" className="text-on-surface-variant hover:text-primary transition-opacity">
<span className="material-symbols-outlined" data-icon="settings">settings</span>
</button>
<button aria-label="Help" className="text-on-surface-variant hover:text-primary transition-opacity">
<span className="material-symbols-outlined" data-icon="help_outline">help_outline</span>
</button>
<img alt="Lead Counsel" className="w-8 h-8 rounded-full border border-outline-variant object-cover ml-2" data-alt="A small, professional portrait of a lead counsel, sharp focus, low key lighting, corporate aesthetic, suitable for an avatar." src="https://lh3.googleusercontent.com/aida-public/AB6AXuDMDX8rjmavK4LMcZF44ZL12AzrRU-U5JHjblk6RNbmAUhg2uXx_6FzEapcXSCOaYWP6OO07cKpqIzI-b_LXuWuIvXDaYF9UwKHk_Bv-yrUvgX55miTINSQJJse1zqHm1AsPIq5I8zXYNbOtSCtnby9vyE0Ix9RPg3NW0gZcMQnT6VBBqbbzyffTHNUkYPssNJIIsA6eKhi2u0Uqa9y7mMdaIStTALB72VDkyzoPLQg52LtslH5LJENjg" />
</div>
</header>

<nav aria-label="Side Navigation" className="bg-background w-[280px] h-screen fixed left-0 top-0 border-r border-outline-variant flex flex-col py-md z-50">
<div className="px-md mb-lg">
<h1 className="font-headline-md text-headline-md font-bold text-on-surface tracking-tighter uppercase">ACQUIT.AI</h1>
<p className="font-label-caps text-label-caps text-on-surface-variant tracking-wider">Legal OS v1.0</p>
</div>
<ul className="flex flex-col flex-grow font-body-md text-body-md uppercase tracking-wider">
<li>
<a className="flex items-center gap-3 text-on-surface-variant px-4 py-3 hover:bg-surface-container transition-colors hover:text-on-surface" href="#">
<span className="material-symbols-outlined" data-icon="dashboard">dashboard</span>
<span>Command Center</span>
</a>
</li>
<li>
<a className="flex items-center gap-3 text-on-surface-variant px-4 py-3 hover:bg-surface-container transition-colors hover:text-on-surface" href="#">
<span className="material-symbols-outlined" data-icon="gavel">gavel</span>
<span>The Docket</span>
</a>
</li>
<li>
<a className="flex items-center gap-3 text-on-surface-variant px-4 py-3 hover:bg-surface-container transition-colors hover:text-on-surface" href="#">
<span className="material-symbols-outlined" data-icon="meeting_room">meeting_room</span>
<span>Chambers</span>
</a>
</li>
<li>
<a className="flex items-center gap-3 text-on-surface-variant px-4 py-3 hover:bg-surface-container transition-colors hover:text-on-surface" href="#">
<span className="material-symbols-outlined" data-icon="library_books">library_books</span>
<span>Law Library</span>
</a>
</li>
<li>
<a className="flex items-center gap-3 text-on-surface-variant px-4 py-3 hover:bg-surface-container transition-colors hover:text-on-surface" href="#">
<span className="material-symbols-outlined" data-icon="folder_open">folder_open</span>
<span>Record Room</span>
</a>
</li>
<li>
<a className="flex items-center gap-3 text-on-surface-variant px-4 py-3 hover:bg-surface-container transition-colors hover:text-on-surface" href="#">
<span className="material-symbols-outlined" data-icon="query_stats">query_stats</span>
<span>Investigations</span>
</a>
</li>
<li>
<a className="flex items-center gap-3 text-on-surface-variant px-4 py-3 hover:bg-surface-container transition-colors hover:text-on-surface" href="#">
<span className="material-symbols-outlined" data-icon="history_edu">history_edu</span>
<span>Case Timeline</span>
</a>
</li>
<li>
<a className="flex items-center gap-3 text-on-surface-variant px-4 py-3 hover:bg-surface-container transition-colors hover:text-on-surface" href="#">
<span className="material-symbols-outlined" data-icon="visibility">visibility</span>
<span>Court Watch</span>
</a>
</li>
<li>
<a className="flex items-center gap-3 text-on-surface-variant px-4 py-3 hover:bg-surface-container transition-colors hover:text-on-surface" href="#">
<span className="material-symbols-outlined" data-icon="contact_page">contact_page</span>
<span>Counsel Directory</span>
</a>
</li>
<li>

<a className="flex items-center gap-3 text-primary border-l-4 border-primary bg-primary-container/10 px-4 py-3 font-bold" href="#">
<span className="material-symbols-outlined" data-icon="assignment">assignment</span>
<span>Motions &amp; Tasks</span>
</a>
</li>
</ul>
<div className="mt-auto px-md">
<button className="w-full bg-primary text-background font-label-caps text-label-caps py-3 rounded border border-primary hover:bg-surface-tint transition-colors flex items-center justify-center gap-2 font-bold">
<span className="material-symbols-outlined text-[18px]">add</span>
                New Filing
            </button>
</div>
</nav>

<main className="ml-[280px] pt-16 min-h-screen p-lg flex flex-col">

<div className="flex justify-between items-center mb-lg border-b border-outline-variant pb-md">
<div>
<h2 className="font-display-case text-display-case text-on-surface">Motion Board</h2>
<p className="font-data-mono text-data-mono text-on-surface-variant mt-1">Status Overview / Trial Preparation</p>
</div>
<div className="flex gap-sm">
<button className="border border-outline-variant bg-surface px-4 py-2 font-label-caps text-label-caps hover:bg-surface-container-highest transition-colors flex items-center gap-2">
<span className="material-symbols-outlined text-[16px]">filter_list</span>
                    Filter
                </button>
<button className="border border-outline-variant bg-surface px-4 py-2 font-label-caps text-label-caps hover:bg-surface-container-highest transition-colors flex items-center gap-2">
<span className="material-symbols-outlined text-[16px]">view_column</span>
                    Views
                </button>
</div>
</div>

<div className="flex-grow flex gap-lg overflow-x-auto pb-4 custom-scrollbar">

<div className="flex-shrink-0 w-80 flex flex-col bg-surface-container-low border border-outline-variant rounded">
<div className="p-sm border-b border-outline-variant bg-surface-container flex justify-between items-center">
<h3 className="font-label-caps text-label-caps text-on-surface uppercase tracking-widest flex items-center gap-2">
<span className="w-2 h-2 rounded-full bg-outline"></span>
                        To Do <span className="text-on-surface-variant">(3)</span>
</h3>
<button className="text-on-surface-variant hover:text-on-surface"><span className="material-symbols-outlined text-[18px]">add</span></button>
</div>
<div className="p-sm flex flex-col gap-sm flex-grow overflow-y-auto">

<div className="bg-surface border border-outline-variant rounded p-sm cursor-grab hover:border-primary transition-colors group">
<div className="flex justify-between items-start mb-2">
<span className="font-data-mono text-[10px] bg-error-container text-on-error-container px-2 py-1 rounded">HIGH</span>
<span className="material-symbols-outlined text-on-surface-variant text-[16px] group-hover:text-on-surface">more_vert</span>
</div>
<h4 className="font-headline-md text-[18px] leading-tight mb-2">Motion to Suppress Evidence</h4>
<p className="font-data-mono text-data-mono text-on-surface-variant mb-4 text-[12px]">Draft initial arguments regarding unconstitutional search.</p>
<div className="flex justify-between items-end border-t border-outline-variant pt-2">
<div className="flex items-center gap-2 text-on-surface-variant text-[11px] font-data-mono">
<span className="material-symbols-outlined text-[14px]">calendar_today</span>
                                Oct 24
                            </div>
<div className="flex items-center gap-1 bg-surface-container-highest px-2 py-1 rounded border border-outline-variant">
<span className="material-symbols-outlined text-[14px] text-secondary">robot_2</span>
<span className="font-label-caps text-[10px]">Paralegal AI</span>
</div>
</div>
</div>

<div className="bg-surface border border-outline-variant rounded p-sm cursor-grab hover:border-primary transition-colors group">
<div className="flex justify-between items-start mb-2">
<span className="font-data-mono text-[10px] bg-surface-container-highest text-on-surface px-2 py-1 rounded border border-outline-variant">NORMAL</span>
<span className="material-symbols-outlined text-on-surface-variant text-[16px] group-hover:text-on-surface">more_vert</span>
</div>
<h4 className="font-headline-md text-[18px] leading-tight mb-2">Motion in Limine (Prior Bad Acts)</h4>
<p className="font-data-mono text-data-mono text-on-surface-variant mb-4 text-[12px]">Exclude testimony of Witness 4 regarding 2018 incident.</p>
<div className="flex justify-between items-end border-t border-outline-variant pt-2">
<div className="flex items-center gap-2 text-on-surface-variant text-[11px] font-data-mono">
<span className="material-symbols-outlined text-[14px]">calendar_today</span>
                                Oct 26
                            </div>
<div className="flex items-center gap-1 bg-surface-container-highest px-2 py-1 rounded border border-outline-variant">
<span className="w-4 h-4 rounded-full bg-tertiary-container flex items-center justify-center font-label-caps text-[8px] text-on-tertiary-container border border-outline-variant">JD</span>
<span className="font-label-caps text-[10px]">J. Doe</span>
</div>
</div>
</div>
</div>
</div>

<div className="flex-shrink-0 w-80 flex flex-col bg-surface-container-low border border-outline-variant rounded border-t-2 border-t-secondary">
<div className="p-sm border-b border-outline-variant bg-surface-container flex justify-between items-center">
<h3 className="font-label-caps text-label-caps text-on-surface uppercase tracking-widest flex items-center gap-2">
<span className="w-2 h-2 rounded-full bg-secondary"></span>
                        In Progress <span className="text-on-surface-variant">(1)</span>
</h3>
<button className="text-on-surface-variant hover:text-on-surface"><span className="material-symbols-outlined text-[18px]">add</span></button>
</div>
<div className="p-sm flex flex-col gap-sm flex-grow overflow-y-auto">

<div className="bg-surface border border-outline-variant rounded p-sm cursor-grab hover:border-primary transition-colors group shadow-[2px_2px_0px_#c6c6c9]">
<div className="flex justify-between items-start mb-2">
<span className="font-data-mono text-[10px] bg-error-container text-on-error-container px-2 py-1 rounded">URGENT</span>
<span className="material-symbols-outlined text-on-surface-variant text-[16px] group-hover:text-on-surface">more_vert</span>
</div>
<h4 className="font-headline-md text-[18px] leading-tight mb-2">Motion for Summary Judgment</h4>
<p className="font-data-mono text-data-mono text-on-surface-variant mb-4 text-[12px]">Finalizing statement of undisputed facts and citation formatting.</p>

<div className="w-full bg-surface-container-highest h-1 mb-4 rounded-full overflow-hidden">
<div className="bg-primary h-full w-3/4"></div>
</div>
<div className="flex justify-between items-end border-t border-outline-variant pt-2">
<div className="flex items-center gap-2 text-error text-[11px] font-data-mono">
<span className="material-symbols-outlined text-[14px]">warning</span>
                                Due Tomorrow
                            </div>
<div className="flex items-center gap-1 bg-surface-container-highest px-2 py-1 rounded border border-outline-variant">
<span className="material-symbols-outlined text-[14px] text-secondary">robot_2</span>
<span className="font-label-caps text-[10px]">Paralegal AI</span>
</div>
</div>
</div>
</div>
</div>

<div className="flex-shrink-0 w-80 flex flex-col bg-surface-container-low border border-outline-variant rounded border-t-2 border-t-tertiary">
<div className="p-sm border-b border-outline-variant bg-surface-container flex justify-between items-center">
<h3 className="font-label-caps text-label-caps text-on-surface uppercase tracking-widest flex items-center gap-2">
<span className="w-2 h-2 rounded-full bg-tertiary"></span>
                        Review <span className="text-on-surface-variant">(2)</span>
</h3>
<button className="text-on-surface-variant hover:text-on-surface"><span className="material-symbols-outlined text-[18px]">add</span></button>
</div>
<div className="p-sm flex flex-col gap-sm flex-grow overflow-y-auto">

<div className="bg-surface border border-outline-variant rounded p-sm cursor-grab hover:border-primary transition-colors group">
<div className="flex justify-between items-start mb-2">
<span className="font-data-mono text-[10px] bg-surface-container-highest text-on-surface px-2 py-1 rounded border border-outline-variant">NORMAL</span>
<span className="material-symbols-outlined text-on-surface-variant text-[16px] group-hover:text-on-surface">more_vert</span>
</div>
<h4 className="font-headline-md text-[18px] leading-tight mb-2">Daubert Motion (Expert Test.)</h4>
<p className="font-data-mono text-data-mono text-on-surface-variant mb-4 text-[12px]">Pending Senior Partner review of methodology argument.</p>
<div className="flex justify-between items-end border-t border-outline-variant pt-2">
<div className="flex items-center gap-2 text-on-surface-variant text-[11px] font-data-mono">
<span className="material-symbols-outlined text-[14px]">calendar_today</span>
                                Oct 15
                            </div>
<div className="flex items-center gap-1 bg-surface-container-highest px-2 py-1 rounded border border-outline-variant">
<span className="w-4 h-4 rounded-full bg-primary-container flex items-center justify-center font-label-caps text-[8px] text-primary border border-primary">SP</span>
<span className="font-label-caps text-[10px]">Partner</span>
</div>
</div>
</div>
</div>
</div>

<div className="flex-shrink-0 w-80 flex flex-col bg-surface-container-low border border-outline-variant rounded border-t-2 border-t-outline">
<div className="p-sm border-b border-outline-variant bg-surface-container flex justify-between items-center opacity-70">
<h3 className="font-label-caps text-label-caps text-on-surface uppercase tracking-widest flex items-center gap-2">
<span className="material-symbols-outlined text-[14px]">done_all</span>
                        Filed <span className="text-on-surface-variant">(1)</span>
</h3>
</div>
<div className="p-sm flex flex-col gap-sm flex-grow overflow-y-auto opacity-70">

<div className="bg-surface-container border border-outline-variant rounded p-sm cursor-default">
<h4 className="font-headline-md text-[18px] leading-tight mb-2 text-on-surface-variant line-through decoration-outline">Motion for Continuance</h4>
<div className="flex items-center gap-2 bg-surface-container-highest w-fit px-2 py-1 rounded border border-outline-variant mb-2">
<span className="material-symbols-outlined text-[14px] text-on-surface">gavel</span>
<span className="font-data-mono text-[10px] text-on-surface">GRANTED - OCT 10</span>
</div>
<div className="flex justify-between items-end border-t border-outline-variant pt-2">
<div className="flex items-center gap-2 text-on-surface-variant text-[11px] font-data-mono">
<span className="material-symbols-outlined text-[14px]">history</span>
                                Filed Oct 08
                            </div>
</div>
</div>
</div>
</div>
</div>
</main>
<style>
        /* Custom Scrollbar for Kanban Board */
        .custom-scrollbar::-webkit-scrollbar &#123;
            height: 8px;
            width: 8px;
        &#125;
        .custom-scrollbar::-webkit-scrollbar-track &#123;
            background: #141313;
            border-radius: 4px;
        &#125;
        .custom-scrollbar::-webkit-scrollbar-thumb &#123;
            background: #44474a;
            border-radius: 4px;
        &#125;
        .custom-scrollbar::-webkit-scrollbar-thumb:hover &#123;
            background: #5d5e61;
        &#125;
    </style>

      </div>
    </AppShell>
  );
}
