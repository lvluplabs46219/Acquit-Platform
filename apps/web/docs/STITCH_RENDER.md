# Stitch UI rendering (why the app went blank)

## What broke after commit `c605784`

`/` and alias routes started rendering Stitch `code.html` via React:

```tsx
<div dangerouslySetInnerHTML={{ __html: fullHtmlDocument }} />
```

Each design is a **complete HTML document** (own `<html>`, `<head>`, Tailwind Play CDN script, fonts). Injecting that into a React tree:

1. Produces invalid nested documents
2. **Does not execute** the Tailwind CDN / config scripts reliably
3. Leaves utility classes (`bg-surface-container`, etc.) uncompiled → collapsed / blank UI

## Fix (branch `fix/stitch-iframe-render`)

`StitchPage` loads:

```text
/public/mockups/<folder>/index.html
```

inside a full-viewport **iframe**. The design runs as its own document; Tailwind CDN works as designed.

Assets are created by:

```bash
cd apps/web
npm run mockups:copy   # also runs on predev / prebuild
```

Source tree:

```text
apps/web/components/mockups/acquit-case-workspace/NEWSTITCH/stitch_acquit.ai_legal_operating_system/<folder>/code.html
```

## Longer-term path

Branch `stitch-to-react` converts designs to real React + Tailwind v4 tokens (no iframe). Use that when you want AppShell / shared nav without iframes. Until then, **iframe is the correct production path for fidelity**.

## Quick recovery

```bash
cd ~/Development/Repos/Aquit-Platform
git fetch origin
git checkout fix/stitch-iframe-render   # or merge to main
cd apps/web
npm run mockups:copy
npm run dev
# open http://localhost:3000  (hard refresh Ctrl+Shift+R)
```
