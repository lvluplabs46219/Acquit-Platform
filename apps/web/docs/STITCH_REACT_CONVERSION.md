# Stitch → React conversion

## Goal

Turn all 85 Stitch `code.html` designs into real React components under
`src/components/stitch/pages/`, registered in `registry.ts`, with design
tokens in `tokens.css`. Routes prefer React; iframe is only a fallback.

## One-time (or after any Stitch HTML change)

```bash
cd ~/Development/Repos/Aquit-Platform
git fetch origin
git checkout stitch-to-react
git pull origin stitch-to-react

cd apps/web
npm install
npm run stitch:convert
# Expect: Converted 85 pages… Registered N global design tokens…

git add src/components/stitch/
git status   # should show ~85 .tsx + ~85 .css + registry.ts + tokens.css
git commit -m "feat(web): generate 85 Stitch React pages + design tokens"
git push origin stitch-to-react
```

## Dev

```bash
cd apps/web
npm run dev
# http://localhost:3000 — AppShell + React page for command_center_home
# /docket, /chambers, /law-library, … via ROUTE_ALIASES + registry
```

If a page is missing from the registry, the route falls back to the iframe
at `/mockups/<folder>/index.html` (`npm run mockups:copy`).

## What the converter does

1. Reads each folder under `components/mockups/.../stitch_acquit.ai_legal_operating_system/`
2. Parses `tailwind-config` script → page-scoped CSS variables
3. Converts body HTML → JSX (`class` → `className`, etc.)
4. Wraps with `AppShell` (Alexandria nav)
5. Writes `pages/<folder>.tsx` + `.css` and rebuilds `registry.ts` + `tokens.css`

## Do not hand-edit generated files

Regenerate with `npm run stitch:convert` after design HTML updates.
