-- =====================================================================
-- Agent Runtime Tables: agent_runs, clerk_alerts, research_queries
-- Phase 1 of the Stitch -> React production promotion plan.
-- =====================================================================

-- ---------------------------------------------------------------------
-- 1. agent_runs: one row per delegated agent execution
-- ---------------------------------------------------------------------
create table if not exists public.agent_task_runs (
  id uuid primary key default gen_random_uuid(),
  user_id uuid not null references public.users(id) on delete cascade,
  matter_id uuid references public.matters(id) on delete set null,
  agent_id text not null,
  task text not null,
  prompt text,
  provider text,
  model text,
  status text not null default 'running', -- running | success | error
  result jsonb,
  error text,
  tokens_used integer,
  cost double precision default 0,
  latency_ms integer,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

create index if not exists idx_agent_runs_user on public.agent_task_runs(user_id, created_at desc);
create index if not exists idx_agent_runs_matter on public.agent_task_runs(matter_id);

alter table public.agent_task_runs enable row level security;

drop policy if exists "agent_runs_select_own" on public.agent_task_runs;
create policy "agent_runs_select_own" on public.agent_task_runs
  for select using (
    user_id in (select id from public.users where auth_id = auth.uid())
  );

drop policy if exists "agent_runs_insert_own" on public.agent_task_runs;
create policy "agent_runs_insert_own" on public.agent_task_runs
  for insert with check (
    user_id in (select id from public.users where auth_id = auth.uid())
  );

drop policy if exists "agent_runs_update_own" on public.agent_task_runs;
create policy "agent_runs_update_own" on public.agent_task_runs
  for update using (
    user_id in (select id from public.users where auth_id = auth.uid())

  );

-- ---------------------------------------------------------------------
-- 2. clerk_alerts: The Clerk alert feed (docket/deadline/monitoring)
-- ---------------------------------------------------------------------
create table if not exists public.clerk_alerts (
  id uuid primary key default gen_random_uuid(),
  user_id uuid not null references public.users(id) on delete cascade,
  matter_id uuid references public.matters(id) on delete cascade,
  alert_type text not null, -- docket_entry | deadline | filing | research | system
  severity text not null default 'info', -- info | warning | critical
  title text not null,
  message text,
  source text not null default 'the_clerk',
  status text not null default 'active', -- active | acknowledged | dismissed
  metadata jsonb default '{}' not null,
  created_at timestamptz not null default now(),
  acknowledged_at timestamptz
);

create index if not exists idx_clerk_alerts_user on public.clerk_alerts(user_id, status, created_at desc);
create index if not exists idx_clerk_alerts_matter on public.clerk_alerts(matter_id);

alter table public.clerk_alerts enable row level security;

drop policy if exists "clerk_alerts_select_own" on public.clerk_alerts;
create policy "clerk_alerts_select_own" on public.clerk_alerts
  for select using (
    user_id in (select id from public.users where auth_id = auth.uid())
  );

drop policy if exists "clerk_alerts_insert_own" on public.clerk_alerts;
create policy "clerk_alerts_insert_own" on public.clerk_alerts
  for insert with check (
    user_id in (select id from public.users where auth_id = auth.uid())
  );

drop policy if exists "clerk_alerts_update_own" on public.clerk_alerts;
create policy "clerk_alerts_update_own" on public.clerk_alerts
  for update using (
    user_id in (select id from public.users where auth_id = auth.uid())
  );

drop policy if exists "clerk_alerts_delete_own" on public.clerk_alerts;
create policy "clerk_alerts_delete_own" on public.clerk_alerts
  for de
lete using (
    user_id in (select id from public.users where auth_id = auth.uid())
  );

-- ---------------------------------------------------------------------
-- 3. research_queries: Active Research screen + CourtListener pulls
-- ---------------------------------------------------------------------
create table if not exists public.research_queries (
  id uuid primary key default gen_random_uuid(),
  user_id uuid not null references public.users(id) on delete cascade,
  matter_id uuid references public.matters(id) on delete set null,
  query text not null,
  depth text not null default 'comprehensive',
  status text not null default 'pending', -- pending | running | complete | error
  results jsonb,
  courtlistener_docket text,
  error text,
  created_at timestamptz not null default now(),
  completed_at timestamptz
);

create index if not exists idx_research_queries_user on public.research_queries(user_id, created_at desc);
create index if not exists idx_research_queries_matter on public.research_queries(matter_id);

alter table public.research_queries enable row level security;

drop policy if exists "research_queries_select_own" on public.research_queries;
create policy "research_queries_select_own" on public.research_queries
  for select using (
    user_id in (select id from public.users where auth_id = auth.uid())
  );

drop policy if exists "research_queries_insert_own" on public.research_queries;
create policy "research_queries_insert_own" on public.research_queries
  for insert with check (
    user_id in (select id from public.users where auth_id = auth.uid())
  );

drop policy if exists "research_queries_update_own" on public.research_queries;
create policy "research_queries_update_own" on public.research_queries
  for update using (
    user_id in (select id from public.users where auth_id = auth.uid())
  );
