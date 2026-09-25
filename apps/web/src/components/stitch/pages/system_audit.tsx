// AUTO-GENERATED from system_audit/code.html by scripts/convert-stitch-to-react.mjs -- do not edit.
import AppShell from "@/components/alexandria/AppShell";
import "./system_audit.css";

export default function SystemAudit() {
  return (
    <AppShell pageName="system_audit">
      <div className="stitch-page">


<nav className="hidden md:flex w-[280px] h-screen fixed left-0 top-0 border-r border-outline-variant bg-background dark:bg-background text-primary dark:text-primary flex-col py-md z-40">
<div className="px-gutter mb-lg">
<h1 className="font-headline-lg text-headline-lg font-bold text-primary tracking-tighter uppercase">Acquit.ai</h1>
<p className="font-data-mono text-data-mono text-on-surface-variant mt-xs">Senior Counsel</p>
</div>
<div className="px-gutter mb-lg">
<button className="w-full bg-primary text-on-primary font-label-caps text-label-caps py-sm px-md rounded-DEFAULT hover:bg-primary-fixed transition-colors">NEW FILING</button>
</div>
<div className="flex-1 overflow-y-auto">
<ul className="flex flex-col">
<li className="group">
<a className="flex items-center px-gutter py-sm text-on-surface-variant font-medium hover:text-on-surface hover:bg-surface-container-high transition-colors duration-150" href="#">
<span className="material-symbols-outlined mr-sm text-[20px]" data-icon="dashboard">dashboard</span>
<span className="font-label-caps text-label-caps">Command Center</span>
</a>
</li>
<li className="group">
<a className="flex items-center px-gutter py-sm text-on-surface-variant font-medium hover:text-on-surface hover:bg-surface-container-high transition-colors duration-150" href="#">
<span className="material-symbols-outlined mr-sm text-[20px]" data-icon="gavel">gavel</span>
<span className="font-label-caps text-label-caps">The Docket</span>
</a>
</li>
<li className="group">
<a className="flex items-center px-gutter py-sm text-on-surface-variant font-medium hover:text-on-surface hover:bg-surface-container-high transition-colors duration-150" href="#">
<span className="material-symbols-outlined mr-sm text-[20px]" data-icon="account_balance">account_balance</span>
<span className="font-label-caps text-label-caps">Chambers</span>
</a>
</li>
<li className="group">
<a className="flex items-center px-gutter py-sm text-on-surface-variant font-medium hover:text-on-surface hover:bg-surface-container-high transition-colors duration-150" href="#">
<span className="material-symbols-outlined mr-sm text-[20px]" data-icon="library_books">library_books</span>
<span className="font-label-caps text-label-caps">Law Library</span>
</a>
</li>
<li className="group">
<a className="flex items-center px-gutter py-sm text-primary border-l-4 border-primary bg-secondary-container/30 font-bold hover:bg-surface-container-high transition-colors duration-150 border-l-4 transition-all duration-75" href="#">
<span className="material-symbols-outlined mr-sm text-[20px]" data-icon="folder_open">folder_open</span>
<span className="font-label-caps text-label-caps">Record Room</span>
</a>
</li>
<li className="group">
<a className="flex items-center px-gutter py-sm text-on-surface-variant font-medium hover:text-on-surface hover:bg-surface-container-high transition-colors duration-150" href="#">
<span className="material-symbols-outlined mr-sm text-[20px]" data-icon="policy">policy</span>
<span className="font-label-caps text-label-caps">Investigations</span>
</a>
</li>
<li className="group">
<a className="flex items-center px-gutter py-sm text-on-surface-variant font-medium hover:text-on-surface hover:bg-surface-container-high transition-colors duration-150" href="#">
<span className="material-symbols-outlined mr-sm text-[20px]" data-icon="timeline">timeline</span>
<span className="font-label-caps text-label-caps">Case Timeline</span>
</a>
</li>
<li className="group">
<a className="flex items-center px-gutter py-sm text-on-surface-variant font-medium hover:text-on-surface hover:bg-surface-container-high transition-colors duration-150" href="#">
<span className="material-symbols-outlined mr-sm text-[20px]" data-icon="visibility">visibility</span>
<span className="font-label-caps text-label-caps">Court Watch</span>
</a>
</li>
<li className="group">
<a className="flex items-center px-gutter py-sm text-on-surface-variant font-medium hover:text-on-surface hover:bg-surface-container-high transition-colors duration-150" href="#">
<span className="material-symbols-outlined mr-sm text-[20px]" data-icon="groups">groups</span>
<span className="font-label-caps text-label-caps">Counsel Directory</span>
</a>
</li>
<li className="group">
<a className="flex items-center px-gutter py-sm text-on-surface-variant font-medium hover:text-on-surface hover:bg-surface-container-high transition-colors duration-150" href="#">
<span className="material-symbols-outlined mr-sm text-[20px]" data-icon="assignment">assignment</span>
<span className="font-label-caps text-label-caps">Motions &amp; Tasks</span>
</a>
</li>
</ul>
</div>
<div className="mt-auto">
<ul className="flex flex-col border-t border-outline-variant pt-sm">
<li className="group">
<a className="flex items-center px-gutter py-sm text-on-surface-variant font-medium hover:text-on-surface hover:bg-surface-container-high transition-colors duration-150" href="#">
<span className="material-symbols-outlined mr-sm text-[20px]" data-icon="settings">settings</span>
<span className="font-label-caps text-label-caps">Settings</span>
</a>
</li>
<li className="group">
<a className="flex items-center px-gutter py-sm text-on-surface-variant font-medium hover:text-on-surface hover:bg-surface-container-high transition-colors duration-150" href="#">
<span className="material-symbols-outlined mr-sm text-[20px]" data-icon="help">help</span>
<span className="font-label-caps text-label-caps">Support</span>
</a>
</li>
</ul>
</div>
</nav>

<div className="flex-1 flex flex-col md:ml-[280px] h-screen overflow-hidden">

<header className="h-16 fixed top-0 right-0 left-0 md:left-[280px] z-50 border-b border-outline-variant bg-surface-container-low dark:bg-surface-container-low text-primary dark:text-primary flex justify-between items-center px-lg">
<div className="flex items-center gap-md">

<button className="md:hidden text-on-surface-variant hover:text-primary">
<span className="material-symbols-outlined" data-icon="menu">menu</span>
</button>
<div className="hidden md:flex gap-md font-label-caps text-label-caps">
<a className="text-primary border-b-2 border-primary pb-1 ring-1 ring-primary transition-all duration-200" href="#">Case: 2024-CV-8821</a>
<a className="text-on-surface-variant hover:text-primary pb-1" href="#">The Clerk</a>
</div>
</div>
<div className="flex items-center gap-lg">
<div className="flex gap-sm text-on-surface-variant">
<button className="hover:text-primary transition-colors p-xs rounded-full hover:bg-surface-bright dark:hover:bg-surface-bright">
<span className="material-symbols-outlined" data-icon="search">search</span>
</button>
<button className="hover:text-primary transition-colors p-xs rounded-full hover:bg-surface-bright dark:hover:bg-surface-bright">
<span className="material-symbols-outlined" data-icon="history">history</span>
</button>
<button className="hover:text-primary transition-colors p-xs rounded-full hover:bg-surface-bright dark:hover:bg-surface-bright">
<span className="material-symbols-outlined" data-icon="notifications">notifications</span>
</button>
</div>
<button className="hidden lg:block border border-outline text-primary font-label-caps text-label-caps py-xs px-sm rounded-DEFAULT hover:bg-surface-bright transition-colors">
                    AFFIX SIGNATURE
                </button>
<div className="w-8 h-8 rounded-full bg-surface-variant overflow-hidden border border-outline">
<img alt="Counsel Avatar" className="w-full h-full object-cover" data-alt="A professional headshot of a legal counsel, styled in a dark moody corporate aesthetic with dramatic lighting, high contrast, on a deep charcoal background, 8k resolution, photorealistic." src="https://lh3.googleusercontent.com/aida-public/AB6AXuAcG97qSAGbVC-tvWbqu8BSUIfPNCN558Ta-uj0ckvRiWiZ_C0tmXnZ2WMK4ixRT338D7rwJBl0_JUtuFY4WwNmzGRI45JBzQp9ysXh2Od3UmeVALXceP705ablXz4gsVWWeElBbkBC4a3de7RFO-pcCIGoKkeMmNMDZwH3tnGVZa8GLuduZLW66bFdR-7j0MN89CB1TzvLHTLPlUAfR08lZjjAgFTFLLL67urqhba-IVNJ8rLyiz9jKQ" />
</div>
</div>
</header>

<main className="flex-1 overflow-y-auto mt-16 p-gutter md:p-lg bg-surface">

<div className="mb-lg flex flex-col md:flex-row justify-between items-start md:items-end border-b border-outline-variant pb-sm">
<div>
<h2 className="font-display-case text-display-case text-primary mb-xs">System Audit Log</h2>
<p className="font-data-mono text-data-mono text-on-surface-variant">Compliance &amp; Transparency Record | Immutable Ledger</p>
</div>
<button className="mt-sm md:mt-0 bg-secondary-container text-on-secondary-container border border-outline font-label-caps text-label-caps py-sm px-md rounded-DEFAULT flex items-center gap-xs hover:bg-surface-container-high transition-colors">
<span className="material-symbols-outlined text-[16px]" data-icon="download">download</span>
                    EXPORT COMPLIANCE REPORT
                </button>
</div>

<div className="grid grid-cols-1 lg:grid-cols-12 gap-sm">

<div className="lg:col-span-8 flex flex-col gap-sm">

<div className="bg-surface-container border border-outline-variant rounded-DEFAULT p-sm flex items-center justify-between">
<div className="flex gap-sm">
<span className="px-sm py-xs border border-primary text-primary font-label-caps text-label-caps rounded-DEFAULT bg-secondary-container/20">ALL EVENTS</span>
<span className="px-sm py-xs border border-outline-variant text-on-surface-variant font-label-caps text-label-caps rounded-DEFAULT hover:text-on-surface cursor-pointer">AI ACTIONS</span>
<span className="px-sm py-xs border border-outline-variant text-error font-label-caps text-label-caps rounded-DEFAULT hover:bg-error-container/20 cursor-pointer">UPL FLAGS</span>
</div>
<div className="font-data-mono text-data-mono text-on-surface-variant flex items-center gap-xs">
<span className="material-symbols-outlined text-[16px]" data-icon="filter_list">filter_list</span>
                            Sort: Chronological (Desc)
                        </div>
</div>

<div className="bg-surface-container border border-outline-variant rounded-DEFAULT p-sm hover:border-outline transition-colors cursor-pointer group">
<div className="flex justify-between items-start mb-xs">
<div className="flex items-center gap-sm">
<span className="material-symbols-outlined text-primary" data-icon="document_scanner">document_scanner</span>
<span className="font-headline-md text-headline-md text-on-surface">Document Extraction: Smith v. Jones Discovery</span>
</div>
<span className="font-data-mono text-data-mono text-on-surface-variant">10:42:15.001Z</span>
</div>
<div className="grid grid-cols-4 gap-xs font-data-mono text-data-mono text-on-surface-variant mb-xs">
<div>ACTOR: AI-Agent-Omega</div>
<div>ACTION: OCR &amp; Entity Tag</div>
<div className="col-span-2 text-right">TARGET: DOC_ID_88492_V2.pdf</div>
</div>
<div className="border-t border-outline-variant pt-xs mt-xs text-sm">
                            Extracted 42 named entities, cross-referenced with local knowledge graph. Confidence score: 98.4%. No anomalies detected.
                        </div>
</div>

<div className="bg-surface-container border border-error/50 rounded-DEFAULT p-sm hover:border-error transition-colors cursor-pointer relative overflow-hidden">
<div className="absolute left-0 top-0 bottom-0 w-1 bg-error"></div>
<div className="flex justify-between items-start mb-xs pl-sm">
<div className="flex items-center gap-sm">
<span className="material-symbols-outlined text-error" data-icon="warning">warning</span>
<span className="font-headline-md text-headline-md text-error">UPL Guardrail Audit Flag: Draft Intervention</span>
</div>
<span className="font-data-mono text-data-mono text-on-surface-variant">09:15:33.420Z</span>
</div>
<div className="grid grid-cols-4 gap-xs font-data-mono text-data-mono text-on-surface-variant mb-xs pl-sm">
<div>ACTOR: AI-Drafting-Core</div>
<div>ACTION: Strategy Generation</div>
<div className="col-span-2 text-right">TARGET: Motion_To_Dismiss_Draft.docx</div>
</div>
<div className="border-t border-outline-variant pt-xs mt-xs text-sm pl-sm text-error/80">
<strong>HALT INITIATED:</strong> System detected generation of predictive legal strategy not tethered to provided precedent. Draft flagged for mandatory human senior counsel review before compilation.
                        </div>
</div>

<div className="bg-surface-container border border-outline-variant rounded-DEFAULT p-sm hover:border-outline transition-colors cursor-pointer">
<div className="flex justify-between items-start mb-xs">
<div className="flex items-center gap-sm">
<span className="material-symbols-outlined text-on-surface-variant" data-icon="person_search">person_search</span>
<span className="font-headline-md text-headline-md text-on-surface">Record Access: Privileged Communications</span>
</div>
<span className="font-data-mono text-data-mono text-on-surface-variant">08:02:11.990Z</span>
</div>
<div className="grid grid-cols-4 gap-xs font-data-mono text-data-mono text-on-surface-variant mb-xs">
<div>ACTOR: User_ID_744</div>
<div>ACTION: View File</div>
<div className="col-span-2 text-right">TARGET: Email_Chain_Client_Confidential.msg</div>
</div>
</div>
</div>

<div className="lg:col-span-4 flex flex-col gap-sm">

<div className="bg-surface-container border border-outline-variant rounded-DEFAULT p-md">
<div className="flex items-center gap-sm mb-md border-b border-outline-variant pb-xs">
<span className="material-symbols-outlined text-primary" data-icon="verified_user">verified_user</span>
<h3 className="font-headline-md text-headline-md text-on-surface">Guardrail Status</h3>
</div>
<div className="space-y-sm">
<div className="flex justify-between items-center">
<span className="font-label-caps text-label-caps text-on-surface-variant">UPL MONITOR</span>
<div className="flex items-center gap-xs">
<div className="w-2 h-2 rounded-full bg-error"></div>
<span className="font-data-mono text-data-mono text-on-surface">1 FLAG ACTIVE</span>
</div>
</div>
<div className="flex justify-between items-center">
<span className="font-label-caps text-label-caps text-on-surface-variant">HALLUCINATION DETECT</span>
<div className="flex items-center gap-xs">
<div className="w-2 h-2 rounded-full bg-primary"></div>
<span className="font-data-mono text-data-mono text-on-surface">NOMINAL</span>
</div>
</div>
<div className="flex justify-between items-center">
<span className="font-label-caps text-label-caps text-on-surface-variant">DATA RETENTION SECURE</span>
<div className="flex items-center gap-xs">
<div className="w-2 h-2 rounded-full bg-primary"></div>
<span className="font-data-mono text-data-mono text-on-surface">LOCKED</span>
</div>
</div>
</div>
</div>

<div className="bg-surface-container border border-outline-variant rounded-DEFAULT flex-1 flex flex-col">
<div className="bg-surface-container-high p-sm border-b border-outline-variant flex justify-between items-center">
<h4 className="font-label-caps text-label-caps text-on-surface">INSPECTOR: SELECTION</h4>
<span className="material-symbols-outlined text-on-surface-variant text-[16px]" data-icon="info">info</span>
</div>
<div className="p-md flex-1 flex flex-col justify-center items-center text-center text-on-surface-variant p-lg">
<span className="material-symbols-outlined text-[48px] mb-sm opacity-50" data-icon="touch_app">touch_app</span>
<p className="font-body-md text-body-md">Select an audit record from the ledger to view full cryptographic signature and detailed JSON payload.</p>
</div>
</div>
</div>
</div>
</main>
</div>

      </div>
    </AppShell>
  );
}
