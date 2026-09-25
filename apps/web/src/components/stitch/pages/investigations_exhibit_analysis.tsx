// AUTO-GENERATED from investigations_exhibit_analysis/code.html by scripts/convert-stitch-to-react.mjs -- do not edit.
import AppShell from "@/components/alexandria/AppShell";
import "./investigations_exhibit_analysis.css";

export default function InvestigationsExhibitAnalysis() {
  return (
    <AppShell pageName="investigations_exhibit_analysis">
      <div className="stitch-page">


<nav className="bg-surface-container dark:bg-surface-container docked left-0 h-screen w-[280px] border-r border-outline-variant flat no shadows transition: all 200ms ease-in-out fixed left-0 top-0 bottom-0 flex flex-col z-40 hidden md:flex">
<div className="p-gutter flex items-center gap-4 border-b border-outline-variant pb-6 mb-6">
<div className="w-10 h-10 rounded-full bg-primary flex items-center justify-center text-on-primary font-label-caps">
                FS
            </div>
<div>
<h1 className="text-label-caps font-label-caps tracking-widest text-on-surface">Legal OS</h1>
<p className="text-data-mono font-data-mono text-on-surface-variant text-xs mt-1">Matter 2024-772B</p>
</div>
</div>
<button className="mx-gutter mb-6 bg-secondary text-on-secondary font-label-caps text-label-caps py-2 px-4 rounded hover:bg-secondary-fixed transition-colors flex items-center justify-center gap-2">
<span className="material-symbols-outlined">add</span>
            New Filing
        </button>
<ul className="flex-1 px-4 space-y-1">
<li>
<a className="flex items-center gap-3 px-3 py-2 rounded text-on-surface-variant font-medium hover:bg-surface-container-high hover:text-on-surface text-label-caps font-label-caps transition-all" href="#">
<span className="material-symbols-outlined text-xl">dashboard</span>
                        Command Center
                    </a>
</li>
<li>
<a className="flex items-center gap-3 px-3 py-2 rounded text-on-surface-variant font-medium hover:bg-surface-container-high hover:text-on-surface text-label-caps font-label-caps transition-all" href="#">
<span className="material-symbols-outlined text-xl">gavel</span>
                        The Docket
                    </a>
</li>
<li>
<a className="flex items-center gap-3 px-3 py-2 rounded text-on-surface-variant font-medium hover:bg-surface-container-high hover:text-on-surface text-label-caps font-label-caps transition-all" href="#">
<span className="material-symbols-outlined text-xl">groups</span>
                        Chambers
                    </a>
</li>
<li>
<a className="flex items-center gap-3 px-3 py-2 rounded text-on-surface border-l-4 border-secondary bg-surface-variant font-bold text-label-caps font-label-caps transition-all" href="#">
<span className="material-symbols-outlined text-xl fill text-secondary">menu_book</span>
                        Law Library
                    </a>
</li>
<li>
<a className="flex items-center gap-3 px-3 py-2 rounded text-on-surface-variant font-medium hover:bg-surface-container-high hover:text-on-surface text-label-caps font-label-caps transition-all" href="#">
<span className="material-symbols-outlined text-xl">folder_shared</span>
                        Record Room
                    </a>
</li>
</ul>
<div className="mt-auto border-t border-outline-variant p-4">
<ul className="space-y-1">
<li>
<a className="flex items-center gap-3 px-3 py-2 rounded text-on-surface-variant font-medium hover:bg-surface-container-high hover:text-on-surface text-label-caps font-label-caps transition-all" href="#">
<span className="material-symbols-outlined text-lg">help</span>
                            Support
                        </a>
</li>
<li>
<a className="flex items-center gap-3 px-3 py-2 rounded text-on-surface-variant font-medium hover:bg-surface-container-high hover:text-on-surface text-label-caps font-label-caps transition-all" href="#">
<span className="material-symbols-outlined text-lg">archive</span>
                            Archive
                        </a>
</li>
</ul>
</div>
</nav>

<div className="flex-1 flex flex-col md:ml-[280px]">

<header className="bg-surface-container-low dark:bg-surface-container-low docked full-width top-0 border-b border-outline-variant flat no shadows flex justify-between items-center w-full px-gutter h-16 z-30 sticky top-0">
<div className="flex items-center gap-8">
<span className="text-headline-md font-headline-md font-bold text-on-surface dark:text-on-surface">Acquit.ai</span>

<div className="hidden lg:flex items-center bg-surface-container px-3 py-1.5 border border-outline-variant rounded focus-within:border-primary transition-colors w-64">
<span className="material-symbols-outlined text-on-surface-variant text-sm mr-2">search</span>
<input className="bg-transparent border-none focus:ring-0 text-data-mono font-data-mono text-sm w-full text-on-surface placeholder-on-surface-variant" placeholder="Search Matter..." type="text" />
</div>
</div>
<nav className="hidden md:flex gap-6">
<a className="text-on-surface-variant hover:bg-surface-variant hover:text-on-surface Transition: active:scale-95 duration-75 text-body-md font-body-md py-1" href="#">File</a>
<a className="text-on-surface-variant hover:bg-surface-variant hover:text-on-surface Transition: active:scale-95 duration-75 text-body-md font-body-md py-1" href="#">Edit</a>
<a className="text-primary border-b-2 border-primary pb-1 Transition: active:scale-95 duration-75 text-body-md font-body-md py-1" href="#">View</a>
<a className="text-on-surface-variant hover:bg-surface-variant hover:text-on-surface Transition: active:scale-95 duration-75 text-body-md font-body-md py-1" href="#">Matter</a>
<a className="text-on-surface-variant hover:bg-surface-variant hover:text-on-surface Transition: active:scale-95 duration-75 text-body-md font-body-md py-1" href="#">Account</a>
</nav>
<div className="flex items-center gap-4">
<button className="text-primary dark:text-primary hover:bg-surface-variant hover:text-on-surface rounded-full p-2 transition-colors flex items-center justify-center">
<span className="material-symbols-outlined">notifications</span>
</button>
<button className="text-primary dark:text-primary hover:bg-surface-variant hover:text-on-surface rounded-full p-2 transition-colors flex items-center justify-center">
<span className="material-symbols-outlined">settings</span>
</button>
<button className="text-primary dark:text-primary hover:bg-surface-variant hover:text-on-surface rounded-full p-2 transition-colors flex items-center justify-center">
<span className="material-symbols-outlined">account_circle</span>
</button>
</div>
</header>

<main className="flex-1 p-gutter overflow-y-auto bg-background">
<div className="mb-6 flex justify-between items-end">
<div>
<h2 className="text-headline-lg font-headline-lg text-on-surface mb-2">Exhibit Analysis</h2>
<p className="text-data-mono font-data-mono text-on-surface-variant">Module: Investigations | Engine: DeepRead v4.2</p>
</div>
<div className="flex gap-4">
<button className="px-4 py-2 border border-outline text-on-surface font-data-mono text-data-mono hover:bg-surface-variant transition-colors flex items-center gap-2">
<span className="material-symbols-outlined text-sm">download</span> Export Report
                    </button>
<button className="px-4 py-2 bg-primary text-on-primary font-label-caps text-label-caps hover:bg-primary-fixed transition-colors flex items-center gap-2">
<span className="material-symbols-outlined text-sm">play_arrow</span> Run Batch
                    </button>
</div>
</div>
<div className="grid grid-cols-12 gap-4">

<div className="col-span-12 lg:col-span-4 flex flex-col gap-4">

<div className="border border-outline-variant bg-surface-container-low p-6 flex flex-col items-center justify-center text-center border-dashed relative">
<div className="absolute inset-0 bg-surface-variant opacity-0 hover:opacity-10 transition-opacity cursor-pointer"></div>
<span className="material-symbols-outlined text-4xl text-on-surface-variant mb-4">upload_file</span>
<h3 className="text-body-lg font-body-lg text-on-surface mb-2">Drop Evidence Files Here</h3>
<p className="text-data-mono font-data-mono text-on-surface-variant text-sm mb-4">PDF, DOCX, MSG, EML (Max 500MB)</p>
<button className="px-4 py-2 bg-surface text-on-surface border border-outline font-label-caps text-label-caps hover:bg-surface-variant transition-colors z-10">
                            Browse Files
                        </button>
</div>

<div className="border border-outline-variant bg-surface-container flex flex-col flex-1">
<div className="bg-surface-container-high border-b border-outline-variant p-3 flex justify-between items-center">
<h3 className="text-label-caps font-label-caps text-on-surface">Analysis Queue</h3>
<span className="bg-secondary-container text-on-secondary-container px-2 py-0.5 rounded text-data-mono font-data-mono text-xs">3 Active</span>
</div>
<div className="flex-1 overflow-y-auto">

<div className="p-3 border-b border-outline-variant bg-surface-variant/30 flex flex-col gap-2 relative overflow-hidden">
<div className="absolute bottom-0 left-0 h-1 bg-secondary w-3/4"></div> 
<div className="flex justify-between items-start">
<span className="text-data-mono font-data-mono text-on-surface text-sm truncate">DEP_Smith_Vol2.pdf</span>
<span className="material-symbols-outlined text-sm text-secondary animate-spin">sync</span>
</div>
<div className="flex justify-between text-xs font-data-mono text-on-surface-variant">
<span>OCR Processing...</span>
<span>75%</span>
</div>
</div>

<div className="p-3 border-b border-outline-variant flex flex-col gap-2">
<div className="flex justify-between items-start">
<span className="text-data-mono font-data-mono text-on-surface text-sm truncate">Email_Thread_ProjectX.msg</span>
<span className="material-symbols-outlined text-sm text-on-surface-variant">hourglass_empty</span>
</div>
<div className="flex justify-between text-xs font-data-mono text-on-surface-variant">
<span>Pending Entity Extraction</span>
<span>Queued</span>
</div>
</div>

<div className="p-3 border-b border-outline-variant flex flex-col gap-2">
<div className="flex justify-between items-start">
<span className="text-data-mono font-data-mono text-on-surface text-sm truncate">Financial_Ledger_2023.xlsx</span>
<span className="material-symbols-outlined text-sm text-on-surface-variant">hourglass_empty</span>
</div>
<div className="flex justify-between text-xs font-data-mono text-on-surface-variant">
<span>Pending Structure Mapping</span>
<span>Queued</span>
</div>
</div>
</div>
</div>
</div>

<div className="col-span-12 lg:col-span-8 flex flex-col gap-4">

<div className="grid grid-cols-3 gap-4">
<div className="border border-outline-variant bg-surface-container-low p-4 flex flex-col justify-between">
<span className="text-label-caps font-label-caps text-on-surface-variant mb-2">Entities Extracted</span>
<span className="text-headline-lg font-headline-lg text-on-surface">1,248</span>
</div>
<div className="border border-outline-variant bg-surface-container-low p-4 flex flex-col justify-between">
<span className="text-label-caps font-label-caps text-on-surface-variant mb-2">Contradictions Found</span>
<span className="text-headline-lg font-headline-lg text-error">7</span>
</div>
<div className="border border-outline-variant bg-surface-container-low p-4 flex flex-col justify-between">
<span className="text-label-caps font-label-caps text-on-surface-variant mb-2">Sentiment Shift</span>
<div className="flex items-center gap-2">
<span className="material-symbols-outlined text-error">trending_down</span>
<span className="text-headline-lg font-headline-lg text-on-surface">Negative</span>
</div>
</div>
</div>

<div className="border border-outline-variant bg-surface-container flex flex-col flex-1">
<div className="bg-surface-container-high border-b border-outline-variant p-3 flex justify-between items-center">
<h3 className="text-label-caps font-label-caps text-on-surface">Key Findings &amp; Contradictions</h3>
<div className="flex gap-2">
<button className="text-on-surface-variant hover:text-on-surface"><span className="material-symbols-outlined text-sm">filter_list</span></button>
<button className="text-on-surface-variant hover:text-on-surface"><span className="material-symbols-outlined text-sm">more_vert</span></button>
</div>
</div>
<div className="p-4 overflow-y-auto space-y-4">

<div className="border border-error/50 bg-error-container/10 p-4 relative">
<div className="absolute top-0 left-0 w-1 h-full bg-error"></div>
<div className="flex items-center gap-2 mb-3">
<span className="material-symbols-outlined text-error text-sm">warning</span>
<h4 className="text-body-md font-body-md text-on-surface font-semibold">Timeline Discrepancy: Meeting Date</h4>
</div>
<div className="grid grid-cols-2 gap-4">
<div className="border border-outline-variant bg-surface p-3">
<div className="flex justify-between items-center mb-2 border-b border-outline-variant pb-1">
<span className="text-data-mono font-data-mono text-xs text-on-surface-variant">Source 1: Email</span>
<span className="text-data-mono font-data-mono text-xs text-on-surface">Doc ID: EX-442</span>
</div>
<p className="text-body-md font-body-md text-on-surface-variant text-sm">"I confirm we met on <span className="bg-error/20 text-on-surface font-bold px-1">October 12th</span> to discuss the merger."</p>
</div>
<div className="border border-outline-variant bg-surface p-3">
<div className="flex justify-between items-center mb-2 border-b border-outline-variant pb-1">
<span className="text-data-mono font-data-mono text-xs text-on-surface-variant">Source 2: Deposition</span>
<span className="text-data-mono font-data-mono text-xs text-on-surface">Doc ID: DEP-12</span>
</div>
<p className="text-body-md font-body-md text-on-surface-variant text-sm">"The initial meeting regarding the acquisition took place on <span className="bg-error/20 text-on-surface font-bold px-1">October 15th</span>."</p>
</div>
</div>
</div>

<div className="border border-outline-variant bg-surface-container-low p-4 relative">
<div className="absolute top-0 left-0 w-1 h-full bg-secondary"></div>
<div className="flex items-center gap-2 mb-3">
<span className="material-symbols-outlined text-secondary text-sm">person_search</span>
<h4 className="text-body-md font-body-md text-on-surface font-semibold">High-Frequency Entity Identified</h4>
</div>
<div className="flex flex-col gap-2">
<div className="flex items-center justify-between">
<span className="text-data-mono font-data-mono text-on-surface">Robert J. Vance (CFO)</span>
<span className="text-data-mono font-data-mono text-on-surface-variant text-sm">Mentions: 142 across 8 docs</span>
</div>
<p className="text-body-md font-body-md text-on-surface-variant text-sm border-l-2 border-outline-variant pl-3 italic">
                                        Strong negative sentiment correlation in emails originating from the CEO regarding this entity post-Q3 earnings.
                                     </p>
</div>
</div>
</div>
</div>
</div>
</div>
</main>
</div>

<aside className="hidden xl:flex flex-col w-[320px] bg-surface-container border-l border-outline-variant fixed right-0 top-16 bottom-0 z-30">

<div className="bg-surface-container-highest dark:bg-surface-container-highest docked top-16 right-0 w-80 border-l border-b border-outline-variant shadow-md flex items-center px-4 h-10 w-full justify-between sticky top-0">
<span className="text-label-caps font-label-caps text-on-tertiary-container">The Clerk</span>
<div className="flex items-center gap-3">
<button className="text-primary hover:bg-surface-variant opacity-90 transition-all text-label-caps font-label-caps">Clear All</button>
<button className="text-on-surface-variant hover:bg-surface-variant opacity-90 transition-all flex items-center justify-center">
<span className="material-symbols-outlined text-sm">push_pin</span>
</button>
</div>
</div>
<div className="p-4 flex-1 overflow-y-auto">
<h4 className="text-label-caps font-label-caps text-on-surface mb-4">Entity Inspector</h4>
<div className="space-y-4">
<div className="border border-outline-variant bg-surface p-3">
<span className="text-data-mono font-data-mono text-xs text-on-surface-variant block mb-1">Selected Entity</span>
<span className="text-body-md font-body-md text-on-surface font-semibold block mb-2">Project Phoenix</span>
<div className="flex gap-2 mb-3">
<span className="bg-surface-container-high px-2 py-1 rounded text-data-mono font-data-mono text-xs text-on-surface-variant">Code Name</span>
<span className="bg-surface-container-high px-2 py-1 rounded text-data-mono font-data-mono text-xs text-on-surface-variant">Merger</span>
</div>
<div className="border-t border-outline-variant pt-2 mt-2">
<span className="text-data-mono font-data-mono text-xs text-on-surface-variant block mb-1">Associated Documents</span>
<ul className="space-y-1">
<li className="flex items-center gap-2 text-data-mono font-data-mono text-xs text-primary hover:underline cursor-pointer">
<span className="material-symbols-outlined text-[14px]">description</span> Memo_Internal_Q1.pdf
                            </li>
<li className="flex items-center gap-2 text-data-mono font-data-mono text-xs text-primary hover:underline cursor-pointer">
<span className="material-symbols-outlined text-[14px]">description</span> Board_Minutes_Feb.docx
                            </li>
</ul>
</div>
</div>
</div>
</div>
</aside>

      </div>
    </AppShell>
  );
}
