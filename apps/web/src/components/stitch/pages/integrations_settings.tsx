// AUTO-GENERATED from integrations_settings/code.html by scripts/convert-stitch-to-react.mjs -- do not edit.
import AppShell from "@/components/alexandria/AppShell";
import "./integrations_settings.css";

export default function IntegrationsSettings() {
  return (
    <AppShell pageName="integrations_settings">
      <div className="stitch-page">





<main className="flex-1 flex flex-col h-full bg-background overflow-y-auto">

<header className="h-16 flex justify-between items-center px-lg border-b border-outline-variant bg-surface-container-low flex-shrink-0 z-10 sticky top-0">
<div className="flex items-center gap-4">
<button className="w-10 h-10 flex items-center justify-center rounded hover:bg-surface-container-high transition-colors text-on-surface-variant hover:text-primary">
<span className="material-symbols-outlined">arrow_back</span>
</button>
<div>
<h1 className="font-headline-md text-headline-md font-bold text-primary tracking-tight">Integrations &amp; Data Hub</h1>
<p className="font-data-mono text-[11px] text-on-surface-variant uppercase tracking-widest mt-1">Acquit.ai Core Systems</p>
</div>
</div>
<div className="flex items-center gap-md">
<span className="flex items-center gap-2 font-data-mono text-[12px] text-secondary">
<span className="w-2 h-2 rounded-full bg-secondary animate-pulse"></span>
                    System Nominal
                </span>
</div>
</header>
<div className="flex-1 p-xl max-w-7xl mx-auto w-full grid grid-cols-12 gap-gutter">

<div className="col-span-12 lg:col-span-8 flex flex-col gap-lg">
<section className="flex flex-col gap-md">
<h2 className="font-label-caps text-label-caps text-on-surface-variant uppercase tracking-widest border-b border-outline-variant pb-sm">Active Gateways</h2>

<div className="grid grid-cols-1 md:grid-cols-2 gap-md">

<div className="bg-surface-container border border-outline-variant rounded p-md flex flex-col relative overflow-hidden group hover:border-primary transition-colors">
<div className="absolute top-0 left-0 w-1 h-full bg-secondary"></div>
<div className="flex justify-between items-start mb-lg">
<div className="flex items-center gap-3">
<div className="w-10 h-10 rounded border border-outline-variant flex items-center justify-center bg-surface-container-low text-primary">
<span className="material-symbols-outlined">account_balance</span>
</div>
<div>
<h3 className="font-headline-md text-[18px] font-semibold text-primary">PACER Gateway</h3>
<p className="font-data-mono text-[12px] text-on-surface-variant">Fed. Court Records</p>
</div>
</div>
<div className="px-2 py-1 border border-secondary text-secondary font-data-mono text-[10px] uppercase rounded">
                                    Connected
                                </div>
</div>
<div className="mt-auto">
<div className="flex justify-between text-[12px] text-on-surface-variant mb-1 font-data-mono">
<span>Sync Interval</span>
<span className="text-on-surface">15 mins</span>
</div>
<div className="w-full bg-surface-container-highest h-1 rounded overflow-hidden">
<div className="bg-secondary h-full" style={{ width: "75%" }}></div>
</div>
<div className="mt-sm flex justify-between items-center">
<span className="font-data-mono text-[10px] text-on-surface-variant">Last ping: 2m ago</span>
<button className="text-[12px] text-primary hover:underline font-body-md">Configure</button>
</div>
</div>
</div>

<div className="bg-surface-container border border-outline-variant rounded p-md flex flex-col relative overflow-hidden group hover:border-primary transition-colors">
<div className="absolute top-0 left-0 w-1 h-full bg-secondary"></div>
<div className="flex justify-between items-start mb-lg">
<div className="flex items-center gap-3">
<div className="w-10 h-10 rounded border border-outline-variant flex items-center justify-center bg-surface-container-low text-primary">
<span className="material-symbols-outlined">menu_book</span>
</div>
<div>
<h3 className="font-headline-md text-[18px] font-semibold text-primary">LexisNexis</h3>
<p className="font-data-mono text-[12px] text-on-surface-variant">Precedent &amp; Caselaw</p>
</div>
</div>
<div className="px-2 py-1 border border-secondary text-secondary font-data-mono text-[10px] uppercase rounded">
                                    Connected
                                </div>
</div>
<div className="mt-auto">
<div className="flex justify-between text-[12px] text-on-surface-variant mb-1 font-data-mono">
<span>Sync Interval</span>
<span className="text-on-surface">Live / Query</span>
</div>
<div className="w-full bg-surface-container-highest h-1 rounded overflow-hidden">
<div className="bg-secondary h-full" style={{ width: "100%" }}></div>
</div>
<div className="mt-sm flex justify-between items-center">
<span className="font-data-mono text-[10px] text-on-surface-variant">API Status: OK</span>
<button className="text-[12px] text-primary hover:underline font-body-md">Configure</button>
</div>
</div>
</div>

<div className="bg-surface-container border border-outline-variant rounded p-md flex flex-col relative overflow-hidden group hover:border-primary transition-colors">
<div className="absolute top-0 left-0 w-1 h-full bg-surface-variant"></div>
<div className="flex justify-between items-start mb-lg">
<div className="flex items-center gap-3">
<div className="w-10 h-10 rounded border border-outline-variant flex items-center justify-center bg-surface-container-low text-on-surface-variant opacity-50">
<span className="material-symbols-outlined">gavel</span>
</div>
<div>
<h3 className="font-headline-md text-[18px] font-semibold text-on-surface-variant">Westlaw</h3>
<p className="font-data-mono text-[12px] text-on-surface-variant opacity-70">Legal Research</p>
</div>
</div>
<div className="px-2 py-1 border border-outline-variant text-on-surface-variant font-data-mono text-[10px] uppercase rounded opacity-70">
                                    Disconnected
                                </div>
</div>
<div className="mt-auto">
<div className="mt-sm flex justify-between items-center">
<span className="font-data-mono text-[10px] text-on-surface-variant">Requires Auth Token</span>
<button className="bg-primary text-on-primary px-3 py-1 rounded text-[12px] font-semibold hover:bg-primary-fixed transition-colors">Connect</button>
</div>
</div>
</div>

<div className="bg-surface-container border border-outline-variant rounded p-md flex flex-col relative overflow-hidden group hover:border-primary transition-colors">
<div className="absolute top-0 left-0 w-1 h-full bg-secondary"></div>
<div className="flex justify-between items-start mb-lg">
<div className="flex items-center gap-3">
<div className="w-10 h-10 rounded border border-outline-variant flex items-center justify-center bg-surface-container-low text-primary">
<span className="material-symbols-outlined">cases</span>
</div>
<div>
<h3 className="font-headline-md text-[18px] font-semibold text-primary">MyCase API</h3>
<p className="font-data-mono text-[12px] text-on-surface-variant">Practice Management</p>
</div>
</div>
<div className="px-2 py-1 border border-error text-error font-data-mono text-[10px] uppercase rounded">
                                    Warning
                                </div>
</div>
<div className="mt-auto">
<div className="flex justify-between text-[12px] text-error mb-1 font-data-mono">
<span>Sync Interval</span>
<span>Delayed</span>
</div>
<div className="w-full bg-surface-container-highest h-1 rounded overflow-hidden">
<div className="bg-error h-full" style={{ width: "45%" }}></div>
</div>
<div className="mt-sm flex justify-between items-center">
<span className="font-data-mono text-[10px] text-error">Rate limit approaching</span>
<button className="text-[12px] text-primary hover:underline font-body-md">Review</button>
</div>
</div>
</div>
</div>
</section>

<section className="flex flex-col gap-md flex-1 mt-lg">
<div className="flex justify-between items-end border-b border-outline-variant pb-sm">
<h2 className="font-label-caps text-label-caps text-on-surface-variant uppercase tracking-widest">Connection Logs</h2>
<button className="text-[12px] text-on-surface-variant hover:text-primary flex items-center gap-1 font-data-mono uppercase">
<span className="material-symbols-outlined text-[16px]">download</span> Export CSV
                        </button>
</div>
<div className="bg-surface-container border border-outline-variant rounded overflow-hidden flex flex-col flex-1 max-h-[300px]">
<div className="grid grid-cols-12 gap-4 px-md py-2 border-b border-outline-variant bg-surface-container-low font-data-mono text-[11px] text-on-surface-variant uppercase tracking-wider">
<div className="col-span-3">Timestamp</div>
<div className="col-span-3">Service</div>
<div className="col-span-4">Operation</div>
<div className="col-span-2 text-right">Status</div>
</div>
<div className="overflow-y-auto flex-1 font-data-mono text-[13px]">

<div className="grid grid-cols-12 gap-4 px-md py-3 border-b border-outline-variant hover:bg-surface-container-high transition-colors">
<div className="col-span-3 text-on-surface-variant">14:22:05 UTC</div>
<div className="col-span-3 text-primary">PACER</div>
<div className="col-span-4 text-on-surface truncate">GET /docket/2024-CV-8821</div>
<div className="col-span-2 text-right text-secondary">200 OK</div>
</div>

<div className="grid grid-cols-12 gap-4 px-md py-3 border-b border-outline-variant hover:bg-surface-container-high transition-colors">
<div className="col-span-3 text-on-surface-variant">14:20:12 UTC</div>
<div className="col-span-3 text-primary">LexisNexis</div>
<div className="col-span-4 text-on-surface truncate">POST /query/shepardize</div>
<div className="col-span-2 text-right text-secondary">200 OK</div>
</div>

<div className="grid grid-cols-12 gap-4 px-md py-3 border-b border-outline-variant hover:bg-surface-container-high transition-colors bg-error-container/10">
<div className="col-span-3 text-on-surface-variant">14:15:00 UTC</div>
<div className="col-span-3 text-primary">MyCase</div>
<div className="col-span-4 text-on-surface truncate">GET /sync/documents</div>
<div className="col-span-2 text-right text-error">429 LIMIT</div>
</div>

<div className="grid grid-cols-12 gap-4 px-md py-3 border-b border-outline-variant hover:bg-surface-container-high transition-colors">
<div className="col-span-3 text-on-surface-variant">14:10:05 UTC</div>
<div className="col-span-3 text-primary">PACER</div>
<div className="col-span-4 text-on-surface truncate">GET /docket/2024-CV-8821</div>
<div className="col-span-2 text-right text-secondary">200 OK</div>
</div>
</div>
</div>
</section>
</div>

<div className="col-span-12 lg:col-span-4 border border-outline-variant bg-surface-container-low rounded p-lg flex flex-col gap-lg h-fit">
<div>
<h2 className="font-headline-md text-[20px] font-bold text-primary mb-1">Global Data Settings</h2>
<p className="text-[13px] text-on-surface-variant leading-relaxed">Configure overarching data retention and synchronization protocols for the Acquit.ai ecosystem.</p>
</div>
<div className="space-y-6">

<div className="flex items-center justify-between p-4 border border-outline-variant rounded bg-surface-container">
<div>
<span className="block font-semibold text-[14px] text-primary">Master Auto-Sync</span>
<span className="block text-[12px] text-on-surface-variant font-data-mono mt-1">Background polling enabled</span>
</div>
<div className="relative inline-block w-12 mr-2 align-middle select-none transition duration-200 ease-in">
<input checked="" className="toggle-checkbox absolute block w-6 h-6 rounded-full bg-white border-4 border-secondary appearance-none cursor-pointer transition-transform duration-200 ease-in-out translate-x-6 z-10" id="toggle" name="toggle" type="checkbox" />
<label className="toggle-label block overflow-hidden h-6 rounded-full bg-secondary cursor-pointer" htmlFor="toggle"></label>
</div>
</div>

<div>
<label className="block font-label-caps text-label-caps text-on-surface-variant mb-2">Default Polling Interval</label>
<select className="w-full bg-surface-container border border-outline-variant text-on-surface text-[14px] rounded px-3 py-2 focus:ring-1 focus:ring-primary focus:border-primary outline-none transition-colors font-data-mono">
<option>5 Minutes (High Priority)</option>
<option selected="">15 Minutes (Standard)</option>
<option>1 Hour (Eco)</option>
<option>Manual Only</option>
</select>
</div>

<div>
<label className="block font-label-caps text-label-caps text-on-surface-variant mb-2">Encryption Protocol</label>
<div className="w-full bg-surface-container-highest border border-outline-variant text-on-surface-variant text-[14px] rounded px-3 py-2 font-data-mono cursor-not-allowed opacity-70 flex justify-between items-center">
<span>AES-256 (Locked)</span>
<span className="material-symbols-outlined text-[16px]">lock</span>
</div>
<p className="text-[11px] text-on-surface-variant mt-1">Enterprise tier requirement.</p>
</div>
</div>
<div className="mt-auto pt-lg border-t border-outline-variant">
<button className="w-full bg-surface-container border border-primary text-primary hover:bg-primary hover:text-on-primary transition-colors py-2 rounded font-semibold text-[14px] uppercase tracking-wider font-label-caps">
                        Save Configurations
                    </button>
</div>
</div>
</div>
</main>
<style>
        /* Custom Toggle Switch Styles */
        .toggle-checkbox:checked &#123;
          right: 0;
          border-color: #68D391;
        &#125;
        .toggle-checkbox:checked + .toggle-label &#123;
          background-color: #68D391;
        &#125;
        .toggle-checkbox &#123;
            right: 0;
            border-color: #1a1c1e; /* primary-container approx */
        &#125;
        .toggle-checkbox:checked &#123;
            border-color: #b5c8df; /* secondary */
        &#125;
        .toggle-label &#123;
            background-color: #353435; /* surface-variant */
        &#125;
        .toggle-checkbox:checked + .toggle-label &#123;
            background-color: #b5c8df; /* secondary */
        &#125;
    </style>

      </div>
    </AppShell>
  );
}
