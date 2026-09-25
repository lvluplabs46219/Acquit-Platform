import { Router, type Request, type Response } from "express";
import { detectPromptInjection } from "../ai/runtime";
import {
  ollamaChat,
  ollamaHealth,
  getDefaultOllamaModel,
  OLLAMA_UPL_SYSTEM,
} from "../ai/ollama-client";

const router = Router();

function sanitize(input: string): string {
  if (detectPromptInjection(input)) {
    throw new Error("prompt injection detected");
  }
  return String(input);
}

/** GET /api/ai/ollama/health */
router.get("/ai/ollama/health", async (_req: Request, res: Response) => {
  const health = await ollamaHealth();
  return res.status(health.ok ? 200 : 503).json({
    provider: "ollama",
    defaultModel: getDefaultOllamaModel(),
    ...health,
  });
});

/**
 * POST /api/ai/lawyer — AI Lawyer via local Ollama (default, no Gemini)
 * Also mounted aliases for client compatibility.
 */
async function handleLawyer(req: Request, res: Response) {
  try {
    const promptText =
      req.body.message || req.body.prompt || req.body.query || req.body.input;
    if (!promptText) {
      return res.status(400).json({ error: "Message or prompt is required." });
    }

    const jurisdiction = sanitize(String(req.body.jurisdiction || "State & Federal Rules"));
    const agentRole = sanitize(String(req.body.agentRole || "Legal Information Specialist"));
    const context =
      typeof req.body.context === "string"
        ? sanitize(req.body.context)
        : req.body.context
          ? JSON.stringify(req.body.context)
          : "Pro Se Matter";
    const userQ = sanitize(String(promptText));

    const userBlock = `Role: Acquit.ai Legal Team Assistant (${agentRole})
Jurisdiction: ${jurisdiction}
Case Context: ${context}

User Question: ${userQ}

Respond in plain English with clear headings. End with the educational disclaimer.`;

    const { text, model } = await ollamaChat({
      messages: [
        { role: "system", content: OLLAMA_UPL_SYSTEM },
        { role: "user", content: userBlock },
      ],
    });

    return res.json({
      success: true,
      text,
      agentRole,
      modelUsed: model,
      provider: "ollama",
      timestamp: new Date().toISOString(),
      disclaimer:
        "This information is provided for educational and procedural purposes only and does not constitute legal advice. No attorney-client relationship is formed.",
    });
  } catch (err: any) {
    if (String(err.message || "").includes("prompt injection")) {
      return res.status(400).json({ error: "Invalid input - request rejected" });
    }
    console.error("[ollama lawyer]", err);
    return res.status(502).json({
      error: "Ollama request failed",
      details: err instanceof Error ? err.message : String(err),
      hint: "Run: ollama serve && ollama pull llama3.2",
    });
  }
}

router.post("/ai/lawyer", handleLawyer);
router.post("/lawyer", handleLawyer);
router.post("/ai/chat", handleLawyer);
router.post("/chat", handleLawyer);
router.post("/gemini/lawyer", handleLawyer);
router.post("/gemini/lawyer-chat", handleLawyer);

/** POST /api/gemini/clerk-chat — The Clerk via Ollama */
router.post("/gemini/clerk-chat", async (req: Request, res: Response) => {
  try {
    const message = sanitize(String(req.body.message || ""));
    const jurisdiction = sanitize(String(req.body.jurisdiction || "Indiana"));
    const context = req.body.context ? JSON.stringify(req.body.context) : "General procedural inquiry";

    const { text, model } = await ollamaChat({
      messages: [
        {
          role: "system",
          content:
            OLLAMA_UPL_SYSTEM +
            "\nYou are \"The Clerk\", a court procedural guide for pro se litigants.",
        },
        {
          role: "user",
          content: `Jurisdiction: ${jurisdiction}\nContext: ${context}\n\nQuestion: ${message}`,
        },
      ],
    });

    return res.json({
      success: true,
      text,
      modelUsed: model,
      provider: "ollama",
      timestamp: new Date().toISOString(),
      disclaimer:
        "This information is provided for educational and procedural purposes only and does not constitute legal advice.",
    });
  } catch (err: any) {
    if (String(err.message || "").includes("prompt injection")) {
      return res.status(400).json({ error: "Invalid input - request rejected" });
    }
    console.error("[ollama clerk]", err);
    return res.status(502).json({
      error: "Ollama request failed",
      details: err instanceof Error ? err.message : String(err),
    });
  }
});

export default router;
