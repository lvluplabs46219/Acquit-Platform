#!/usr/bin/env bash
# Idempotent purge of Stitch design uploads after Legal OS React promotion.
# Run from apps/web OR repo root.
set -euo pipefail

ROOT="$(cd "$(dirname "$0")/.." && pwd)"
REPO="$(cd "$ROOT/../.." && pwd 2>/dev/null || cd "$ROOT/.." && pwd)"

# Prefer monorepo root if this is apps/web
if [[ -d "$ROOT/../../.git" ]]; then
  REPO="$(cd "$ROOT/../.." && pwd)"
elif [[ -d "$ROOT/../.git" ]]; then
  REPO="$(cd "$ROOT/.." && pwd)"
fi

WEB="$REPO/apps/web"
if [[ ! -d "$WEB" ]]; then
  WEB="$ROOT"
fi

echo "[purge-stitch] web root: $WEB"

TARGETS=(
  "$WEB/components/mockups/acquit-case-workspace/NEWSTITCH"
  "$WEB/src/assets/stitch"
  "$WEB/public/assets/stitch"
  "$WEB/public/mockups"
  "$WEB/public/assets"
)

for t in "${TARGETS[@]}"; do
  if [[ -e "$t" ]]; then
    echo "[purge-stitch] removing $t"
    rm -rf "$t"
  else
    echo "[purge-stitch] skip (missing) $t"
  fi
done

# Optional: remove dual StitchGallery paths under src if only design leftover
if [[ -d "$WEB/src/components/mockups/acquit-case-workspace" ]]; then
  echo "[purge-stitch] React mockup components under src/components/mockups kept (EvidenceCarousel etc.)."
fi

echo "[purge-stitch] done. Commit with:"
echo "  git add -A apps/web"
echo "  git commit -m 'chore: purge Stitch HTML uploads; Legal OS is React'"
