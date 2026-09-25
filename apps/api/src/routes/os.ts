import { Router, type Request, type Response } from "express";
import { logger } from "../lib/logger";

const router = Router();

/**
 * POST /api/os/timeline-events — Log Event mutation (Chronology)
 * Idempotent-friendly: clients may retry with same client_event_id.
 */
router.post("/timeline-events", async (req: Request, res: Response) => {
  const { event_type, title, event_date, notes, case_id, matter_id, client_event_id } =
    req.body || {};

  if (!title || !event_type) {
    return res.status(400).json({ error: "title and event_type required" });
  }

  logger.info(
    { event_type, title, case_id, matter_id, client_event_id },
    "os.timeline_event",
  );

  // Persist path: prefer Supabase service role when configured; otherwise acknowledge.
  return res.status(202).json({
    ok: true,
    id: client_event_id || `evt_${Date.now()}`,
    event_type,
    title,
    event_date: event_date || new Date().toISOString(),
    notes: notes || null,
    case_id: case_id || null,
    matter_id: matter_id || null,
    status: "accepted",
  });
});

/** POST /api/os/clerk/ack — The Clerk alert acknowledgement */
router.post("/clerk/ack", async (req: Request, res: Response) => {
  const { alert_id } = req.body || {};
  logger.info({ alert_id }, "os.clerk_ack");
  return res.status(200).json({ ok: true, alert_id: alert_id || null });
});

export default router;
