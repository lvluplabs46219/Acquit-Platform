// AUTO-GENERATED from the_docket_open_a_matter/code.html by scripts/convert-stitch-to-react.mjs -- do not edit.
import AppShell from "@/components/alexandria/AppShell";
import "./the_docket_open_a_matter.css";

export default function TheDocketOpenAMatter() {
  return (
    <AppShell pageName="the_docket_open_a_matter">
      <div className="stitch-page">


<header className="h-16 shrink-0 border-b border-outline-variant bg-surface-container-low flex items-center justify-between px-lg z-50">
<div className="flex items-center gap-md">
<div className="w-8 h-8 bg-primary flex items-center justify-center rounded-sm">
<span className="material-symbols-outlined text-on-primary" data-icon="gavel" style={{ fontVariationSettings: "'FILL' 1" }}>gavel</span>
</div>
<h1 className="font-headline-md text-headline-md font-bold tracking-tight uppercase text-primary">Acquit.ai</h1>
<span className="text-outline-variant px-sm font-data-mono">/</span>
<span className="font-label-caps text-label-caps text-on-surface-variant uppercase">Open a Matter</span>
</div>
<button className="flex items-center gap-xs px-sm py-xs border border-transparent hover:border-outline-variant text-on-surface-variant hover:text-on-surface transition-colors font-label-caps text-label-caps uppercase" title="Cancel Intake">
<span className="material-symbols-outlined text-[16px]" data-icon="close">close</span>
            ABORT
        </button>
</header>

<main className="flex flex-1 overflow-hidden relative">

<aside className="w-[280px] hidden md:flex flex-col border-r border-outline-variant bg-surface-container-low shrink-0 pt-xl">
<div className="px-lg pb-md">
<h2 className="font-headline-md text-headline-md text-on-surface">Intake Protocol</h2>
<p className="font-body-md text-body-md text-on-surface-variant mt-xs">Complete the required fields to establish a new record on the ledger.</p>
</div>

<div className="mt-lg relative px-lg">

<div className="absolute left-[39px] top-6 bottom-6 w-[2px] bg-outline-variant z-0"></div>
<nav className="relative z-10 flex flex-col gap-xl">

<div className="flex items-start gap-md group cursor-default">
<div className="w-8 h-8 rounded-full bg-primary flex items-center justify-center shrink-0 border-[3px] border-surface-container-low shadow-[0_0_0_2px_#c6c6c9]">
<span className="font-data-mono text-data-mono text-on-primary">1</span>
</div>
<div className="pt-1">
<span className="block font-label-caps text-label-caps text-primary uppercase">Current Step</span>
<span className="block font-headline-md text-[16px] leading-[24px] font-semibold text-on-surface mt-1">Jurisdiction &amp; Details</span>
</div>
</div>

<div className="flex items-start gap-md group opacity-60">
<div className="w-8 h-8 rounded-full bg-surface-container-high flex items-center justify-center shrink-0 border-2 border-outline-variant">
<span className="font-data-mono text-data-mono text-on-surface-variant">2</span>
</div>
<div className="pt-1">
<span className="block font-label-caps text-label-caps text-on-surface-variant uppercase">Pending</span>
<span className="block font-headline-md text-[16px] leading-[24px] font-medium text-on-surface-variant mt-1">Charges &amp; Statutes</span>
</div>
</div>

<div className="flex items-start gap-md group opacity-60">
<div className="w-8 h-8 rounded-full bg-surface-container-high flex items-center justify-center shrink-0 border-2 border-outline-variant">
<span className="font-data-mono text-data-mono text-on-surface-variant">3</span>
</div>
<div className="pt-1">
<span className="block font-label-caps text-label-caps text-on-surface-variant uppercase">Pending</span>
<span className="block font-headline-md text-[16px] leading-[24px] font-medium text-on-surface-variant mt-1">Parties &amp; Counsel</span>
</div>
</div>

<div className="flex items-start gap-md group opacity-60">
<div className="w-8 h-8 rounded-full bg-surface-container-high flex items-center justify-center shrink-0 border-2 border-outline-variant">
<span className="font-data-mono text-data-mono text-on-surface-variant">4</span>
</div>
<div className="pt-1">
<span className="block font-label-caps text-label-caps text-on-surface-variant uppercase">Pending</span>
<span className="block font-headline-md text-[16px] leading-[24px] font-medium text-on-surface-variant mt-1">Initial Sync</span>
</div>
</div>
</nav>
</div>
<div className="mt-auto p-lg border-t border-outline-variant bg-surface-container/50">
<div className="flex items-center gap-sm">
<span className="material-symbols-outlined text-on-surface-variant text-[18px]" data-icon="encrypted">encrypted</span>
<span className="font-data-mono text-[12px] leading-tight text-on-surface-variant">End-to-End Encrypted Ledger</span>
</div>
</div>
</aside>

<section className="flex-1 overflow-y-auto bg-background relative flex flex-col items-center pt-xl pb-[100px]">

<div className="w-full max-w-3xl px-md">
<div className="mb-xl pb-md border-b border-outline-variant">
<h2 className="font-display-case text-display-case text-on-surface">Jurisdiction &amp; Core Details</h2>
<p className="font-body-lg text-body-lg text-on-surface-variant mt-xs">Establish the primary identifiers for this legal matter. These fields dictate the metadata classification for future intelligence queries.</p>
</div>
<form className="flex flex-col gap-xl">

<div className="flex flex-col gap-xs group">
<label className="font-label-caps text-label-caps text-on-surface-variant uppercase flex items-center gap-xs" htmlFor="matter_title">
                            Matter Title / Caption
                            <span className="text-error" title="Required">*</span>
</label>
<input autoComplete="off" autoFocus="" className="w-full bg-transparent border-b border-outline-variant px-0 py-sm font-data-mono text-[16px] text-on-surface placeholder:text-outline-variant transition-all brutalist-input focus:px-sm focus:-mx-sm" id="matter_title" name="matter_title" placeholder="e.g., State of New York v. John Doe" required="" type="text" />
</div>
<div className="grid grid-cols-1 md:grid-cols-2 gap-lg">

<div className="flex flex-col gap-xs relative">
<label className="font-label-caps text-label-caps text-on-surface-variant uppercase flex items-center gap-xs" htmlFor="jurisdiction">
                                Presiding Court / Jurisdiction
                                <span className="text-error" title="Required">*</span>
</label>
<div className="relative">
<select className="appearance-none w-full bg-transparent border-b border-outline-variant px-0 py-sm font-data-mono text-[16px] text-on-surface focus:outline-none focus:border-primary focus:border-b transition-colors cursor-pointer rounded-none" id="jurisdiction" name="jurisdiction">
<option className="bg-surface-container text-outline-variant" disabled="" selected="" value="">Select Jurisdiction...</option>
<option className="bg-surface-container text-on-surface" value="ny_sdny">SDNY - Southern District of New York</option>
<option className="bg-surface-container text-on-surface" value="ny_edny">EDNY - Eastern District of New York</option>
<option className="bg-surface-container text-on-surface" value="ny_sup_man">New York Supreme Court, NY County</option>
<option className="bg-surface-container text-on-surface" value="federal_app_2">2nd Circuit Court of Appeals</option>
</select>
<span className="material-symbols-outlined absolute right-0 top-1/2 -translate-y-1/2 text-on-surface-variant pointer-events-none" data-icon="arrow_drop_down">arrow_drop_down</span>
</div>
</div>

<div className="flex flex-col gap-xs group">
<label className="font-label-caps text-label-caps text-on-surface-variant uppercase" htmlFor="case_number">
                                Docket / Case Number <span className="text-outline-variant lowercase ml-1">(Optional)</span>
</label>
<input autoComplete="off" className="w-full bg-transparent border-b border-outline-variant px-0 py-sm font-data-mono text-[16px] text-on-surface placeholder:text-outline-variant transition-all brutalist-input focus:px-sm focus:-mx-sm" id="case_number" name="case_number" placeholder="e.g., 1:23-cv-01234" type="text" />
</div>
</div>

<div className="flex flex-col gap-xs mt-md group">
<label className="font-label-caps text-label-caps text-on-surface-variant uppercase flex justify-between items-end" htmlFor="intake_summary">
<span>Initial Intake Summary / Memo</span>
<span className="font-data-mono text-[10px] text-outline-variant tracking-normal normal-case">Supports markdown formatting</span>
</label>
<div className="relative border border-outline-variant bg-surface-container-lowest focus-within:border-primary focus-within:ring-1 focus-within:ring-primary transition-all">

<div className="h-10 border-b border-outline-variant bg-surface-container-low flex items-center px-sm gap-sm">
<button className="w-7 h-7 flex items-center justify-center hover:bg-surface-variant text-on-surface-variant hover:text-on-surface transition-colors rounded-sm" title="Bold" type="button">
<span className="material-symbols-outlined text-[18px]" data-icon="format_bold">format_bold</span>
</button>
<button className="w-7 h-7 flex items-center justify-center hover:bg-surface-variant text-on-surface-variant hover:text-on-surface transition-colors rounded-sm" title="Italic" type="button">
<span className="material-symbols-outlined text-[18px]" data-icon="format_italic">format_italic</span>
</button>
<div className="w-[1px] h-4 bg-outline-variant mx-1"></div>
<button className="w-7 h-7 flex items-center justify-center hover:bg-surface-variant text-on-surface-variant hover:text-on-surface transition-colors rounded-sm" title="Bullet List" type="button">
<span className="material-symbols-outlined text-[18px]" data-icon="format_list_bulleted">format_list_bulleted</span>
</button>
<button className="w-7 h-7 flex items-center justify-center hover:bg-surface-variant text-on-surface-variant hover:text-on-surface transition-colors rounded-sm" title="Attach Document" type="button">
<span className="material-symbols-outlined text-[18px]" data-icon="attach_file">attach_file</span>
</button>
</div>
<textarea className="w-full bg-transparent border-none p-md font-body-md text-body-md text-on-surface placeholder:text-outline-variant resize-y focus:ring-0 focus:outline-none" id="intake_summary" name="intake_summary" placeholder="Briefly describe the nature of the dispute, initial client goals, or paste the preliminary consultation notes..." rows="8"></textarea>
</div>
</div>
</form>
</div>
</section>

<div className="absolute bottom-0 left-0 md:left-[280px] right-0 h-[80px] border-t border-outline-variant bg-surface-container-low/95 backdrop-blur-sm flex items-center justify-between px-xl z-20">
<button className="px-md py-sm border border-outline hover:border-primary text-on-surface font-data-mono text-data-mono uppercase tracking-wider transition-colors flex items-center gap-sm">
<span className="material-symbols-outlined text-[18px]" data-icon="save">save</span>
                Save Draft
            </button>
<button className="px-lg py-sm bg-primary text-on-primary font-label-caps text-[14px] leading-tight uppercase tracking-widest hover:bg-white transition-colors flex items-center gap-md font-bold">
                Next: Charges
                <span className="material-symbols-outlined text-[20px]" data-icon="arrow_forward">arrow_forward</span>
</button>
</div>
</main>

      </div>
    </AppShell>
  );
}
