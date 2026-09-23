#!/usr/bin/env node
/**
 * Sync the 85 NEWSTITCH mockup folders into apps/web/public/assets/stitch
 * (and apps/web/public/assets) for static serving by Next.js.
 *
 * Usage: node scripts/sync-stitch-assets.mjs
 */
import { cpSync, existsSync, mkdirSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const webRoot = dirname(dirname(fileURLToPath(import.meta.url)));
const source = join(
  webRoot,
  "components/mockups/acquit-case-workspace/NEWSTITCH/stitch_acquit.ai_legal_operating_system"
);

if (!existsSync(source)) {
  console.error("NEWSTITCH folder not found:", source);
  process.exit(1);
}

for (const target of [join(webRoot, "public/assets/stitch"), join(webRoot, "public/assets")]) {
  mkdirSync(target, { recursive: true });
  cpSync(source, target, { recursive: true });
  console.log("Synced Stitch assets ->", target);
}
