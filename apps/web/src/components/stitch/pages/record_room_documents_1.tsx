// AUTO-GENERATED from record_room_documents_1/code.html by scripts/convert-stitch-to-react.mjs -- do not edit.
import AppShell from "@/components/alexandria/AppShell";
import "./record_room_documents_1.css";

export default function RecordRoomDocuments1() {
  return (
    <AppShell pageName="record_room_documents_1">
      <div className="stitch-page">


<header className="bg-surface-container-low dark:bg-surface-container-low text-primary dark:text-primary docked full-width top-0 border-b border-outline-variant flat no shadows flex justify-between items-center w-full px-gutter h-16 shrink-0 z-50">
<div className="flex items-center gap-lg h-full">
<span className="text-headline-md font-headline-md font-bold text-on-surface dark:text-on-surface">Acquit.ai</span>
<nav className="hidden md:flex h-full items-end">
<a className="px-md h-full flex items-center text-on-surface-variant hover:bg-surface-variant hover:text-on-surface transition-colors" href="#">File</a>
<a className="px-md h-full flex items-center text-on-surface-variant hover:bg-surface-variant hover:text-on-surface transition-colors" href="#">Edit</a>
<a className="px-md h-full flex items-center text-on-surface-variant hover:bg-surface-variant hover:text-on-surface transition-colors" href="#">View</a>
<a className="px-md h-full flex items-center text-on-surface-variant hover:bg-surface-variant hover:text-on-surface transition-colors" href="#">Matter</a>
<a className="px-md h-full flex items-center text-on-surface-variant hover:bg-surface-variant hover:text-on-surface transition-colors" href="#">Account</a>
</nav>
</div>
<div className="flex items-center gap-sm">
<button className="p-2 text-on-surface-variant hover:bg-surface-variant rounded-DEFAULT transition-colors" title="Notifications">
<span className="material-symbols-outlined" data-icon="notifications">notifications</span>
</button>
<button className="p-2 text-on-surface-variant hover:bg-surface-variant rounded-DEFAULT transition-colors" title="Settings">
<span className="material-symbols-outlined" data-icon="settings">settings</span>
</button>
<button className="p-2 text-on-surface-variant hover:bg-surface-variant rounded-DEFAULT transition-colors" title="Account">
<span className="material-symbols-outlined" data-icon="account_circle">account_circle</span>
</button>
</div>
</header>
<div className="flex flex-1 overflow-hidden">

<aside className="hidden md:flex flex-col bg-surface-container dark:bg-surface-container text-secondary dark:text-secondary h-full w-[280px] border-r border-outline-variant flat no shadows z-40 shrink-0 transition-all duration-200 ease-in-out">
<div className="p-md brutalist-border-b flex items-center gap-md">
<div className="w-10 h-10 rounded-full bg-surface-container-high flex items-center justify-center border border-outline-variant">
<span className="material-symbols-outlined text-on-surface" data-icon="gavel">gavel</span>
</div>
<div>
<h2 className="text-label-caps font-label-caps tracking-widest text-on-surface">Legal OS</h2>
<p className="text-data-mono font-data-mono text-on-surface-variant text-[12px]">Matter 2024-772B</p>
</div>
</div>
<div className="p-md">
<button className="w-full py-sm px-md bg-secondary text-on-secondary font-label-caps text-label-caps hover:bg-secondary-fixed transition-colors flex items-center justify-center gap-2">
<span className="material-symbols-outlined text-[18px]">add</span>
                    New Filing
                </button>
</div>
<nav className="flex-1 overflow-y-auto py-sm">
<a className="flex items-center gap-md px-md py-sm text-on-surface-variant font-medium hover:bg-surface-container-high hover:text-on-surface text-label-caps font-label-caps" href="#">
<span className="material-symbols-outlined" data-icon="dashboard">dashboard</span>
                    Command Center
                </a>
<a className="flex items-center gap-md px-md py-sm text-on-surface-variant font-medium hover:bg-surface-container-high hover:text-on-surface text-label-caps font-label-caps" href="#">
<span className="material-symbols-outlined" data-icon="gavel">gavel</span>
                    The Docket
                </a>
<a className="flex items-center gap-md px-md py-sm text-on-surface-variant font-medium hover:bg-surface-container-high hover:text-on-surface text-label-caps font-label-caps" href="#">
<span className="material-symbols-outlined" data-icon="groups">groups</span>
                    Chambers
                </a>
<a className="flex items-center gap-md px-md py-sm text-on-surface-variant font-medium hover:bg-surface-container-high hover:text-on-surface text-label-caps font-label-caps" href="#">
<span className="material-symbols-outlined" data-icon="menu_book">menu_book</span>
                    Law Library
                </a>
<a className="flex items-center gap-md px-md py-sm text-on-surface border-l-4 border-secondary bg-surface-variant font-bold text-label-caps font-label-caps" href="#">
<span className="material-symbols-outlined" data-icon="folder_shared">folder_shared</span>
                    Record Room
                </a>
</nav>
<div className="brutalist-border-t p-sm mt-auto">
<a className="flex items-center gap-md px-md py-sm text-on-surface-variant font-medium hover:bg-surface-container-high hover:text-on-surface text-label-caps font-label-caps" href="#">
<span className="material-symbols-outlined" data-icon="help">help</span>
                    Support
                </a>
<a className="flex items-center gap-md px-md py-sm text-on-surface-variant font-medium hover:bg-surface-container-high hover:text-on-surface text-label-caps font-label-caps" href="#">
<span className="material-symbols-outlined" data-icon="archive">archive</span>
                    Archive
                </a>
</div>
</aside>

<main className="flex-1 flex flex-col h-full overflow-hidden bg-background relative">

<div className="h-14 brutalist-border-b bg-surface-container-lowest flex items-center justify-between px-lg shrink-0">
<div className="flex items-center gap-md">
<h1 className="text-headline-md font-headline-md text-on-surface">Filing Table</h1>
<span className="text-on-surface-variant font-data-mono text-data-mono bg-surface-container px-2 py-1 brutalist-border">243 Records</span>
</div>
<div className="flex items-center gap-sm">
<div className="relative flex items-center">
<span className="material-symbols-outlined absolute left-2 text-on-surface-variant pointer-events-none" data-icon="search">search</span>
<input className="bg-surface-container border-b border-outline-variant focus:border-secondary focus:ring-0 text-data-mono font-data-mono text-on-surface pl-10 pr-4 py-1 h-8 w-64 outline-none placeholder-on-surface-variant transition-colors" placeholder="Search records..." type="text" />
</div>
<button className="flex items-center gap-2 px-md h-8 bg-surface-container-high hover:bg-surface-variant brutalist-border text-on-surface font-label-caps text-label-caps transition-colors">
<span className="material-symbols-outlined text-[16px]">filter_list</span>
                        Filters
                    </button>
<button className="flex items-center gap-2 px-md h-8 bg-secondary text-on-secondary font-label-caps text-label-caps hover:bg-secondary-fixed transition-colors ml-lg">
<span className="material-symbols-outlined text-[16px]">upload_file</span>
                        File a Record
                    </button>
</div>
</div>

<div className="flex-1 flex overflow-hidden">

<div className="w-56 brutalist-border-r bg-surface flex flex-col shrink-0 overflow-y-auto">
<div className="p-md text-label-caps font-label-caps text-on-surface-variant tracking-widest uppercase mb-sm">
                        Filing Cabinet
                    </div>
<ul className="space-y-1 px-sm font-data-mono text-data-mono">
<li>
<button className="w-full text-left px-sm py-2 rounded-sm text-on-surface hover:bg-surface-container flex items-center justify-between">
<span>All Documents</span>
<span className="text-on-surface-variant">243</span>
</button>
</li>
<li>
<button className="w-full text-left px-sm py-2 rounded-sm text-secondary bg-surface-container-high border-l-2 border-secondary flex items-center justify-between">
<span>Charging Instrument</span>
<span className="text-secondary">12</span>
</button>
</li>
<li>
<button className="w-full text-left px-sm py-2 rounded-sm text-on-surface hover:bg-surface-container flex items-center justify-between">
<span>Officer’s Report</span>
<span className="text-on-surface-variant">45</span>
</button>
</li>
<li>
<button className="w-full text-left px-sm py-2 rounded-sm text-on-surface hover:bg-surface-container flex items-center justify-between">
<span>Order of Court</span>
<span className="text-on-surface-variant">8</span>
</button>
</li>
<li>
<button className="w-full text-left px-sm py-2 rounded-sm text-on-surface hover:bg-surface-container flex items-center justify-between">
<span>Filed Motion</span>
<span className="text-on-surface-variant">112</span>
</button>
</li>
<li>
<button className="w-full text-left px-sm py-2 rounded-sm text-on-surface hover:bg-surface-container flex items-center justify-between">
<span>Working Draft</span>
<span className="text-on-surface-variant">34</span>
</button>
</li>
<li>
<button className="w-full text-left px-sm py-2 rounded-sm text-on-surface hover:bg-surface-container flex items-center justify-between">
<span>Exhibit</span>
<span className="text-on-surface-variant">29</span>
</button>
</li>
<li>
<button className="w-full text-left px-sm py-2 rounded-sm text-on-surface hover:bg-surface-container flex items-center justify-between">
<span>Court Transcript</span>
<span className="text-on-surface-variant">3</span>
</button>
</li>
</ul>
</div>

<div className="flex-1 bg-background overflow-y-auto relative" id="recordTableContainer">
<div className="w-full min-w-[800px]">

<div className="grid grid-cols-12 gap-sm p-md brutalist-border-b bg-surface-container-lowest sticky top-0 z-10 font-label-caps text-label-caps text-on-surface-variant">
<div className="col-span-4">Name</div>
<div className="col-span-3">Filed As</div>
<div className="col-span-2">Date Filed</div>
<div className="col-span-2">Status</div>
<div className="col-span-1 text-right">Actions</div>
</div>

<div className="flex flex-col">

<div className="docket-row selected grid grid-cols-12 gap-sm p-md brutalist-border-b items-center cursor-pointer" onclick="toggleInspector(true)">
<div className="col-span-4 flex items-center gap-sm">
<span className="material-symbols-outlined text-secondary" data-icon="description">description</span>
<span className="font-body-md text-on-surface truncate">Indictment_State_v_Doe_FINAL.pdf</span>
</div>
<div className="col-span-3 font-data-mono text-data-mono text-on-surface-variant truncate">Charging Instrument</div>
<div className="col-span-2 font-data-mono text-data-mono text-on-surface-variant">2024-10-24</div>
<div className="col-span-2">
<span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full border border-secondary text-secondary font-label-caps text-[10px]">
<span className="w-1.5 h-1.5 rounded-full bg-secondary"></span>
                                        Verified
                                    </span>
</div>
<div className="col-span-1 flex justify-end gap-xs">
<button className="text-on-surface-variant hover:text-on-surface"><span className="material-symbols-outlined text-[20px]" data-icon="more_vert">more_vert</span></button>
</div>
</div>

<div className="docket-row grid grid-cols-12 gap-sm p-md brutalist-border-b items-center cursor-pointer" onclick="toggleInspector(true)">
<div className="col-span-4 flex items-center gap-sm">
<span className="material-symbols-outlined text-on-surface-variant" data-icon="description">description</span>
<span className="font-body-md text-on-surface truncate">Motion_to_Suppress_Draft_v2.docx</span>
</div>
<div className="col-span-3 font-data-mono text-data-mono text-on-surface-variant truncate">Working Draft</div>
<div className="col-span-2 font-data-mono text-data-mono text-on-surface-variant">2024-10-23</div>
<div className="col-span-2">
<span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full border border-outline-variant text-on-surface-variant font-label-caps text-[10px]">
<span className="w-1.5 h-1.5 rounded-full bg-outline-variant"></span>
                                        Draft
                                    </span>
</div>
<div className="col-span-1 flex justify-end gap-xs">
<button className="text-on-surface-variant hover:text-on-surface"><span className="material-symbols-outlined text-[20px]" data-icon="more_vert">more_vert</span></button>
</div>
</div>

<div className="docket-row grid grid-cols-12 gap-sm p-md brutalist-border-b items-center cursor-pointer" onclick="toggleInspector(true)">
<div className="col-span-4 flex items-center gap-sm">
<span className="material-symbols-outlined text-on-surface-variant" data-icon="image">image</span>
<span className="font-body-md text-on-surface truncate">CrimeScene_Photo_04.jpg</span>
</div>
<div className="col-span-3 font-data-mono text-data-mono text-on-surface-variant truncate">Exhibit</div>
<div className="col-span-2 font-data-mono text-data-mono text-on-surface-variant">2024-10-22</div>
<div className="col-span-2">
<span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full border border-[#838486] text-[#838486] font-label-caps text-[10px]">
<span className="w-1.5 h-1.5 rounded-full bg-[#838486]"></span>
                                        Pending Review
                                    </span>
</div>
<div className="col-span-1 flex justify-end gap-xs">
<button className="text-on-surface-variant hover:text-on-surface"><span className="material-symbols-outlined text-[20px]" data-icon="more_vert">more_vert</span></button>
</div>
</div>

<div className="docket-row grid grid-cols-12 gap-sm p-md brutalist-border-b items-center cursor-pointer" onclick="toggleInspector(true)">
<div className="col-span-4 flex items-center gap-sm">
<span className="material-symbols-outlined text-error" data-icon="error">error</span>
<span className="font-body-md text-on-surface truncate">Arrest_Report_Smith_Missing_Pg2.pdf</span>
</div>
<div className="col-span-3 font-data-mono text-data-mono text-on-surface-variant truncate">Officer’s Report</div>
<div className="col-span-2 font-data-mono text-data-mono text-on-surface-variant">2024-10-20</div>
<div className="col-span-2">
<span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full border border-error text-error font-label-caps text-[10px]">
<span className="w-1.5 h-1.5 rounded-full bg-error"></span>
                                        Incomplete
                                    </span>
</div>
<div className="col-span-1 flex justify-end gap-xs">
<button className="text-on-surface-variant hover:text-on-surface"><span className="material-symbols-outlined text-[20px]" data-icon="more_vert">more_vert</span></button>
</div>
</div>
</div>
</div>
</div>

<div className="w-96 brutalist-border-l bg-surface-container flex flex-col shrink-0 transition-transform duration-300 ease-in-out transform translate-x-0 hidden" id="inspectorPanel">

<div className="h-14 brutalist-border-b flex items-center justify-between px-md bg-surface-container-high shrink-0">
<h3 className="font-headline-md text-[18px] text-on-surface flex items-center gap-sm">
<span className="material-symbols-outlined text-[20px]" data-icon="visibility">visibility</span>
                            Dossier View
                        </h3>
<button className="text-on-surface-variant hover:text-on-surface" onclick="toggleInspector(false)">
<span className="material-symbols-outlined" data-icon="close">close</span>
</button>
</div>

<div className="flex-1 overflow-y-auto p-md flex flex-col gap-lg">

<div className="brutalist-border bg-background p-sm">
<div className="font-data-mono text-data-mono text-secondary mb-xs">ID: REQ-99201-A</div>
<h4 className="font-headline-md text-[16px] text-on-surface mb-md">Indictment_State_v_Doe_FINAL.pdf</h4>
<div className="grid grid-cols-2 gap-y-sm text-[12px]">
<div className="text-on-surface-variant font-label-caps uppercase">Filed By</div>
<div className="text-on-surface font-data-mono">ADA Sarah Jenkins</div>
<div className="text-on-surface-variant font-label-caps uppercase">Extracted</div>
<div className="text-on-surface font-data-mono">10/24/24 14:32 EST</div>
</div>
</div>

<div className="flex items-center gap-md p-sm brutalist-border bg-surface-container-highest">
<div className="w-10 h-10 rounded-full border-2 border-secondary flex items-center justify-center shrink-0">
<span className="material-symbols-outlined text-secondary" data-icon="check">check</span>
</div>
<div>
<div className="font-label-caps text-label-caps text-secondary uppercase tracking-wider">AI Extraction Complete</div>
<div className="font-data-mono text-data-mono text-on-surface-variant text-[12px]">Confidence: 98.4%</div>
</div>
</div>

<div className="flex-1 flex flex-col min-h-[300px]">
<div className="flex justify-between items-center mb-sm">
<span className="font-label-caps text-label-caps text-on-surface-variant uppercase">Extracted Text</span>
<button className="text-[12px] font-data-mono text-secondary hover:underline flex items-center gap-1">
<span className="material-symbols-outlined text-[14px]" data-icon="content_copy">content_copy</span> Copy
                                </button>
</div>
<div className="flex-1 brutalist-border bg-[#eceff1] p-md overflow-y-auto">
<p className="font-display-case text-[14px] leading-relaxed text-[#1e293b] select-all">
                                    IN THE SUPERIOR COURT OF THE STATE OF <br />
                                    COUNTY OF FICTIONAL<br /><br />
                                    STATE OF FICTIONAL,<br />
                                    Plaintiff,<br /><br />
                                    v.<br /><br />
                                    JOHN DOE,<br />
                                    Defendant.<br /><br />
                                    INDICTMENT<br /><br />
                                    The Grand Jury of the County of Fictional, State of Fictional, accuses JOHN DOE of the crime of GRAND THEFT, committed as follows: On or about October 15, 2024, in the County of Fictional, the defendant did unlawfully take money or personal property of a value exceeding $950 belonging to Jane Smith.
                                </p>
</div>
</div>
</div>

<div className="brutalist-border-t bg-surface-container p-md flex gap-sm shrink-0">
<button className="flex-1 bg-background brutalist-border hover:bg-surface-variant text-on-surface font-data-mono text-[12px] py-2 transition-colors">
                            Redact
                        </button>
<button className="flex-1 bg-secondary text-on-secondary font-label-caps text-[12px] py-2 hover:bg-secondary-fixed transition-colors">
                            Open Full
                        </button>
</div>
</div>
</div>
</main>
</div>

<div className="fixed top-16 right-0 w-80 z-30 flex items-center px-4 h-10 bg-surface-container-highest dark:bg-surface-container-highest text-tertiary-fixed dark:text-tertiary-fixed border-l border-b border-outline-variant shadow-md opacity-90 hidden" id="clerkBar">
<span className="text-label-caps font-label-caps text-on-tertiary-container flex-1">The Clerk</span>
<div className="flex items-center gap-2">
<button className="text-label-caps font-label-caps text-primary hover:bg-surface-variant px-2 py-1 transition-colors">
                Clear All
            </button>
<button className="text-on-surface-variant hover:bg-surface-variant p-1 transition-colors">
<span className="material-symbols-outlined" data-icon="push_pin">push_pin</span>
</button>
</div>
</div>


      </div>
    </AppShell>
  );
}
