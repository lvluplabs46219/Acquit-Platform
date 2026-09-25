// AUTO-GENERATED from the_clerk_notification_settings/code.html by scripts/convert-stitch-to-react.mjs -- do not edit.
import AppShell from "@/components/alexandria/AppShell";
import "./the_clerk_notification_settings.css";

export default function TheClerkNotificationSettings() {
  return (
    <AppShell pageName="the_clerk_notification_settings">
      <div className="stitch-page">


<header className="bg-surface-container-low dark:bg-surface-container-low h-16 fixed top-0 right-0 left-0 md:left-[280px] z-50 border-b border-outline-variant flat no shadows flex justify-between items-center px-lg">
<div className="flex items-center gap-md">

<button className="md:hidden text-primary dark:text-primary">
<span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 0" }}>menu</span>
</button>
<span className="font-headline-md text-headline-md font-black text-primary md:hidden">Acquit.ai</span>
<div className="hidden md:flex gap-md items-center">
<a className="text-on-surface-variant hover:text-primary font-body-md text-body-md transition-colors duration-150" href="#">Case: 2024-CV-8821</a>
<a className="text-on-surface-variant hover:text-primary font-body-md text-body-md transition-colors duration-150" href="#">The Clerk</a>
</div>
</div>
<div className="flex items-center gap-md">
<button className="text-primary dark:text-primary hover:bg-surface-bright dark:hover:bg-surface-bright p-sm rounded-full transition-colors duration-150 flex items-center justify-center">
<span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 0" }}>notifications</span>
</button>
<button className="text-primary dark:text-primary hover:bg-surface-bright dark:hover:bg-surface-bright p-sm rounded-full transition-colors duration-150 flex items-center justify-center">
<span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 0" }}>history</span>
</button>
<button className="text-primary dark:text-primary hover:bg-surface-bright dark:hover:bg-surface-bright p-sm rounded-full transition-colors duration-150 flex items-center justify-center">
<span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 0" }}>search</span>
</button>
<button className="bg-primary text-background font-label-caps text-label-caps px-lg py-sm rounded border border-primary hover:bg-background hover:text-primary transition-colors duration-150 ml-sm hidden md:block">
                AFFIX SIGNATURE
            </button>
<div className="ml-sm w-8 h-8 rounded-full overflow-hidden border border-outline-variant bg-surface-container flex items-center justify-center">
<span className="material-symbols-outlined text-on-surface-variant" style={{ fontVariationSettings: "'FILL' 1" }}>person</span>
</div>
</div>
</header>

<div className="flex pt-16 min-h-screen">

<main className="flex-1 p-lg md:p-xl md:pl-[320px] max-w-7xl mx-auto">

<div className="mb-xl">
<h1 className="font-display-case text-display-case text-primary mb-sm">Notification Protocols</h1>
<p className="font-body-lg text-body-lg text-on-surface-variant max-w-3xl">Configure rule-based alerts and threshold triggers for The Clerk. Changes take effect immediately across all active dockets.</p>
</div>

<div className="grid grid-cols-1 lg:grid-cols-12 gap-gutter">

<div className="lg:col-span-8 flex flex-col gap-lg">

<div className="border border-outline-variant bg-surface-container-lowest p-lg rounded relative overflow-hidden group">
<div className="absolute top-0 left-0 w-1 h-full bg-primary opacity-50 group-hover:opacity-100 transition-opacity"></div>
<h2 className="font-headline-md text-headline-md text-primary mb-lg flex items-center gap-sm">
<span className="material-symbols-outlined text-primary" style={{ fontVariationSettings: "'FILL' 0" }}>timer</span>
                            Deadline Proximity Alerts
                        </h2>
<div className="space-y-lg">

<div className="flex items-center justify-between p-sm border-b border-outline-variant/50 pb-md">
<div>
<h3 className="font-body-md text-body-md font-semibold text-on-surface mb-xs">Critical Deadlines</h3>
<p className="font-data-mono text-data-mono text-on-surface-variant">Alert threshold: T-minus 72 hours</p>
</div>
<label className="relative inline-flex items-center cursor-pointer">
<input checked="" className="sr-only peer" type="checkbox" value="" />
<div className="w-11 h-6 bg-surface-container-highest peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-on-surface after:border-outline after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-primary"></div>
</label>
</div>

<div className="p-sm pt-0">
<label className="flex justify-between font-label-caps text-label-caps text-on-surface-variant mb-sm">
<span>Warning Threshold (Hours)</span>
<span className="text-primary font-data-mono text-data-mono">48h</span>
</label>
<input className="w-full h-1 bg-surface-container-highest rounded-lg appearance-none cursor-pointer accent-primary" max="168" min="12" type="range" value="48" />
<div className="flex justify-between font-data-mono text-data-mono text-on-surface-variant mt-sm opacity-50 text-[10px]">
<span>12h</span>
<span>72h</span>
<span>168h</span>
</div>
</div>
</div>
</div>

<div className="border border-outline-variant bg-surface-container-lowest p-lg rounded">
<h2 className="font-headline-md text-headline-md text-primary mb-lg flex items-center gap-sm">
<span className="material-symbols-outlined text-primary" style={{ fontVariationSettings: "'FILL' 0" }}>gavel</span>
                            Docket Activity Frequency
                        </h2>
<div className="space-y-md">

<label className="flex items-start gap-md p-md border border-outline-variant rounded bg-surface-container hover:bg-surface-container-high transition-colors cursor-pointer border-primary/50">
<input checked="" className="mt-1 accent-primary" name="docket_freq" type="radio" />
<div>
<span className="block font-body-md text-body-md font-semibold text-primary">Real-time Parsing</span>
<span className="block font-data-mono text-data-mono text-on-surface-variant mt-xs">Immediate alert on any detected PACER/ECF update.</span>
</div>
</label>
<label className="flex items-start gap-md p-md border border-outline-variant rounded bg-surface-container hover:bg-surface-container-high transition-colors cursor-pointer opacity-70 hover:opacity-100">
<input className="mt-1 accent-primary" name="docket_freq" type="radio" />
<div>
<span className="block font-body-md text-body-md font-semibold text-on-surface">Daily Digest</span>
<span className="block font-data-mono text-data-mono text-on-surface-variant mt-xs">Consolidated report generated at 18:00 EST.</span>
</div>
</label>
</div>
</div>
</div>

<div className="lg:col-span-4 flex flex-col gap-lg">

<div className="border border-outline-variant bg-surface-container-lowest p-md rounded">
<h2 className="font-headline-lg-mobile text-headline-lg-mobile text-primary mb-md border-b border-outline-variant pb-sm">Routing Channels</h2>
<div className="space-y-sm">
<div className="flex items-center justify-between p-sm hover:bg-surface-container transition-colors rounded">
<div className="flex items-center gap-sm text-on-surface">
<span className="material-symbols-outlined text-on-surface-variant" style={{ fontVariationSettings: "'FILL' 0" }}>mail</span>
<span className="font-body-md text-body-md">Encrypted Email</span>
</div>
<input checked="" className="accent-primary" type="checkbox" />
</div>
<div className="flex items-center justify-between p-sm hover:bg-surface-container transition-colors rounded">
<div className="flex items-center gap-sm text-on-surface">
<span className="material-symbols-outlined text-on-surface-variant" style={{ fontVariationSettings: "'FILL' 0" }}>ad_units</span>
<span className="font-body-md text-body-md">Push (Lex Mobile)</span>
</div>
<input checked="" className="accent-primary" type="checkbox" />
</div>
<div className="flex items-center justify-between p-sm hover:bg-surface-container transition-colors rounded">
<div className="flex items-center gap-sm text-on-surface">
<span className="material-symbols-outlined text-on-surface-variant" style={{ fontVariationSettings: "'FILL' 0" }}>desktop_windows</span>
<span className="font-body-md text-body-md">In-App Banner</span>
</div>
<input className="accent-primary" type="checkbox" />
</div>
</div>
</div>

<div className="border border-outline-variant bg-surface-container-low p-md rounded relative overflow-hidden">

<div className="absolute inset-0 opacity-[0.03] pointer-events-none" style={{ backgroundImage: "radial-gradient(circle at 2px 2px, white 1px, transparent 0)", backgroundSize: "16px 16px" }}></div>
<div className="relative z-10">
<h2 className="font-headline-lg-mobile text-headline-lg-mobile text-on-surface mb-md flex items-center gap-sm">
<span className="material-symbols-outlined text-on-surface-variant" style={{ fontVariationSettings: "'FILL' 0" }}>nightlight</span>
                                Quiet Hours
                            </h2>
<p className="font-data-mono text-data-mono text-on-surface-variant mb-md text-xs">Suppress non-critical alerts during specified times. Critical deadlines override this setting.</p>
<div className="grid grid-cols-2 gap-sm">
<div>
<label className="block font-label-caps text-label-caps text-on-surface-variant mb-xs">Start (EST)</label>
<input className="w-full bg-surface-container border border-outline-variant rounded p-sm font-data-mono text-data-mono text-on-surface focus:border-primary focus:ring-1 focus:ring-primary outline-none" type="time" value="22:00" />
</div>
<div>
<label className="block font-label-caps text-label-caps text-on-surface-variant mb-xs">End (EST)</label>
<input className="w-full bg-surface-container border border-outline-variant rounded p-sm font-data-mono text-data-mono text-on-surface focus:border-primary focus:ring-1 focus:ring-primary outline-none" type="time" value="06:00" />
</div>
</div>
</div>
</div>

<div className="mt-auto pt-lg border-t border-outline-variant flex gap-sm">
<button className="flex-1 bg-surface-container border border-outline-variant text-on-surface font-label-caps text-label-caps px-md py-md rounded hover:bg-surface-container-high transition-colors">
                            DISCARD
                        </button>
<button className="flex-1 bg-primary text-background font-label-caps text-label-caps px-md py-md rounded border border-primary hover:bg-background hover:text-primary transition-colors">
                            COMMIT CHANGES
                        </button>
</div>
</div>
</div>
</main>
</div>

      </div>
    </AppShell>
  );
}
