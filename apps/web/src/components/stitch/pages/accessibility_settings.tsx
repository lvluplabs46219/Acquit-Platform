// AUTO-GENERATED from accessibility_settings/code.html by scripts/convert-stitch-to-react.mjs -- do not edit.
import AppShell from "@/components/alexandria/AppShell";
import "./accessibility_settings.css";

export default function AccessibilitySettings() {
  return (
    <AppShell pageName="accessibility_settings">
      <div className="stitch-page">


<div className="flex h-screen overflow-hidden">


<main className="flex-1 overflow-y-auto w-full flex justify-center p-gutter md:p-margin-safe bg-background">
<div className="w-full max-w-4xl max-w-[1200px] flex flex-col gap-lg md:gap-xl">

<header className="flex items-center justify-between border-b border-outline-variant pb-md">
<div className="flex items-center gap-sm">
<button className="text-primary hover:bg-surface-container-high p-sm rounded transition-colors duration-150 flex items-center justify-center">
<span aria-hidden="true" className="material-symbols-outlined">arrow_back</span>
</button>
<div>
<h1 className="font-headline-lg text-headline-lg-mobile md:text-headline-lg text-on-surface">Accessibility</h1>
<p className="font-body-md text-body-md text-on-surface-variant mt-1">Configure visual and interaction preferences for Acquit.ai.</p>
</div>
</div>
<div>
<button className="bg-primary text-background font-label-caps text-label-caps px-lg py-sm rounded hover:bg-primary-fixed-dim transition-colors border border-primary">
                            SAVE PREFERENCES
                        </button>
</div>
</header>

<div className="grid grid-cols-1 lg:grid-cols-12 gap-lg h-full pb-xl">

<div className="lg:col-span-7 flex flex-col gap-md">

<section className="bg-surface-container-low border border-outline-variant p-lg rounded flex flex-col gap-lg">
<h2 className="font-headline-md text-headline-md text-primary flex items-center gap-sm border-b border-outline-variant pb-sm">
<span className="material-symbols-outlined">visibility</span> Visual
                            </h2>

<div className="flex flex-col gap-sm">
<div className="flex justify-between items-center">
<label className="font-body-lg text-body-lg text-on-surface">Font Scaling</label>
<span className="font-data-mono text-data-mono text-primary">100%</span>
</div>
<p className="font-body-md text-body-md text-on-surface-variant mb-2">Adjust the base text size across the application.</p>
<input className="w-full h-2 bg-surface-variant rounded-lg appearance-none cursor-pointer accent-primary" max="150" min="80" type="range" value="100" />
<div className="flex justify-between mt-1 text-on-surface-variant font-data-mono text-[10px]">
<span>A</span>
<span className="text-sm">A</span>
<span className="text-base">A</span>
<span className="text-lg">A</span>
</div>
</div>
<hr className="border-outline-variant" />

<div className="flex items-start justify-between gap-md">
<div>
<h3 className="font-body-lg text-body-lg text-on-surface">High Contrast Mode</h3>
<p className="font-body-md text-body-md text-on-surface-variant mt-1">Increases contrast between text and backgrounds to improve readability.</p>
</div>
<div className="relative inline-block w-12 mr-2 align-middle select-none transition duration-200 ease-in mt-1">
<input className="toggle-checkbox absolute block w-6 h-6 rounded-full bg-surface-container border-4 border-outline-variant appearance-none cursor-pointer transition-transform duration-200 ease-in-out z-10 checked:translate-x-full checked:border-primary" id="toggle_contrast" name="toggle_contrast" type="checkbox" />
<label className="toggle-label block overflow-hidden h-6 rounded-full bg-surface-variant cursor-pointer border border-outline-variant" htmlFor="toggle_contrast"></label>
</div>
</div>
</section>

<section className="bg-surface-container-low border border-outline-variant p-lg rounded flex flex-col gap-lg">
<h2 className="font-headline-md text-headline-md text-primary flex items-center gap-sm border-b border-outline-variant pb-sm">
<span className="material-symbols-outlined">touch_app</span> Interaction
                            </h2>

<div className="flex items-start justify-between gap-md">
<div>
<h3 className="font-body-lg text-body-lg text-on-surface">Motion Reduction</h3>
<p className="font-body-md text-body-md text-on-surface-variant mt-1">Disables non-essential animations and transitions.</p>
</div>
<div className="relative inline-block w-12 mr-2 align-middle select-none transition duration-200 ease-in mt-1">
<input checked="" className="toggle-checkbox absolute block w-6 h-6 rounded-full bg-primary border-4 border-primary appearance-none cursor-pointer transition-transform duration-200 ease-in-out z-10 translate-x-full" id="toggle_motion" name="toggle_motion" type="checkbox" />
<label className="toggle-label block overflow-hidden h-6 rounded-full bg-surface-variant cursor-pointer border border-outline-variant" htmlFor="toggle_motion"></label>
</div>
</div>
<hr className="border-outline-variant" />

<div className="flex items-start justify-between gap-md">
<div>
<h3 className="font-body-lg text-body-lg text-on-surface">Screen Reader Optimization</h3>
<p className="font-body-md text-body-md text-on-surface-variant mt-1">Enables verbose ARIA labels and optimizes focus management for assistive technologies.</p>
</div>
<div className="relative inline-block w-12 mr-2 align-middle select-none transition duration-200 ease-in mt-1">
<input className="toggle-checkbox absolute block w-6 h-6 rounded-full bg-surface-container border-4 border-outline-variant appearance-none cursor-pointer transition-transform duration-200 ease-in-out z-10 checked:translate-x-full checked:border-primary" id="toggle_sr" name="toggle_sr" type="checkbox" />
<label className="toggle-label block overflow-hidden h-6 rounded-full bg-surface-variant cursor-pointer border border-outline-variant" htmlFor="toggle_sr"></label>
</div>
</div>
</section>
</div>

<div className="lg:col-span-5 h-full">
<aside className="sticky top-gutter border border-outline-variant bg-surface-container rounded flex flex-col h-full min-h-[400px]">
<div className="bg-surface-container-highest px-md py-sm border-b border-outline-variant flex items-center gap-sm rounded-t">
<span className="material-symbols-outlined text-primary text-sm">preview</span>
<span className="font-label-caps text-label-caps text-on-surface-variant">Live Preview</span>
</div>
<div className="p-lg flex-1 bg-background m-sm border border-outline-variant rounded-sm flex flex-col gap-md" id="preview-container">

<div className="border-b border-outline-variant pb-sm">
<h4 className="font-headline-md text-headline-md text-on-surface" id="preview-heading">Motion for Summary Judgment</h4>
<div className="flex items-center gap-md mt-2">
<span className="font-data-mono text-data-mono text-primary flex items-center gap-xs"><span className="material-symbols-outlined text-xs">tag</span>2024-CV-8821</span>
<span className="font-data-mono text-data-mono text-on-surface-variant">Oct 12, 2024</span>
</div>
</div>

<p className="font-body-md text-body-md text-on-surface" id="preview-text-1">
                                    COMES NOW the Defendant, through undersigned counsel, and moves this Honorable Court for Summary Judgment pursuant to Rule 56. There exists no genuine dispute as to any material fact, and Defendant is entitled to judgment as a matter of law.
                                </p>
<div className="bg-surface-container-low p-md border-l-2 border-primary text-on-surface-variant italic font-body-md text-body-md" id="preview-quote">
                                    "The plaintiff bears the burden of establishing the elements of their claim beyond mere conjecture." (Smith v. State, 412 F.3d 104)
                                </div>

<div className="flex gap-sm mt-auto pt-md border-t border-outline-variant">
<button className="bg-primary text-background font-label-caps text-label-caps px-md py-xs rounded">Primary Action</button>
<button className="border border-outline-variant text-on-surface font-label-caps text-label-caps px-md py-xs rounded">Secondary Action</button>
</div>
</div>
</aside>
</div>
</div>
</div>
</main>
</div>

      </div>
    </AppShell>
  );
}
