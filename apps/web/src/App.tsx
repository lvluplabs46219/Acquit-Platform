import { useEffect, useState, type ComponentType } from "react";
import { modules as discoveredModules } from "./.generated/mockup-components";

type ModuleMap = Record<string, () => Promise<Record<string, unknown>>>;

type RouteDefinition = {
  path: string;
  label: string;
  componentPath: string;
};

const ROUTES: RouteDefinition[] = [
  { path: "/case-workspace", label: "Case Workspace", componentPath: "acquit-case-workspace/CaseWorkspace" },
  { path: "/ai-lab", label: "AI Lab", componentPath: "acquit-case-workspace/AILab" },
  { path: "/timeline", label: "Timeline", componentPath: "acquit-case-workspace/CaseTimeline" },
  { path: "/law-library", label: "Law Library", componentPath: "acquit-case-workspace/LawLibraryExplorer" },
  { path: "/filing-center", label: "Filing Center", componentPath: "acquit-case-workspace/FilingCenter" },
  { path: "/attorney-directory", label: "Attorney Directory", componentPath: "acquit-case-workspace/AttorneyDirectory" },
  { path: "/academy", label: "Acquit Academy", componentPath: "acquit-case-workspace/AcquitAcademy" },
  { path: "/document-vault", label: "Document Vault", componentPath: "acquit-case-workspace/SovereignCylinder" },
  { path: "/document-editor", label: "Document Editor", componentPath: "acquit-case-workspace/DocumentEditorVSCode" },
  { path: "/evidence", label: "Evidence", componentPath: "acquit-case-workspace/EvidenceCarousel" },
  { path: "/featured-attorneys", label: "Featured Attorneys", componentPath: "acquit-case-workspace/FeaturedAttorneysCarousel" },
  { path: "/featured-courses", label: "Featured Courses", componentPath: "acquit-case-workspace/FeaturedCoursesCarousel" },
  { path: "/google-workspace", label: "Google Workspace", componentPath: "acquit-case-workspace/GoogleWorkspaceIntegration" },
  { path: "/rag-citations", label: "RAG Citations", componentPath: "acquit-case-workspace/RagCitationViewer" },
  { path: "/gallery", label: "Mockup Gallery", componentPath: "acquit-case-workspace/StitchGallery" },
];

function getBasePath(): string {
  return import.meta.env.BASE_URL.replace(/\/$/, "");
}

function getRoutePath(): string {
  const basePath = getBasePath();
  const pathname = window.location.pathname;
  return basePath && pathname.startsWith(basePath)
    ? pathname.slice(basePath.length) || "/"
    : pathname || "/";
}

function getRoute(): RouteDefinition | undefined {
  return ROUTES.find((route) => route.path === getRoutePath());
}

function _resolveComponent(
  mod: Record<string, unknown>,
  name: string,
): ComponentType | undefined {
  const exportedFunctions = Object.values(mod).filter(
    (value) => typeof value === "function",
  ) as ComponentType[];

  return (
    (mod.default as ComponentType | undefined) ||
    (mod.Preview as ComponentType | undefined) ||
    (mod[name] as ComponentType | undefined) ||
    exportedFunctions[exportedFunctions.length - 1]
  );
}

