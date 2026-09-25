// AUTO-GENERATED from investigations_issue_spotter/code.html by scripts/convert-stitch-to-react.mjs -- do not edit.
import AppShell from "@/components/alexandria/AppShell";
import "./investigations_issue_spotter.css";

export default function InvestigationsIssueSpotter() {
  return (
    <AppShell pageName="investigations_issue_spotter">
      <div className="stitch-page">


<nav className="hidden md:flex flex-col z-40 fixed left-0 top-0 bottom-0 w-[280px] bg-surface-container border-r border-outline-variant transition-all duration-200 ease-in-out">
<div className="p-gutter border-b border-outline-variant flex items-center gap-sm">
<span className="material-symbols-outlined text-secondary text-[24px]">balance</span>
<div>
<h1 className="text-label-caps font-label-caps tracking-widest text-on-surface">Legal OS</h1>
<p className="text-data-mono font-data-mono text-on-surface-variant text-[10px]">Matter 2024-772B</p>
</div>
</div>
<div className="px-gutter py-md border-b border-outline-variant">
<button className="w-full bg-secondary text-on-secondary font-label-caps text-label-caps py-sm px-md rounded flex items-center justify-center gap-xs hover:bg-secondary-fixed transition-colors">
<span className="material-symbols-outlined text-[16px]">add</span>
                New Filing
            </button>
</div>
<ul className="flex-1 overflow-y-auto py-sm">
<li className="px-sm py-xs">
<a className="flex items-center gap-md px-md py-sm text-on-surface-variant font-medium text-label-caps font-label-caps rounded hover:bg-surface-container-high hover:text-on-surface transition-colors" href="#">
<span className="material-symbols-outlined">dashboard</span>
                    Command Center
                </a>
</li>
<li className="px-sm py-xs">
<a className="flex items-center gap-md px-md py-sm text-on-surface-variant font-medium text-label-caps font-label-caps rounded hover:bg-surface-container-high hover:text-on-surface transition-colors" href="#">
<span className="material-symbols-outlined">gavel</span>
                    The Docket
                </a>
</li>

<li className="px-sm py-xs">
<a className="flex items-center gap-md px-md py-sm text-on-surface border-l-4 border-secondary bg-surface-variant font-bold text-label-caps font-label-caps rounded-r hover:bg-surface-container-high hover:text-on-surface transition-colors" href="#">
<span className="material-symbols-outlined icon-filled">groups</span>
                    Chambers
                </a>
</li>
<li className="px-sm py-xs">
<a className="flex items-center gap-md px-md py-sm text-on-surface-variant font-medium text-label-caps font-label-caps rounded hover:bg-surface-container-high hover:text-on-surface transition-colors" href="#">
<span className="material-symbols-outlined">menu_book</span>
                    Law Library
                </a>
</li>
<li className="px-sm py-xs">
<a className="flex items-center gap-md px-md py-sm text-on-surface-variant font-medium text-label-caps font-label-caps rounded hover:bg-surface-container-high hover:text-on-surface transition-colors" href="#">
<span className="material-symbols-outlined">folder_shared</span>
                    Record Room
                </a>
</li>
</ul>
<div className="p-gutter border-t border-outline-variant flex gap-sm">
<button className="flex-1 flex justify-center items-center p-sm text-on-surface-variant hover:text-on-surface hover:bg-surface-container-high rounded transition-colors" title="Support">
<span className="material-symbols-outlined">help</span>
</button>
<button className="flex-1 flex justify-center items-center p-sm text-on-surface-variant hover:text-on-surface hover:bg-surface-container-high rounded transition-colors" title="Archive">
<span className="material-symbols-outlined">archive</span>
</button>
</div>
</nav>

<main className="flex-1 ml-0 md:ml-[280px] flex flex-col h-screen bg-background relative grid-bg">

<header className="flex justify-between items-center w-full px-gutter h-16 bg-surface-container-low border-b border-outline-variant z-10 shrink-0">
<div className="flex items-center gap-lg">
<span className="text-headline-md font-headline-md font-bold text-on-surface md:hidden">Acquit.ai</span>
<nav className="hidden md:flex gap-lg h-full items-center pt-2">
<a className="text-on-surface-variant hover:bg-surface-variant hover:text-on-surface px-sm py-xs rounded transition-colors" href="#">File</a>
<a className="text-on-surface-variant hover:bg-surface-variant hover:text-on-surface px-sm py-xs rounded transition-colors" href="#">Edit</a>

<a className="text-primary border-b-2 border-primary pb-1 px-sm transition-colors scale-95 duration-75" href="#">View</a>
<a className="text-on-surface-variant hover:bg-surface-variant hover:text-on-surface px-sm py-xs rounded transition-colors" href="#">Matter</a>
<a className="text-on-surface-variant hover:bg-surface-variant hover:text-on-surface px-sm py-xs rounded transition-colors" href="#">Account</a>
</nav>
</div>
<div className="flex items-center gap-sm text-primary">
<button className="p-xs hover:bg-surface-variant rounded text-on-surface-variant hover:text-on-surface transition-colors">
<span className="material-symbols-outlined">notifications</span>
</button>
<button className="p-xs hover:bg-surface-variant rounded text-on-surface-variant hover:text-on-surface transition-colors">
<span className="material-symbols-outlined">settings</span>
</button>
<button className="p-xs hover:bg-surface-variant rounded text-on-surface-variant hover:text-on-surface transition-colors">
<span className="material-symbols-outlined">account_circle</span>
</button>
</div>
</header>

<div className="flex-1 flex overflow-hidden p-gutter gap-gutter">

<div className="w-full lg:w-7/12 xl:w-8/12 flex flex-col gap-sm overflow-hidden">
<div className="flex items-center justify-between border-b border-outline-variant pb-sm shrink-0">
<div>
<h2 className="font-headline-md text-headline-md text-on-surface flex items-center gap-sm">
<span className="material-symbols-outlined text-error">troubleshoot</span>
                            Issue Spotter: Active Scan
                        </h2>
<p className="font-data-mono text-data-mono text-on-surface-variant mt-xs text-[12px]">Agent: Forensic Alpha v2.4 | Target: Deposition Trcripts</p>
</div>
<div className="flex gap-sm">
<button className="border border-outline px-md py-xs rounded text-on-surface hover:bg-surface-container-high transition-colors font-data-mono text-data-mono text-[12px]">FILTER</button>
<button className="bg-primary text-on-primary px-md py-xs rounded hover:bg-primary-fixed transition-colors font-label-caps text-label-caps flex items-center gap-xs">
<span className="material-symbols-outlined text-[16px]">play_arrow</span> RESCAN
                        </button>
</div>
</div>

<div className="flex-1 overflow-y-auto pr-xs space-y-sm">

<div className="border border-outline-variant bg-surface-container-low p-md flex gap-md items-start cursor-pointer hover:border-secondary transition-colors group relative">
<div className="w-12 h-12 rounded-full border-2 border-error flex items-center justify-center shrink-0 bg-error-container text-on-error-container shadow-[0_0_8px_rgba(255,180,171,0.2)]">
<span className="font-data-mono text-data-mono font-bold text-[16px]">94</span>
</div>
<div className="flex-1">
<div className="flex justify-between items-start mb-xs">
<h3 className="font-headline-lg text-[18px] leading-tight text-on-surface font-semibold group-hover:text-secondary transition-colors">Timeline Contradiction: Alibi</h3>
<span className="bg-surface-container-high text-on-surface-variant font-data-mono text-data-mono text-[10px] px-sm py-xs rounded-full border border-outline-variant">DEFENSE: IMPEACHMENT</span>
</div>
<p className="font-body-md text-body-md text-on-surface-variant text-[14px] leading-snug mb-md">
                                Witness statement (Doc #442) claims presence at location A at 14:30. Cell tower data (Ev-B-12) places device at location B at 14:35, a 45-minute drive away.
                            </p>
<div className="flex items-center gap-md">
<button className="text-secondary font-label-caps text-label-caps flex items-center gap-xs hover:underline">
<span className="material-symbols-outlined text-[14px]">link</span> View Source Ev-B-12
                                </button>
<span className="text-outline-variant">|</span>
<span className="font-data-mono text-data-mono text-[11px] text-on-surface-variant">Found: 2m ago</span>
</div>
</div>
<div className="absolute right-0 top-0 bottom-0 w-1 bg-error hidden group-hover:block transition-all"></div>
</div>

<div className="border border-outline-variant bg-surface-container-low p-md flex gap-md items-start cursor-pointer hover:border-secondary transition-colors group">
<div className="w-12 h-12 rounded-full border border-outline flex items-center justify-center shrink-0 bg-surface-container text-on-surface">
<span className="font-data-mono text-data-mono text-[16px]">72</span>
</div>
<div className="flex-1">
<div className="flex justify-between items-start mb-xs">
<h3 className="font-headline-lg text-[18px] leading-tight text-on-surface font-semibold group-hover:text-secondary transition-colors">Statute of Limitations Risk</h3>
<span className="bg-surface-container-high text-on-surface-variant font-data-mono text-data-mono text-[10px] px-sm py-xs rounded-full border border-outline-variant">PROCEDURAL</span>
</div>
<p className="font-body-md text-body-md text-on-surface-variant text-[14px] leading-snug mb-md">
                                Alleged incident date precedes filing by 2 years and 11 months. Jurisdiction (NY) statute is 3 years. Immediate action required.
                            </p>
<div className="flex items-center gap-md">
<button className="text-secondary font-label-caps text-label-caps flex items-center gap-xs hover:underline">
<span className="material-symbols-outlined text-[14px]">description</span> View Complaint Draft
                                </button>
</div>
</div>
</div>
</div>
</div>

<aside className="hidden lg:flex w-5/12 xl:w-4/12 border border-outline-variant bg-surface-container-low flex-col">
<div className="bg-tertiary-container p-sm border-b border-outline-variant flex justify-between items-center shrink-0">
<span className="font-label-caps text-label-caps text-on-tertiary-container flex items-center gap-xs">
<span className="material-symbols-outlined text-[16px]">policy</span> EVIDENCE LOCKER LINK
                    </span>
<button className="text-on-tertiary-container hover:text-on-surface transition-colors"><span className="material-symbols-outlined text-[18px]">open_in_full</span></button>
</div>
<div className="p-md flex-1 overflow-y-auto flex flex-col gap-md">

<div className="border border-outline-variant bg-surface-container p-xs h-64 relative overflow-hidden group">
<div className="bg-cover bg-center w-full h-full opacity-60 mix-blend-luminosity group-hover:opacity-100 transition-opacity" data-alt="A macro close-up of a dense legal document or cell phone forensic readout on a glowing computer monitor, illuminated in a dark room with stark, cool blue and high-contrast green lighting, evoking a digital forensics lab environment." style={{ backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuAX1okWEO4lgSSfZ7__87kDVX7UuIWybQR5_725bkyuigedODZRfMXS2y1yRpf1NsCAAWQvIqoKS3ndBS-3Vzvwdue46Uvo8yN4BedPfWaZksDIZ9wUTFyx0lvwG__W8eNKjRvDt7An8ey-POzJojE_89sBligz7Yv3N0fOQ82jXmLucU4KuRxGT8TRh82yenBRb-1gUAVfJdkJvClYPnwJt8H-AHpK9aDjBb3ofN7VxJ8ZbJu1VZk8bw')" }}></div>
<div className="absolute inset-0 bg-gradient-to-t from-surface-container to-transparent pointer-events-none"></div>
<div className="absolute bottom-xs left-xs right-xs bg-surface-container-high/90 backdrop-blur p-sm border border-outline-variant">
<h4 className="font-headline-lg text-[14px] text-on-surface">Ev-B-12: Telco Log</h4>
<p className="font-data-mono text-data-mono text-[10px] text-secondary mt-xs">Tower 44-B Ping @ 14:35:12</p>
</div>
</div>

<div className="grid grid-cols-2 gap-xs">
<div className="border border-outline-variant p-sm bg-surface-container-lowest">
<span className="block font-label-caps text-label-caps text-on-surface-variant text-[10px] mb-xs">SOURCE</span>
<span className="font-data-mono text-data-mono text-[12px] text-on-surface">Verizon Comm.</span>
</div>
<div className="border border-outline-variant p-sm bg-surface-container-lowest">
<span className="block font-label-caps text-label-caps text-on-surface-variant text-[10px] mb-xs">ACQUIRED</span>
<span className="font-data-mono text-data-mono text-[12px] text-on-surface">2024-05-12</span>
</div>
<div className="border border-outline-variant p-sm bg-surface-container-lowest col-span-2">
<span className="block font-label-caps text-label-caps text-on-surface-variant text-[10px] mb-xs">CHAIN OF CUSTODY</span>
<div className="flex items-center gap-xs font-data-mono text-data-mono text-[11px] text-primary">
<span className="material-symbols-outlined text-[14px] text-secondary">check_circle</span> Verified (Hash: a8f9...)
                            </div>
</div>
</div>

<div className="mt-auto border-t border-outline-variant pt-md">
<h4 className="font-label-caps text-label-caps text-on-surface mb-sm flex items-center gap-xs">
<span className="material-symbols-outlined text-[16px]">memory</span> AGENT RATIONALE
                        </h4>
<p className="font-data-mono text-data-mono text-[12px] text-on-surface-variant leading-relaxed bg-surface-container p-sm border border-outline-variant border-l-2 border-l-secondary">
                            &gt; Comparing Doc #442 (Bates: 0041) to Ev-B-12.<br />
                            &gt; Subject claims presence at 123 Main St at 14:30.<br />
                            &gt; Ev-B-12 registers device IMEI ending 4492 at Tower 44-B (Industrial Park) at 14:35.<br />
                            &gt; Distance delta: 18 miles. Est travel time: 45m.<br />
                            &gt; CONCLUSION: Physical impossibility. High impeachment value.
                        </p>
</div>
</div>
</aside>
</div>
</main>

      </div>
    </AppShell>
  );
}
