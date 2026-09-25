import { Router, type IRouter } from "express";
import healthRouter from "./health";
import aiRouter from "./ai";
import directoryRouter from "./directory";
import courtlistenerRouter from "./courtlistener";
import { webhooksRouter } from "./webhooks";
import { documentsRouter } from "./documents";
import mattersRouter from "./matters";
import { geminiRouter } from "./gemini";
import { filingRouter } from "./filing";
import auditRouter from "./audit";
import chainOfCommandRouter from "./chain-of-command";
import ollamaRouter from "./ollama";
import { verifySession } from "../middleware/verifySession";

const router: IRouter = Router();

router.use(healthRouter);
router.use(webhooksRouter); // public via HMAC

// Ollama health is public so ops can probe without auth
router.use(ollamaRouter);

router.use(verifySession as any);
router.use(aiRouter);
router.use(directoryRouter);
router.use(courtlistenerRouter);
router.use(documentsRouter);
router.use(mattersRouter);
// Gemini routes remain available for explicit provider=gemini; lawyer aliases prefer Ollama router above
router.use(geminiRouter);
router.use(filingRouter);
router.use("/audit", auditRouter as any);
router.use("/chain-of-command", chainOfCommandRouter as any);

export default router;
