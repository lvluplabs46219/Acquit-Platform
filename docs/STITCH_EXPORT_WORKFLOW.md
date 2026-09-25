# Stitch Export Workflow

This is the workflow for getting **all** Stitch screens out of Google Stitch and
into the repo, so they can be promoted to real React pages.

## 1. Export from Stitch

For each screen in the Stitch project (`acquit.ai_legal_operating_system`):

1. Open the screen in [Stitch](https://stitch.withgoogle.com).
2. Use **Export** and choose **HTML/CSS**.
3. Save the export into this folder, one directory per screen:

```
apps/web/components/mockups/acquit-case-workspace/NEWSTITCH/stitch_acquit.ai_legal_operating_system/
  <screen-name>/
    index.html      (or the exported html file)
    screen.png      (the Stitch thumbnail export)
```

Screen name rules: lowercase, hyphens, no spaces (e.g. `rights-audit`,
`docket-entries`, `conference-room`).

## 2. Copy into the web app

```bash
cd apps/web
npm run mockups:copy
```

This runs automatically on `npm run dev` / `npm run build`. It copies every
screen into:

- `public/mockups/<name>/index.html` — previewable at `/mockups/<name>`
- `public/assets/stitch/<name>/code.html` — consumed by the Stitch gallery

## 3. Promotion to real pages (stitch-to-react branch)

Once a screen exists as a mockup, it gets promoted on the `stitch-to-react`
branch:

1. A real route is created under `/app/*` with session auth.
2. The mockup JSX is kept; mock data is replaced with Supabase queries.
3. Buttons are wired to real mutations (open matter, file a record, log an
   event, run agent via `POST /agent-runs`).
4. Stitch itself stays as the design reference gallery at `/mockups` — it is
   never the runtime UI.

Promotion order (agreed):
1. Command Center, Docket Entries, Conference Room, Evidence Locker,
   Filing Table, Chronology, Counsel Listings
2. New screens: Rights Audit, Active Research
3. Remaining screens in batches of 8-10
