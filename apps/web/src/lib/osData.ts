/**
 * Legal OS data plane — Supabase-backed reads + API mutations.
 * Tables: cases, matters, filings, document_nodes, agents, agent_runs, audit_logs.
 */

import { getSupabaseClient } from "./supabaseClient";

const API_BASE =
  (typeof import.meta !== "undefined" && (import.meta as any).env?.VITE_API_URL) ||
  (typeof process !== "undefined" && process.env?.NEXT_PUBLIC_API_URL) ||
  "/api";

export type CaseRow = {
  id: string;
  title?: string | null;
  case_number?: string | null;
  status?: string | null;
  court?: string | null;
  user_id?: string | null;
  matter_id?: string | null;
  created_at?: string | null;
  updated_at?: string | null;
  [key: string]: unknown;
};

export type AgentRunRow = {
  id: string;
  agent_id?: string | null;
  status?: string | null;
  created_at?: string | null;
  [key: string]: unknown;
};

export type FilingRow = {
  id: string;
  title?: string | null;
  filing_type?: string | null;
  status?: string | null;
  created_at?: string | null;
  [key: string]: unknown;
};

async function apiJson<T>(path: string, init?: RequestInit): Promise<T> {
  const res = await fetch(`${API_BASE}${path}`, {
    ...init,
    headers: {
      "Content-Type": "application/json",
      ...(init?.headers || {}),
    },
  });
  if (!res.ok) {
    const text = await res.text().catch(() => "");
    throw new Error(text || `API ${res.status}`);
  }
  return res.json() as Promise<T>;
}

export const osData = {
  async listCases(limit = 50): Promise<CaseRow[]> {
    const client = getSupabaseClient();
    const { data, error } = await client
      .from("cases")
      .select("*")
      .order("updated_at", { ascending: false })
      .limit(limit);
    if (error) {
      console.warn("[osData] listCases", error.message);
      return [];
    }
    return (data as CaseRow[]) || [];
  },

  async listAgentRuns(limit = 20): Promise<AgentRunRow[]> {
    const client = getSupabaseClient();
    const { data, error } = await client
      .from("agent_runs")
      .select("*")
      .order("created_at", { ascending: false })
      .limit(limit);
    if (error) {
      console.warn("[osData] listAgentRuns", error.message);
      return [];
    }
    return (data as AgentRunRow[]) || [];
  },

  async listFilings(limit = 50): Promise<FilingRow[]> {
    const client = getSupabaseClient();
    const { data, error } = await client
      .from("filings")
      .select("*")
      .order("created_at", { ascending: false })
      .limit(limit);
    if (error) {
      console.warn("[osData] listFilings", error.message);
      return [];
    }
    return (data as FilingRow[]) || [];
  },

  async listDocumentNodes(limit = 50) {
    const client = getSupabaseClient();
    const { data, error } = await client
      .from("document_nodes")
      .select("*")
      .order("created_at", { ascending: false })
      .limit(limit);
    if (error) {
      console.warn("[osData] listDocumentNodes", error.message);
      return [];
    }
    return data || [];
  },

  async listAgents() {
    const client = getSupabaseClient();
    const { data, error } = await client.from("agents").select("*").limit(50);
    if (error) {
      console.warn("[osData] listAgents", error.message);
      return [];
    }
    return data || [];
  },

  /** Open a Matter — API mutation */
  async openMatter(body: {
    title: string;
    case_number?: string;
    court?: string;
    jurisdiction?: string;
  }) {
    return apiJson("/matters", {
      method: "POST",
      body: JSON.stringify(body),
    });
  },

  /** File a Record — API mutation */
  async fileRecord(body: {
    title: string;
    filing_type?: string;
    case_id?: string;
    content?: string;
  }) {
    return apiJson("/documents", {
      method: "POST",
      body: JSON.stringify(body),
    });
  },

  /** Log Event — OS timeline */
  async logEvent(body: {
    case_id?: string;
    matter_id?: string;
    event_type: string;
    title: string;
    event_date?: string;
    notes?: string;
  }) {
    return apiJson("/os/timeline-events", {
      method: "POST",
      body: JSON.stringify(body),
    });
  },

  /** Run agent via orchestrator bridge */
  async runAgent(body: {
    agent_key?: string;
    prompt: string;
    case_id?: string;
    sensitivity?: string;
  }) {
    return apiJson("/v1/agents/execute", {
      method: "POST",
      body: JSON.stringify(body),
    });
  },
};
