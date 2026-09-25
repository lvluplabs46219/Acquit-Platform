// AUTO-GENERATED from investigations_research_memo/code.html by scripts/convert-stitch-to-react.mjs -- do not edit.
import AppShell from "@/components/alexandria/AppShell";
import "./investigations_research_memo.css";

export default function InvestigationsResearchMemo() {
  return (
    <AppShell pageName="investigations_research_memo">
      <div className="stitch-page">


<nav className="fixed left-0 top-0 bottom-0 flex flex-col z-40 bg-surface-container dark:bg-surface-container h-screen w-[280px] border-r border-outline-variant flat no shadows transition-all duration-200 ease-in-out hidden md:flex">

<div className="p-lg border-b border-outline-variant flex items-center gap-md">
<div className="w-10 h-10 rounded-DEFAULT bg-secondary-container flex items-center justify-center border border-outline">
<span className="material-symbols-outlined text-on-secondary-container" data-icon="account_balance">account_balance</span>
</div>
<div>
<h1 className="text-label-caps font-label-caps tracking-widest text-on-surface uppercase">Legal OS</h1>
<p className="text-data-mono font-data-mono text-secondary dark:text-secondary text-xs mt-xs">Matter 2024-772B</p>
</div>
</div>

<div className="p-gutter border-b border-outline-variant">
<button className="w-full bg-surface-variant text-on-surface border border-outline hover:bg-surface-container-high transition-colors py-sm px-md flex items-center justify-center gap-sm font-data-mono text-data-mono">
<span className="material-symbols-outlined text-sm" data-icon="add">add</span>
                New Filing
            </button>
</div>

<div className="flex-1 overflow-y-auto py-md flex flex-col gap-xs">
<a className="group flex items-center gap-md px-lg py-sm text-on-surface-variant font-medium hover:bg-surface-container-high hover:text-on-surface transition-all" href="#">
<span className="material-symbols-outlined text-on-surface-variant group-hover:text-on-surface" data-icon="dashboard">dashboard</span>
<span className="text-label-caps font-label-caps uppercase">Command Center</span>
</a>
<a className="group flex items-center gap-md px-lg py-sm text-on-surface-variant font-medium hover:bg-surface-container-high hover:text-on-surface transition-all" href="#">
<span className="material-symbols-outlined text-on-surface-variant group-hover:text-on-surface" data-icon="gavel">gavel</span>
<span className="text-label-caps font-label-caps uppercase">The Docket</span>
</a>
<a className="group flex items-center gap-md px-lg py-sm text-on-surface-variant font-medium hover:bg-surface-container-high hover:text-on-surface transition-all" href="#">
<span className="material-symbols-outlined text-on-surface-variant group-hover:text-on-surface" data-icon="groups">groups</span>
<span className="text-label-caps font-label-caps uppercase">Chambers</span>
</a>

<a className="group flex items-center gap-md px-lg py-sm text-on-surface border-l-4 border-secondary bg-surface-variant font-bold" href="#">
<span className="material-symbols-outlined text-on-surface" data-icon="menu_book" data-weight="fill">menu_book</span>
<span className="text-label-caps font-label-caps uppercase">Law Library</span>
</a>
<a className="group flex items-center gap-md px-lg py-sm text-on-surface-variant font-medium hover:bg-surface-container-high hover:text-on-surface transition-all" href="#">
<span className="material-symbols-outlined text-on-surface-variant group-hover:text-on-surface" data-icon="folder_shared">folder_shared</span>
<span className="text-label-caps font-label-caps uppercase">Record Room</span>
</a>
</div>

<div className="border-t border-outline-variant p-md flex flex-col gap-xs">
<a className="group flex items-center gap-md px-md py-sm text-on-surface-variant font-medium hover:bg-surface-container-high hover:text-on-surface transition-all" href="#">
<span className="material-symbols-outlined text-on-surface-variant group-hover:text-on-surface" data-icon="help">help</span>
<span className="text-label-caps font-label-caps uppercase">Support</span>
</a>
<a className="group flex items-center gap-md px-md py-sm text-on-surface-variant font-medium hover:bg-surface-container-high hover:text-on-surface transition-all" href="#">
<span className="material-symbols-outlined text-on-surface-variant group-hover:text-on-surface" data-icon="archive">archive</span>
<span className="text-label-caps font-label-caps uppercase">Archive</span>
</a>
</div>
</nav>

<main className="flex-1 flex flex-col md:ml-[280px] h-screen overflow-hidden bg-surface">

<header className="flex justify-between items-center w-full px-gutter h-16 bg-surface-container-low dark:bg-surface-container-low border-b border-outline-variant flat no shadows docked full-width top-0 z-30 shrink-0">

<div className="flex items-center gap-xl h-full">
<div className="text-headline-md font-headline-md font-bold text-on-surface dark:text-on-surface flex items-center gap-sm">
<span className="material-symbols-outlined text-primary" data-icon="description">description</span>
                    Acquit.ai
                </div>
<nav className="hidden lg:flex items-end h-full gap-lg">
<a className="text-on-surface-variant text-label-caps font-label-caps h-full flex items-center uppercase hover:bg-surface-variant hover:text-on-surface px-sm transition-colors" href="#">File</a>
<a className="text-on-surface-variant text-label-caps font-label-caps h-full flex items-center uppercase hover:bg-surface-variant hover:text-on-surface px-sm transition-colors" href="#">Edit</a>
<a className="text-on-surface-variant text-label-caps font-label-caps h-full flex items-center uppercase hover:bg-surface-variant hover:text-on-surface px-sm transition-colors" href="#">View</a>
<a className="text-primary border-b-2 border-primary pb-1 text-label-caps font-label-caps h-full flex items-center uppercase hover:bg-surface-variant hover:text-on-surface px-sm transition-colors" href="#">Matter</a>
<a className="text-on-surface-variant text-label-caps font-label-caps h-full flex items-center uppercase hover:bg-surface-variant hover:text-on-surface px-sm transition-colors" href="#">Account</a>
</nav>
</div>

<div className="flex items-center gap-sm">
<button className="w-10 h-10 flex items-center justify-center text-primary dark:text-primary hover:bg-surface-variant hover:text-on-surface rounded-DEFAULT transition-colors active:scale-95 duration-75">
<span className="material-symbols-outlined" data-icon="notifications">notifications</span>
</button>
<button className="w-10 h-10 flex items-center justify-center text-primary dark:text-primary hover:bg-surface-variant hover:text-on-surface rounded-DEFAULT transition-colors active:scale-95 duration-75">
<span className="material-symbols-outlined" data-icon="settings">settings</span>
</button>
<button className="w-10 h-10 flex items-center justify-center text-primary dark:text-primary hover:bg-surface-variant hover:text-on-surface rounded-DEFAULT transition-colors active:scale-95 duration-75">
<span className="material-symbols-outlined" data-icon="account_circle">account_circle</span>
</button>
</div>
</header>

<div className="flex-1 flex flex-col lg:flex-row overflow-hidden relative">

<aside className="w-full lg:w-[400px] border-r border-outline-variant bg-surface-container flex flex-col shrink-0 overflow-y-auto">

<div className="p-lg border-b border-outline-variant">
<div className="flex items-center justify-between mb-md">
<h2 className="text-label-caps font-label-caps uppercase text-on-surface tracking-widest flex items-center gap-sm">
<span className="material-symbols-outlined text-sm text-secondary" data-icon="target">target</span>
                            Research Objective
                        </h2>
</div>
<div className="space-y-md">
<div className="relative">
<label className="sr-only">Issue Statement</label>
<textarea className="w-full bg-surface-dim border border-outline-variant text-data-mono font-data-mono text-on-surface p-sm focus:border-secondary focus:ring-1 focus:ring-secondary transition-all resize-none" placeholder="Define the legal issue... e.g., Applicability of the economic loss rule in strict liability tort claims concerning commercial software contracts." rows="4"></textarea>
</div>
<div className="flex gap-sm">
<button className="flex-1 bg-surface-variant border border-outline hover:bg-surface-container-high text-on-surface text-label-caps font-label-caps py-sm transition-colors">Clear</button>
<button className="flex-[2] bg-secondary text-on-secondary font-label-caps text-label-caps py-sm uppercase tracking-wider flex items-center justify-center gap-xs hover:bg-secondary-fixed transition-colors">
<span className="material-symbols-outlined text-sm" data-icon="magic_button">magic_button</span>
                                Generate Outline
                            </button>
</div>
</div>
</div>

<div className="flex-1 flex flex-col min-h-0">
<div className="p-lg pb-sm flex items-center justify-between sticky top-0 bg-surface-container z-10 border-b border-outline-variant">
<h2 className="text-label-caps font-label-caps uppercase text-on-surface tracking-widest flex items-center gap-sm">
<span className="material-symbols-outlined text-sm text-secondary" data-icon="library_books">library_books</span>
                            Primary Authorities
                        </h2>
<button className="text-secondary hover:text-secondary-fixed p-xs rounded-DEFAULT hover:bg-surface-variant transition-colors">
<span className="material-symbols-outlined text-sm" data-icon="add">add</span>
</button>
</div>
<div className="flex-1 overflow-y-auto p-md space-y-xs">

<div className="border border-outline-variant bg-surface-container-low p-sm hover:border-outline cursor-pointer group transition-colors">
<div className="flex items-start justify-between">
<div className="flex items-center gap-xs mb-xs">
<span className="material-symbols-outlined text-xs text-error" data-icon="gavel" data-weight="fill">gavel</span>
<span className="text-data-mono font-data-mono text-xs text-on-surface-variant">423 F.3d 115 (9th Cir. 2005)</span>
</div>
<button className="opacity-0 group-hover:opacity-100 text-outline hover:text-error transition-all">
<span className="material-symbols-outlined text-sm" data-icon="close">close</span>
</button>
</div>
<h3 className="text-body-md font-body-md font-medium text-on-surface mb-xs line-clamp-2">Gramercy Holdings v. TechCorp Solutions</h3>
<div className="flex gap-xs">
<span className="px-xs py-base bg-surface-variant text-on-surface-variant text-[10px] font-label-caps border border-outline-variant">CITED</span>
<span className="px-xs py-base bg-surface-variant text-on-surface-variant text-[10px] font-label-caps border border-outline-variant">TORT</span>
</div>
</div>

<div className="border border-secondary bg-surface-variant p-sm cursor-pointer group transition-colors relative overflow-hidden">
<div className="absolute left-0 top-0 bottom-0 w-1 bg-secondary"></div>
<div className="flex items-start justify-between pl-xs">
<div className="flex items-center gap-xs mb-xs">
<span className="material-symbols-outlined text-xs text-secondary" data-icon="gavel" data-weight="fill">gavel</span>
<span className="text-data-mono font-data-mono text-xs text-on-surface">88 N.Y.2d 420 (1996)</span>
</div>
<button className="opacity-0 group-hover:opacity-100 text-outline hover:text-error transition-all">
<span className="material-symbols-outlined text-sm" data-icon="close">close</span>
</button>
</div>
<h3 className="text-body-md font-body-md font-medium text-on-surface mb-xs line-clamp-2 pl-xs">Bocre Garment Co. v. Environmental Data</h3>
<div className="flex gap-xs pl-xs">
<span className="px-xs py-base bg-secondary text-on-secondary text-[10px] font-label-caps border border-secondary">BINDING</span>
</div>
</div>
</div>
</div>
</aside>

<section className="flex-1 bg-surface-container-lowest flex flex-col relative overflow-hidden h-full">

<div className="h-12 border-b border-outline-variant bg-surface-container flex items-center px-lg justify-between shrink-0">
<div className="flex items-center gap-md">
<div className="flex items-center gap-xs border-r border-outline-variant pr-md">
<span className="material-symbols-outlined text-secondary text-sm" data-icon="edit_document">edit_document</span>
<span className="text-data-mono font-data-mono text-xs text-on-surface">MEMO_DRAFT_v1.4.docx</span>
</div>
<div className="flex items-center gap-xs text-on-surface-variant">
<button className="p-xs hover:bg-surface-variant hover:text-on-surface transition-colors rounded"><span className="material-symbols-outlined text-[18px]" data-icon="format_bold">format_bold</span></button>
<button className="p-xs hover:bg-surface-variant hover:text-on-surface transition-colors rounded"><span className="material-symbols-outlined text-[18px]" data-icon="format_italic">format_italic</span></button>
<button className="p-xs hover:bg-surface-variant hover:text-on-surface transition-colors rounded"><span className="material-symbols-outlined text-[18px]" data-icon="format_list_bulleted">format_list_bulleted</span></button>
</div>
</div>
<div className="flex items-center gap-md">
<span className="text-data-mono font-data-mono text-xs text-tertiary flex items-center gap-xs">
<span className="w-2 h-2 rounded-full bg-secondary animate-pulse"></span>
                            AI Drafting Active
                        </span>
</div>
</div>

<div className="flex-1 overflow-y-auto p-lg lg:p-xl flex justify-center bg-surface-dim">

<div className="w-full max-w-[800px] bg-inverse-surface text-inverse-on-surface p-xl lg:p-[64px] border border-outline-variant shadow-lg min-h-[1000px] relative">

<div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-secondary to-transparent opacity-20 bg-[length:200%_100%] animate-[shimmer_2s_infinite]"></div>

<div className="border-b-2 border-inverse-on-surface pb-md mb-xl">
<div className="grid grid-cols-[120px_1fr] gap-y-sm text-body-md font-body-md">
<div className="font-bold uppercase tracking-wider">To:</div>
<div>Managing Partner</div>
<div className="font-bold uppercase tracking-wider">From:</div>
<div>Acquit.ai Investigations Module</div>
<div className="font-bold uppercase tracking-wider">Date:</div>
<div className="font-data-mono text-sm">October 24, 2024</div>
<div className="font-bold uppercase tracking-wider">Subject:</div>
<div className="font-bold">Economic Loss Rule Application to Software Licensing Agreements</div>
</div>
</div>

<div className="space-y-lg text-body-lg font-body-lg leading-relaxed">
<section>
<h2 className="text-headline-md font-headline-md font-bold mb-md">I. Question Presented</h2>
<p className="mb-md">Whether the economic loss rule bars plaintiff's strict liability tort claims arising from alleged defects in a commercial software platform where the only sustained damages are commercial economic losses, and no physical injury or property damage occurred outside the software itself.</p>
</section>
<section>
<h2 className="text-headline-md font-headline-md font-bold mb-md">II. Brief Answer</h2>
<p className="mb-md">Yes. Under controlling precedent, the economic loss rule precludes recovery in tort for purely economic damages stemming from a defective product, absent personal injury or damage to "other property." Because the software license constitutes a commercial transaction, the plaintiff's remedies are strictly confined to breach of contract and warranty claims.</p>
</section>
<section>
<h2 className="text-headline-md font-headline-md font-bold mb-md">III. Discussion</h2>
<p className="mb-md">The economic loss doctrine fundamentally serves to maintain the boundary between tort law and contract law. As established in <span className="bg-primary/20 px-1 border-b border-primary cursor-pointer hover:bg-primary/30 transition-colors">Bocre Garment Co. v. Environmental Data, 88 N.Y.2d 420 (1996)</span>, a plaintiff who suffers purely economic loss as a result of a defective product is relegated to contractual remedies.</p>
<div className="border-l-4 border-inverse-primary pl-md my-md italic text-body-md">
<span className="material-symbols-outlined text-inverse-primary text-sm mb-xs block" data-icon="neurology">neurology</span>
                                    "AI Synthesis: The core argument hinges on characterizing the software as a 'product' subject to the UCC, rather than a service. New York courts have consistently applied the doctrine to software transactions when the agreement structurally mirrors a sale of goods..." <span className="inline-block w-2 h-4 bg-secondary ml-1 animate-pulse align-middle"></span>
</div>
</section>
</div>
</div>
</div>

<div className="h-16 border-t border-outline-variant bg-surface-container flex items-center px-lg justify-between shrink-0 absolute bottom-0 w-full z-20">
<div className="text-data-mono font-data-mono text-xs text-on-surface-variant flex items-center gap-md">
<span>Words: 412</span>
<span>Citations: 2 Verified</span>
</div>
<div className="flex items-center gap-md">
<button className="bg-surface-variant border border-outline hover:bg-surface-container-high text-on-surface text-label-caps font-label-caps px-lg py-sm transition-colors flex items-center gap-sm">
<span className="material-symbols-outlined text-sm" data-icon="download">download</span>
                            Export Word
                        </button>
<button className="bg-primary text-on-primary font-label-caps text-label-caps px-lg py-sm uppercase tracking-wider flex items-center justify-center gap-xs hover:bg-primary-fixed transition-colors">
<span className="material-symbols-outlined text-sm" data-icon="archive">archive</span>
                            File to Record Room
                        </button>
</div>
</div>
</section>
</div>
</main>
<style>
        @keyframes shimmer &#123;
            0% &#123; background-position: 200% 0; &#125;
            100% &#123; background-position: -200% 0; &#125;
        &#125;
    </style>

      </div>
    </AppShell>
  );
}
