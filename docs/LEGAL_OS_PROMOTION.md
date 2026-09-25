# Legal OS Promotion Matrix

**Goal:** Stitch = design reference / gallery. Runtime UI = React + Supabase + API.

## Folder layout (post-merge)

| Path | Role |
|------|------|
| `workers/acquit-ai-worker/` | **Canonical** Cloudflare Worker (API proxy) |
| `acquit-platform/` | **Canonical** Python multi-agent core (Orchestrator, LLMRouter, agents) |
| `apps/web/` | Legal OS React runtime |
| `apps/api/` | Express API (matters, documents, agents, courtlistener) |
| `acquit-ai-worker/` (repo root) | **Deprecated** — use `workers/acquit-ai-worker` |
| `acquit-platform/acquit-ai-worker/` | **Deprecated nested copy** — do not deploy |

## MUST screens → React status

| Screen | Route | Component | Data |
|--------|-------|-----------|------|
| Command Center | `/` `/command-center` | `os/CommandCenterPage` | cases, agent_runs |
| Docket Entries | `/docket` | `os/DocketEntriesPage` | cases / matters |
| Conference Room | `/chambers` | `os/ConferenceRoomPage` | agents, agent_runs |
| Evidence Locker | `/investigations` | `os/EvidenceLockerPage` | document_nodes / filings |
| Filing Table | `/record-room` | `os/FilingTablePage` | filings |
| Chronology | `/timeline` | `os/ChronologyPage` | timeline / case events |
| Counsel Listings | `/counsel` | `os/CounselListingsPage` | directory API |
| Rights Audit | `/chambers?sub=rights_audit` | `os/RightsAuditPage` | agent_runs |
| Active Research | `/investigations?tab=research` | `os/ActiveResearchPage` | authorities |

## Mutations (API)

| Action | Endpoint |
|--------|----------|
| Open a Matter | `POST /api/matters` |
| File a Record | `POST /api/documents` |
| Log Event | `POST /api/os/timeline-events` |
| Run Agent | `POST /api/v1/agents/execute` |
| Clerk alert ack | `POST /api/os/clerk/ack` |

## Stitch remains

- `/gallery`, `/stitch/:mockupName` — design reference only
- Top nav categories point to **React OS** pages, not Stitch HTML
