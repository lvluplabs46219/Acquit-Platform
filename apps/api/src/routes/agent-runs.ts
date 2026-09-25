import { Router, type Response } from "express";
import { desc, eq } from "drizzle-orm";
import { db } from "@workspace/db";
import { agentTaskRunsTable } from "@workspace/db/agent-runtime";
import { AuthenticatedRequest, verifySession } from "../middleware/verifySession";

export const agentRunsRouter = Router();
agentRunsRouter.use(verifySession);

const AGENT_LAYER_URL = process.env.AGENT_LAYER_URL || "http://localhost:8000";
const AGENT_LAYER_SECRET = process.env.AGENT_LAYER_SECRET || "";

/**
 * Calls the Python agent layer (acquit-platform/server.py).
 * Returns null when the layer is unreachable so we can record the failure.
 */
async function callAgentLayer(payload: Record<string, unknown>): Promise<Record<string, any> | null> {
  try {
    const res = await fetch(AGENT_LAYER_URL + "/run", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        ...(AGENT_LAYER_SECRET ? { "x-agent-secret": AGENT_LAYER_SECRET } : {}),
      },
      body: JSON.stringify(payload),
      signal: AbortSignal.timeout(120_000),
    });
    if (!res.ok) return null;
    return await res.json();
  } catch {
    return null;
  }
}

// GET /agent-task-runs — latest runs for the user (optionally filtered by matter)
agentRunsRouter.get("/agent-task-runs", async (req: AuthenticatedRequest, res: Response) => {
  try {
    const user = req.user;
    if (!user?.id) return res.status(401).json({ success: false, error: "Unauthorized" });

    const matterId = (req.query.matterId as string) || null;
    const rows = await db
      .select()
      .from(agentTaskRunsTable)
      .where(eq(agentTaskRunsTable.userId, user.id))
      .orderBy(desc(agentTaskRunsTable.createdAt))
      .limit(50);
    const filtered = matterId ? rows.filter((r: any) => r.matterId === matterId) : rows;
    return res.json({ success: true, runs: filtered });
  } catch (err: any) {
    return res.status(500).json({ success: false, error: err?.message ?? "Failed to list agent runs" });
  }
});

// POST /agent-
runs — run an agent through the Python layer and persist the run
agentRunsRouter.post("/agent-task-runs", async (req: AuthenticatedRequest, res: Response) => {
  try {
    const user = req.user;
    if (!user?.id) return res.status(401).json({ success: false, error: "Unauthorized" });

    const { agentId, task, matterId, context, sensitivity } = req.body ?? {};
    if (!agentId || !task) {
      return res.status(400).json({ success: false, error: "agentId and task are required" });
    }

    const inserted = await db
      .insert(agentTaskRunsTable)
      .values({
        userId: user.id,
        matterId: matterId ?? null,
        agentId,
        task,
        status: "running",
      })
      .returning();
    const run = inserted?.[0];

    const started = Date.now();
    const layerResult = await callAgentLayer({
      agent_id: agentId,
      task,
      context: context ?? {},
      sensitivity: sensitivity ?? "internal",
    });
    const latencyMs = Date.now() - started;

    if (layerResult) {
      const inner = layerResult?.result ?? layerResult;
      const updated = await db
        .update(agentTaskRunsTable)
        .set({
          status: layerResult?.status === "success" ? "success" : "error",
          result: layerResult,
          provider: inner?.provider ?? null,
          model: inner?.model ?? null,
          tokensUsed: inner?.tokens_used ?? null,
          cost: inner?.cost ?? 0,
          latencyMs,
          error: layerResult?.error ?? null,
          updatedAt: new Date(),
        })
        .where(eq(agentTaskRunsTable.id, run.id))
        .returning();
      return res.json({ success: true, run: updated?.[0] ?? run });
    }

    const failed = await db
      .update(agentTaskRunsTable)
      .set({
        status: "error",
        error: "Agent layer unreachable at " + AGENT_LAYER_URL,
        latencyMs,
        updatedAt: new Date(),
      })
      .where(eq(agentTaskRunsTable.id, run.id))
      .returning();
    return res.status(502).json({ success
: false, error: "Agent layer unreachable", run: failed?.[0] ?? run });
  } catch (err: any) {
    return res.status(500).json({ success: false, error: err?.message ?? "Agent run failed" });
  }
});
