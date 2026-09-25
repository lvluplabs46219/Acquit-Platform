import { Router, type Request, type Response } from "express";
import { logger } from "../lib/logger";

const router = Router();

/**
 * POST /api/v1/agents/execute — bridge to acquit-platform Python orchestrator.
 * Production: spawn or HTTP to agent service. Dev: structured mock + audit shape.
 */
router.post("/execute", async (req: Request, res: Response) => {
  const { prompt, agent_key, case_id, sensitivity } = req.body || {};

  if (!prompt || typeof prompt !== "string") {
    return res.status(400).json({ error: "prompt required" });
  }

  logger.info(
    { agent_key, case_id, sensitivity, prompt_len: prompt.length },
    "agents.execute",
  );

  const runId = `run_${Date.now()}`;

  return res.status(200).json({
    ok: true,
    run_id: runId,
    agent_key: agent_key || "research",
    case_id: case_id || null,
    sensitivity: sensitivity || "standard",
    status: "completed_mock",
    result: {
      summary:
        "Orchestrator bridge accepted the task. Wire to acquit-platform/main.py for live LLM execution.",
      notice: "Not legal advice. Notice of AI Assistance applies.",
    },
    orchestrator: "acquit-platform",
  });
});

export default router;