function PreviewRenderer({
  componentPath,
  modules,
}: {
  componentPath: string;
  modules: ModuleMap;
}) {
  const [Component, setComponent] = useState<ComponentType | null>(null);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    let cancelled = false;
    setComponent(null);
    setError(null);

    async function loadComponent(): Promise<void> {
      const keys = Object.keys(modules);
      const exactMatch = keys.find(
        (key) =>
          key.includes(`/${componentPath}.tsx`) ||
          key.includes(`/${componentPath}`),
      );
      const loader = exactMatch ? modules[exactMatch] : undefined;

      if (!loader) {
        setError(`No component found for ${componentPath}`);
        return;
      }

      try {
        const mod = await loader();
        if (cancelled) return;

        const name = componentPath.split("/").pop()!;
        const component = _resolveComponent(mod, name);
        if (!component) {
          setError(`No React component export found in ${exactMatch}`);
          return;
        }

        setComponent(() => component);
      } catch (cause) {
        if (cancelled) return;
        setError(
          `Failed to load ${componentPath}: ${
            cause instanceof Error ? cause.message : String(cause)
          }`,
        );
      }
    }

    void loadComponent();
    return () => {
      cancelled = true;
    };
  }, [componentPath, modules]);

  if (error) {
    return (
      <main className="min-h-screen bg-[#0A0A0A] p-8 text-white">
        <h1 className="mb-3 text-xl font-semibold text-[#D4AF37]">Mockup Load Error</h1>
        <pre className="max-w-3xl whitespace-pre-wrap rounded-lg border border-white/10 bg-white/5 p-4 text-sm text-red-300">
          {error}
        </pre>
      </main>
    );
  }

  if (!Component) {
    return (
      <main className="flex min-h-screen items-center justify-center bg-[#0A0A0A]">
        <div className="text-center">
          <div className="mx-auto mb-4 h-8 w-8 animate-spin rounded-full border-4 border-[#174E48] border-t-[#D4AF37]" />
          <p className="font-mono text-sm tracking-widest text-[#D4AF37]">LOADING ACQUIT...</p>
        </div>
      </main>
    );
  }

  return <Component />;
}

function MockupNavigation({ activePath }: { activePath: string }) {
  const base = getBasePath();

  return (
    <nav
      aria-label="Acquit mockup navigation"
      className="fixed inset-x-0 bottom-0 z-[9999] border-t border-[#D4AF37]/20 bg-[#0A0A0A]/95 px-3 py-2 shadow-2xl backdrop-blur"
    >
      <div className="mx-auto flex max-w-7xl items-center gap-2 overflow-x-auto">
        {ROUTES.map((route) => (
          <a
            key={route.path}
            href={`${base}${route.path}`}
            aria-current={activePath === route.path ? "page" : undefined}
            className={`shrink-0 rounded-md px-3 py-1.5 text-xs font-medium transition ${
              activePath === route.path
                ? "bg-[#D4AF37] text-black shadow-[0_0_18px_rgba(212,175,55,.35)]"
                : "text-white/70 hover:bg-white/10 hover:text-white"
            }`}
          >
            {route.label}
          </a>
        ))}
      </div>
    </nav>
  );
}

function Gallery() {
  const base = getBasePath();

  return (
    <main className="min-h-screen bg-[#0A0A0A] p-6 pb-24 text-white md:p-10 md:pb-24">
      <div className="mx-auto max-w-6xl">
        <header className="mb-8">
          <p className="mb-2 font-mono text-xs tracking-[0.25em] text-[#D4AF37]">ACQUIT.AI / MOCKUP ROUTER</p>
          <h1 className="text-3xl font-semibold">Platform Screen Map</h1>
          <p className="mt-2 max-w-2xl text-white/60">
            All mockup surfaces are now addressable through stable routes. This is the visual integration layer; it does not imply AI filing or court-system automation.
          </p>
        </header>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {ROUTES.map((route) => (
            <a
              key={route.path}
              href={`${base}${route.path}`}
              className="group rounded-xl border border-white/10 bg-white/[0.03] p-5 transition hover:border-[#D4AF37]/50 hover:bg-white/[0.06]"
            >
              <div className="mb-3 flex items-center justify-between">
                <span className="text-sm font-semibold text-white">{route.label}</span>
                <span className="text-[#D4AF37] transition-transform group-hover:translate-x-1">→</span>
              </div>
              <code className="text-xs text-white/40">{route.path}</code>
            </a>
          ))}
        </div>
      </div>
    </main>
  );
}

function App() {
  const routePath = getRoutePath();
  const route = getRoute();

  if (routePath === "/gallery") {
    return <Gallery />;
  }

  const activeRoute = route ?? ROUTES[0];

  return (
    <>
      <PreviewRenderer
        componentPath={activeRoute.componentPath}
        modules={discoveredModules}
      />
      <MockupNavigation activePath={route?.path ?? ""} />
    </>
  );
}

export default App;
