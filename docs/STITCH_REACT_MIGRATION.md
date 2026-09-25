# Stitch -> React Migration

Every raw-HTML Stitch design is rebuilt as a **real React component**, wrapped in the
shared Alexandria app shell so all pages share one uniform theme and navigation.

## Conversion

From apps/web:

    npm run stitch:convert

This:
1. Reads every design's code.html under
   components/mockups/acquit-case-workspace/NEWSTITCH/stitch_acquit.ai_legal_operating_system/
2. Extracts each page's style blocks into a per-page CSS file
3. Converts the body markup to JSX (className, inline style objects, void tags, script removal)
4. Emits one component per design into src/components/stitch/pages/
5. Regenerates src/components/stitch/registry.ts

Routes ( / and [...slug] ) look up the registry first and fall back to the legacy
StitchPage renderer for any design not yet converted.

## Alexandria theme

- Fonts: Noto Serif (headlines), Inter (body), Public Sans (labels)
- Primary #094cb2, archival gold #6d5e00
- No-line rule: surface-tier backgrounds instead of borders
- Glassmorphic shared nav (AppShell) on every page

## Workflow

After editing designs or adding new ones, re-run stitch:convert and commit the
generated files. Generated files are committed (not gitignored) so builds do not depend
on the mockup source being present.

## Notes

- alexandria and lex_operating_system have no code.html (DESIGN.md only) and are skipped.
- The legacy StitchPage fallback remains during migration and can be removed once all
  pages are verified in React.
