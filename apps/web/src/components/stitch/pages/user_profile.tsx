// AUTO-GENERATED from user_profile/code.html by scripts/convert-stitch-to-react.mjs -- do not edit.
import AppShell from "@/components/alexandria/AppShell";
import "./user_profile.css";

export default function UserProfile() {
  return (
    <AppShell pageName="user_profile">
      <div className="stitch-page">


<nav className="w-[280px] h-screen fixed left-0 top-0 border-r border-outline-variant flex flex-col h-full py-md z-40 hidden md:flex bg-background dark:bg-background">
<div className="px-lg mb-xl">
<h1 className="font-headline-lg text-headline-lg font-bold text-primary tracking-tighter uppercase">Acquit.ai</h1>
<p className="font-data-mono text-data-mono text-on-surface-variant mt-xs">Senior Counsel</p>
</div>
<div className="px-lg mb-lg">
<button className="w-full bg-[#d4af37] text-background font-label-caps text-label-caps py-sm px-md flex items-center justify-center gap-sm hover:bg-[#b5952f] transition-colors">
<span className="material-symbols-outlined" data-icon="add">add</span>
                NEW FILING
            </button>
</div>
<div className="flex-1 overflow-y-auto px-md space-y-base">
<a className="flex items-center gap-md px-md py-sm text-on-surface-variant font-medium hover:text-on-surface hover:bg-surface-container-high transition-colors duration-150" href="#">
<span className="material-symbols-outlined" data-icon="dashboard">dashboard</span>
<span className="font-label-caps text-label-caps">Command Center</span>
</a>
<a className="flex items-center gap-md px-md py-sm text-on-surface-variant font-medium hover:text-on-surface hover:bg-surface-container-high transition-colors duration-150" href="#">
<span className="material-symbols-outlined" data-icon="gavel">gavel</span>
<span className="font-label-caps text-label-caps">The Docket</span>
</a>
<a className="flex items-center gap-md px-md py-sm text-on-surface-variant font-medium hover:text-on-surface hover:bg-surface-container-high transition-colors duration-150" href="#">
<span className="material-symbols-outlined" data-icon="account_balance">account_balance</span>
<span className="font-label-caps text-label-caps">Chambers</span>
</a>
<a className="flex items-center gap-md px-md py-sm text-on-surface-variant font-medium hover:text-on-surface hover:bg-surface-container-high transition-colors duration-150" href="#">
<span className="material-symbols-outlined" data-icon="library_books">library_books</span>
<span className="font-label-caps text-label-caps">Law Library</span>
</a>
<a className="flex items-center gap-md px-md py-sm text-on-surface-variant font-medium hover:text-on-surface hover:bg-surface-container-high transition-colors duration-150" href="#">
<span className="material-symbols-outlined" data-icon="folder_open">folder_open</span>
<span className="font-label-caps text-label-caps">Record Room</span>
</a>
<a className="flex items-center gap-md px-md py-sm text-on-surface-variant font-medium hover:text-on-surface hover:bg-surface-container-high transition-colors duration-150" href="#">
<span className="material-symbols-outlined" data-icon="policy">policy</span>
<span className="font-label-caps text-label-caps">Investigations</span>
</a>
<a className="flex items-center gap-md px-md py-sm text-on-surface-variant font-medium hover:text-on-surface hover:bg-surface-container-high transition-colors duration-150" href="#">
<span className="material-symbols-outlined" data-icon="timeline">timeline</span>
<span className="font-label-caps text-label-caps">Case Timeline</span>
</a>
<a className="flex items-center gap-md px-md py-sm text-on-surface-variant font-medium hover:text-on-surface hover:bg-surface-container-high transition-colors duration-150" href="#">
<span className="material-symbols-outlined" data-icon="visibility">visibility</span>
<span className="font-label-caps text-label-caps">Court Watch</span>
</a>
<a className="flex items-center gap-md px-md py-sm text-on-surface-variant font-medium hover:text-on-surface hover:bg-surface-container-high transition-colors duration-150" href="#">
<span className="material-symbols-outlined" data-icon="groups">groups</span>
<span className="font-label-caps text-label-caps">Counsel Directory</span>
</a>
<a className="flex items-center gap-md px-md py-sm text-on-surface-variant font-medium hover:text-on-surface hover:bg-surface-container-high transition-colors duration-150" href="#">
<span className="material-symbols-outlined" data-icon="assignment">assignment</span>
<span className="font-label-caps text-label-caps">Motions &amp; Tasks</span>
</a>
</div>
<div className="px-md mt-auto pt-md border-t border-outline-variant">
<a className="flex items-center gap-md px-md py-sm text-primary border-l-4 border-primary bg-secondary-container/30 font-bold transition-all duration-75" href="#">
<span className="material-symbols-outlined fill-icon" data-icon="settings">settings</span>
<span className="font-label-caps text-label-caps">Settings</span>
</a>
<a className="flex items-center gap-md px-md py-sm text-on-surface-variant font-medium hover:text-on-surface hover:bg-surface-container-high transition-colors duration-150" href="#">
<span className="material-symbols-outlined" data-icon="help">help</span>
<span className="font-label-caps text-label-caps">Support</span>
</a>
</div>
</nav>

<main className="flex-1 md:ml-[280px] flex flex-col min-h-screen">

<header className="h-16 fixed top-0 right-0 left-0 md:left-[280px] z-30 bg-surface-container-low dark:bg-surface-container-low border-b border-outline-variant flex justify-between items-center px-lg">
<div className="flex items-center gap-lg">
<div className="md:hidden">
<span className="font-headline-md text-headline-md font-black text-primary">Acquit.ai</span>
</div>
<nav className="hidden md:flex gap-lg h-full">
<a className="flex items-center h-full text-on-surface-variant hover:text-primary font-body-md text-body-md hover:bg-surface-bright dark:hover:bg-surface-bright px-sm" href="#">Case: 2024-CV-8821</a>
<a className="flex items-center h-full text-on-surface-variant hover:text-primary font-body-md text-body-md hover:bg-surface-bright dark:hover:bg-surface-bright px-sm" href="#">The Clerk</a>
</nav>
</div>
<div className="flex items-center gap-md">
<button className="text-on-surface-variant hover:text-primary p-xs rounded hover:bg-surface-bright">
<span className="material-symbols-outlined" data-icon="search">search</span>
</button>
<button className="text-on-surface-variant hover:text-primary p-xs rounded hover:bg-surface-bright">
<span className="material-symbols-outlined" data-icon="history">history</span>
</button>
<button className="text-on-surface-variant hover:text-primary p-xs rounded hover:bg-surface-bright relative">
<span className="material-symbols-outlined" data-icon="notifications">notifications</span>
<span className="absolute top-1 right-1 w-2 h-2 bg-error rounded-full border border-surface-container-low"></span>
</button>
<button className="hidden sm:block border border-primary text-primary px-sm py-xs font-data-mono text-data-mono hover:bg-primary/10 transition-colors ml-sm">
                    AFFIX SIGNATURE
                </button>
<div className="w-8 h-8 rounded-full border border-outline ml-sm overflow-hidden bg-surface-container-highest cursor-pointer">
<img alt="Counsel Avatar" className="w-full h-full object-cover" data-alt="A detailed headshot portrait of a professional corporate lawyer in a sharp dark suit against a dark grey institutional background. High-contrast, cinematic lighting emphasizing authority and intelligence. Modern corporate legal aesthetic." src="https://lh3.googleusercontent.com/aida-public/AB6AXuAeFGo457q5hHDUzVVKAxi8B1nrjirSaiC0hj8tRMtfBEZok2jW4n5D3roWyzzslmxqEehqapDNSeTGe-a83e7sF9iCib3OpqXd7GWHq0PZ48VrL_9zKr2KXpmIm_3PBQnDZ0pllpuj-4jRcUyXIrRqWhPA2gjvQHwVlcljFL30Z5Hg68HmytWlhd1VRhedtdpQxAr9jS9MJvago7Z2vnpps6IyzgnHneq6iTBzX8FmKGHXelVSj571rQ" />
</div>
</div>
</header>

<div className="flex-1 mt-16 p-margin-safe lg:p-xl grid grid-cols-1 xl:grid-cols-12 gap-lg overflow-y-auto">
<div className="xl:col-span-8 flex flex-col gap-lg">

<div>
<h2 className="font-display-case text-display-case text-primary mb-xs">Counsel Profile</h2>
<p className="font-data-mono text-data-mono text-on-surface-variant">Administrative controls and identity verification for the primary account holder.</p>
</div>

<div className="border border-[#2C3E50] bg-surface-container relative">
<div className="absolute top-0 left-0 w-1 h-full bg-[#d4af37]"></div>
<div className="bg-[#1a202c] p-sm border-b border-[#2C3E50] flex items-center justify-between">
<span className="font-label-caps text-label-caps text-primary tracking-widest">VERIFIED IDENTITY</span>
<div className="flex items-center gap-xs text-[#28a745]">
<span className="material-symbols-outlined text-[16px] fill-icon" data-icon="verified">verified</span>
<span className="font-data-mono text-data-mono text-[12px]">CLEARED</span>
</div>
</div>
<div className="p-lg flex flex-col sm:flex-row gap-lg items-start">
<div className="flex flex-col items-center gap-md">
<div className="w-32 h-32 border-2 border-outline-variant bg-surface-container-lowest relative group cursor-pointer">
<img alt="Profile Photo" className="w-full h-full object-cover" data-alt="A detailed headshot portrait of a professional corporate lawyer in a sharp dark suit against a dark grey institutional background. High-contrast, cinematic lighting emphasizing authority and intelligence. Modern corporate legal aesthetic." src="https://lh3.googleusercontent.com/aida-public/AB6AXuBH703ii1X35hU8kB1zp1c8AqJL7cBALRlk5ZkTSCkT8i3nSOZOFSiLNv76jjkggMSnjtDu9-bQXzreRE32CVKbNVf9BGWHtlIwql07eHFnNhpqvlHRV6pw1ODYvk7TJ-9RGTITjLbbJeZsN0Df5eSJp9fqSMza9prnPz4v5GO4aIVl9roJYEKpPEmxwL2jQhgTUBXEEFyzEw0GsC6SZVukPMpw93Zjklrm9YrQKVY8gSCZojBqepum5w" />
<div className="absolute inset-0 bg-background/80 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
<span className="material-symbols-outlined text-primary" data-icon="photo_camera">photo_camera</span>
</div>
</div>
<button className="font-data-mono text-data-mono text-xs text-on-surface-variant hover:text-primary border-b border-dashed border-outline-variant pb-xs">UPDATE PHOTO</button>
</div>
<div className="flex-1 grid grid-cols-1 sm:grid-cols-2 gap-x-lg gap-y-md w-full">
<div className="flex flex-col">
<label className="font-label-caps text-label-caps text-on-surface-variant mb-xs">FULL LEGAL NAME</label>
<input className="bg-transparent border-b border-outline-variant focus:border-primary focus:ring-0 px-0 py-xs font-data-mono text-data-mono text-primary w-full" readOnly="" type="text" value="Arthur H. Pendelton, Esq." />
</div>
<div className="flex flex-col">
<label className="font-label-caps text-label-caps text-on-surface-variant mb-xs">DESIGNATION</label>
<div className="flex items-center gap-sm mt-xs">
<span className="px-sm py-[2px] border border-[#d4af37] text-[#d4af37] font-data-mono text-[12px]">LEAD COUNSEL</span>
</div>
</div>
<div className="flex flex-col sm:col-span-2">
<label className="font-label-caps text-label-caps text-on-surface-variant mb-xs">PRIMARY EMAIL (MATTER CONTACT)</label>
<input className="bg-transparent border-b border-outline-variant focus:border-primary focus:ring-0 px-0 py-xs font-data-mono text-data-mono text-primary w-full" type="email" value="a.pendelton@acquit.ai" />
</div>
<div className="flex flex-col">
<label className="font-label-caps text-label-caps text-on-surface-variant mb-xs">DIRECT LINE</label>
<input className="bg-transparent border-b border-outline-variant focus:border-primary focus:ring-0 px-0 py-xs font-data-mono text-data-mono text-primary w-full" type="tel" value="+1 (555) 019-8233" />
</div>
</div>
</div>
</div>

<div className="border border-[#2C3E50] bg-surface-container">
<div className="bg-surface-container-high p-sm border-b border-[#2C3E50]">
<span className="font-label-caps text-label-caps text-primary tracking-widest">JURISDICTION &amp; LICENSING</span>
</div>
<div className="p-0">

<div className="flex items-center justify-between p-md border-b border-[#2C3E50] hover:bg-surface-container-highest transition-colors">
<div className="flex items-center gap-md">
<span className="material-symbols-outlined text-on-surface-variant" data-icon="account_balance">account_balance</span>
<div>
<p className="font-headline-md text-[16px] text-primary">New York State Bar</p>
<p className="font-data-mono text-[12px] text-on-surface-variant mt-xs">Admitted: Oct 2005</p>
</div>
</div>
<div className="flex flex-col items-end">
<span className="font-data-mono text-data-mono text-primary">#4829104</span>
<span className="flex items-center gap-xs text-[#28a745] mt-xs">
<span className="w-2 h-2 rounded-full bg-[#28a745]"></span>
<span className="font-label-caps text-[10px]">ACTIVE GOOD STANDING</span>
</span>
</div>
</div>
<div className="flex items-center justify-between p-md border-b border-[#2C3E50] hover:bg-surface-container-highest transition-colors">
<div className="flex items-center gap-md">
<span className="material-symbols-outlined text-on-surface-variant" data-icon="gavel">gavel</span>
<div>
<p className="font-headline-md text-[16px] text-primary">SDNY Federal Court</p>
<p className="font-data-mono text-[12px] text-on-surface-variant mt-xs">Admitted: Jan 2008</p>
</div>
</div>
<div className="flex flex-col items-end">
<span className="font-data-mono text-data-mono text-primary">#SDNY-882</span>
<span className="flex items-center gap-xs text-[#28a745] mt-xs">
<span className="w-2 h-2 rounded-full bg-[#28a745]"></span>
<span className="font-label-caps text-[10px]">ACTIVE</span>
</span>
</div>
</div>
<div className="p-sm flex justify-center bg-surface-container-lowest">
<button className="font-data-mono text-[12px] text-on-surface-variant hover:text-primary flex items-center gap-xs">
<span className="material-symbols-outlined text-[16px]" data-icon="add">add</span> ADD JURISDICTION
                            </button>
</div>
</div>
</div>
</div>

<div className="xl:col-span-4 flex flex-col gap-lg">

<div className="border border-[#2C3E50] bg-surface-container">
<div className="bg-[#1a202c] p-sm border-b border-[#2C3E50] flex justify-between items-center">
<span className="font-label-caps text-label-caps text-primary tracking-widest">LEGAL OS TIER</span>
<span className="material-symbols-outlined text-on-surface-variant text-[16px]" data-icon="info">info</span>
</div>
<div className="p-lg">
<div className="flex items-start justify-between mb-md">
<div>
<h3 className="font-headline-md text-headline-md text-primary">Enterprise War Room</h3>
<p className="font-data-mono text-[12px] text-on-surface-variant mt-xs">Billed Annually</p>
</div>
<div className="w-10 h-10 rounded-full border border-[#d4af37] flex items-center justify-center bg-[#d4af37]/10">
<span className="material-symbols-outlined text-[#d4af37]" data-icon="workspace_premium">workspace_premium</span>
</div>
</div>
<div className="space-y-sm mt-lg">
<div className="flex justify-between items-center text-sm">
<span className="font-data-mono text-[12px] text-on-surface-variant">Storage Utilized</span>
<span className="font-data-mono text-[12px] text-primary">48.2 GB / 100 GB</span>
</div>
<div className="w-full h-1 bg-surface-container-highest">
<div className="h-full bg-primary w-[48%]"></div>
</div>
</div>
<div className="space-y-sm mt-lg">
<div className="flex justify-between items-center text-sm">
<span className="font-data-mono text-[12px] text-on-surface-variant">Active Seats</span>
<span className="font-data-mono text-[12px] text-primary">12 / 15</span>
</div>
<div className="w-full h-1 bg-surface-container-highest">
<div className="h-full bg-primary w-[80%]"></div>
</div>
</div>
<div className="mt-xl flex flex-col gap-sm">
<button className="w-full border border-primary text-primary font-data-mono text-data-mono py-sm hover:bg-primary/10 transition-colors">
                                MANAGE BILLING
                            </button>
<button className="w-full bg-[#2C3E50] text-primary font-data-mono text-data-mono py-sm hover:bg-[#36485b] transition-colors">
                                UPGRADE TIER
                            </button>
</div>
</div>
</div>

<div className="border border-[#2C3E50] bg-surface-container">
<div className="bg-surface-container-high p-sm border-b border-[#2C3E50]">
<span className="font-label-caps text-label-caps text-primary tracking-widest">RECENT ACCESS LOG</span>
</div>
<div className="p-sm flex flex-col gap-xs">
<div className="flex justify-between items-start border-b border-outline-variant/30 pb-xs">
<div className="flex flex-col">
<span className="font-data-mono text-[12px] text-primary">192.168.1.104 (NY Office)</span>
<span className="font-data-mono text-[10px] text-on-surface-variant">Session Authorized</span>
</div>
<span className="font-data-mono text-[10px] text-on-surface-variant">08:14 EST</span>
</div>
<div className="flex justify-between items-start border-b border-outline-variant/30 pb-xs">
<div className="flex flex-col">
<span className="font-data-mono text-[12px] text-primary">Mobile App (iOS)</span>
<span className="font-data-mono text-[10px] text-on-surface-variant">2FA Verified</span>
</div>
<span className="font-data-mono text-[10px] text-on-surface-variant">Yesterday</span>
</div>
<a className="font-data-mono text-[10px] text-primary hover:underline text-center mt-xs block" href="#">VIEW FULL AUDIT LOG</a>
</div>
</div>
</div>
</div>
</main>

      </div>
    </AppShell>
  );
}
