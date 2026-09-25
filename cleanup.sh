#!/usr/bin/env bash
# Acquit-Platform repo cleanup — run from the repo root on a fresh branch.
# Usage:
#   git checkout -b cleanup/restructure
#   bash cleanup.sh          # phase 1+2 (deletes, then restructure)
#   bash cleanup.sh --delete-only   # phase 1 only
set -euo pipefail

BRANCH=$(git rev-parse --abbrev-ref HEAD)
if [[ "$BRANCH" == "main" || "$BRANCH" == "master" ]]; then
  echo "❌ Don't run this on $BRANCH. Create a branch first: git checkout -b cleanup/restructure"
  exit 1
fi

confirm() { read -r -p "→ $1 [y/N] " a; [[ "$a" == "y" || "$a" == "Y" ]]; }

echo "=== Phase 1: delete obsolete / duplicate / legacy files ==="

# --- Root clutter ---
rm -fv dist.tar.gz convert.js convert.cjs \
       commandCenter.html counselDir.html \
       acquit_platform.py acquit-platform-agentic-system-architecture.py config.py \
       environment.yml metadata.json aws-config-example.ini pre-commit \
       .mcp.json skills-lock.json

# --- Legacy & duplicate trees ---
rm -rfv acquit-platform/          # old Python reimplementation
rm -rfv acquit-ai-worker/         # duplicate of acquit-platform/acquit-ai-worker
rm -rfv acquit/ cua2-core/ agent/ config/
rm -rfv .agents/ .cursor/         # 154+ files of agent-sync backups / IDE config

# --- AI-scaffold docs (keep docs/ folder itself) ---
rm -fv AGENTS.md GEMINI.md \
       AUTOMATED_PATCH_VERIFICATION_LOOP.md CAROUSEL_WANT_AUDIT.md \
       CUA-NO-SANDBOX.md CHAIN_OF_COMMAND_ARCHITECTURE.md \
       SYSTEM_ARCHITECTURE_PIPELINE.md

# --- Duplicated Stitch mockups (kept copy: apps/web/src/assets/stitch/) ---
rm -rfv "apps/web/components/mockups/acquit-case-workspace/NEWSTITCH"

# --- Unused workspace packages (verify before deleting!) ---
if grep -rq "@acquit/connectors\|@acquit/db\|@acquit/rag-engine\|@acquit/security\|@acquit/workflow" apps/ --include="*.ts" --include="*.tsx" --include="*.json"; then
  echo "⚠️  Some workspace packages are still imported — skipping their deletion."
else
  rm -rfv packages/connectors packages/db packages/rag-engine packages/security packages/workflow
fi
rm -rfv scripts/archive scripts/python

echo "✅ Phase 1 done. Committing."
git add -A
git commit -m "chore(cleanup): remove obsolete, duplicate, and legacy files"

if [[ "${1:-}" == "--delete-only" ]]; then
  echo "Done (delete-only). Review with: git show --stat HEAD"
  exit 0
fi

echo "=== Phase 2: restructure — apps/web becomes the root project ==="

# Move web app to root (use a temp dir to avoid root-name collisions)
mkdir -p .move-tmp
git mv apps/web/* .move-tmp/
# root has its own package.json/tsconfig.json — replace them with the web app's
git rm -q package.json package-lock.json tsconfig.json tsconfig.base.json
git mv .move-tmp/package.json package.json
git mv .move-tmp/tsconfig.json tsconfig.json
# move the rest of the web app's files to the root
shopt -s dotglob
for f in .move-tmp/*; do git mv "$f" "./$(basename "$f")"; done
shopt -u dotglob
rmdir .move-tmp

# API + its one real dependency move up one level
git mv apps/api api
git mv packages/database packages/database   # only workspace package actually imported (by api)
rmdir apps 2>/dev/null || rm -rf apps

# Regenerate lockfile for the new single-project layout
rm -f package-lock.json
npm install

echo "✅ Phase 2 done. Committing."
git add -A
git commit -m "refactor: dissolve monorepo — web app at root, api + database alongside"

cat <<'EOF'

Next steps (manual — scripts can't safely guess these):
  1. Update .github/workflows/ci.yml paths (apps/web → .)
  2. Update vercel.json / README.md if they reference apps/web
  3. Check apps/web predev script paths (scripts/copy-mockups.mjs is now ./scripts/)
  4. Decide fate of root Dockerfile / docker-compose.yml / wrangler.toml
  5. Push and open a PR:
       git push -u origin cleanup/restructure
EOF