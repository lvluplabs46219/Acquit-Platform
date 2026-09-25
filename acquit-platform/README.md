# acquit-platform — Python multi-agent core

Canonical location for Orchestrator, LLMRouter, TaskBot, ResearchAgent, CodeAgent, PermissionGuard, AuditLogger.

```bash
cd acquit-platform
pip install -r requirements.txt
python main.py
```

## Related paths

| Path | Notes |
|------|--------|
| `workers/acquit-ai-worker` | Cloudflare edge proxy (not nested here) |
| `apps/api` | Node Express API that can invoke this orchestrator |
| `apps/web` | Legal OS React UI |

Nested `acquit-platform/acquit-ai-worker` is **deprecated**.
Nested `acquit-platform/apps/web` is a **stub** — use monorepo `apps/web`.
