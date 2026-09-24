import { Router } from "express";
import { spawn } from "node:child_process";
import path from "node:path";
import { logger } from "../lib/logger";

const router = Router();

/**
 * Resolve the acquit-platform multi-agent orchestrator directory.
 * Candidates: ACQUIT_PLATFORM_DIR env, repo root relative to apps/api.
 */
function resolvePlatformDir(): string | null {
  const candidates = [
    process.env.ACQUIT_PLATFORM_DIR,
    path.resolve(process.cwd(), "acquit-platform"),
    path.resolve(process.cwd(), "..", "..", "acquit-platform"),
  ].filter(Boolean) as string[];
  return candidates[0] ?? null;
}

interface AgentExecuteBody {
  caseId?: string;
  task?: string;
  agentType?: string;
  payload?: Record<string, unknown>;
}

/**
 * Attempt to invoke the Python multi-agent orchestrator.
 * Resolves to stdout on success, null if unavailable/failed (mock fallback).
 */
function invokeOrchestrator(args: string[], input: string, timeoutMs = 10_000): Promise<string | null> {
  return new Promise((resolve) => {
    const platformDir = resolvePlatformDir();
    if (!platformDir) return resolve(null);
    try {
      const child = spawn("python3", [path.join(platformDir, "main.py"), ...args], {
        cwd: platformDir,
        stdio: ["pipe", "pipe", "pipe"],
      });
      let stdout = "";
      let settled = false;
      const finish = (result: string | null) => {
        if (!settled) { settled = true; resolve(result); }
      };
      child.stdout.on("data", (d) => { stdout += d.toString(); });
      child.on("error", () => finish(null));
      child.on("close", (code) => finish(code === 0 ? stdout : null));
      const timer = setTimeout(() => {
        child.kill("SIGKILL");
        finish(null);
      }, timeoutMs);
      child.on("close", () => clearTimeout(timer));
      child.stdin.write(input);
      child.stdin.end();
    } catch {
      resolve(null);
    }
  });
}

router.post("/v1/agents/execute", async (req, res) => {
  const { caseId, task, agentType, payload } = (req.body ?? {}) as AgentExecuteBody;

  if (!task || typeof task !== "string") {
    return res.status(400).json({
      error: "bad_request",
      message: "'task' is required.",
    });
  }

  const requestPayload = { caseId: caseId ?? "matter-001", task, agentType: agentType ?? "auto", payload: payload ?? {} };

  try {
    const output = await invokeOrchestrator(["--task", task], JSON.stringify(requestPayload));

    if (output) {
      logger.info({ caseId: requestPayload.caseId, task }, "agents.execute: orchestrator invoked");
      return res.json({
        status: "orchestrated",
        source: "acquit-platform",
        caseId: requestPayload.caseId,
        task,
        output: output.trim(),
      });
    }

    // Mock fallback when the Python orchestrator is unavailable
    logger.warn({ task }, "agents.execute: orchestrator unavailable, returning mock fallback");
    const agents = ["research_agent", "motion_drafter", "citation_verifier", "mitigation_analyst"];
    const steps = agents.map((agent, index) => ({
      agent,
      action: task,
      status: "completed",
      order: index + 1,
      summary: `[${agent}] processed task for case ${requestPayload.caseId}.`,
    }));
    return res.json({
      status: "mock_completed",
      source: "mock-fallback",
      caseId: requestPayload.caseId,
      task,
      agentType: requestPayload.agentType,
      steps,
      result: {
        memo: `Draft analysis for task "${task}" (mock). Wire ACQUIT_PLATFORM_DIR to the live orchestrator for real output.`,
        citationsChecked: 0,
        confidence: 0.42,
      },
    });
  } catch (err) {
    logger.error({ err }, "agents.execute failed");
    return res.status(500).json({ error: "internal_error", message: "Agent orchestration failed." });
  }
});

export default router;
