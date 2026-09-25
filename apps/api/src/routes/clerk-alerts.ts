import { Router, type Response } from "express";
import { and, desc, eq } from "drizzle-orm";
import { db } from "@workspace/db";
import { clerkAlertsTable } from "@workspace/db/agent-runtime";
import { AuthenticatedRequest, verifySession } from "../middleware/verifySession";

export const clerkAlertsRouter = Router();
clerkAlertsRouter.use(verifySession);

// GET /clerk-alerts — alert feed, optionally filtered by status or matter
clerkAlertsRouter.get("/clerk-alerts", async (req: AuthenticatedRequest, res: Response) => {
  try {
    const user = req.user;
    if (!user?.id) return res.status(401).json({ success: false, error: "Unauthorized" });

    const { status, matterId } = req.query as Record<string, string | undefined>;
    let rows = await db
      .select()
      .from(clerkAlertsTable)
      .where(eq(clerkAlertsTable.userId, user.id))
      .orderBy(desc(clerkAlertsTable.createdAt))
      .limit(100);
    if (status) rows = rows.filter((r: any) => r.status === status);
    if (matterId) rows = rows.filter((r: any) => r.matterId === matterId);
    return res.json({ success: true, alerts: rows });
  } catch (err: any) {
    return res.status(500).json({ success: false, error: err?.message ?? "Failed to list alerts" });
  }
});

// POST /clerk-alerts — create an alert (The Clerk logging an event)
clerkAlertsRouter.post("/clerk-alerts", async (req: AuthenticatedRequest, res: Response) => {
  try {
    const user = req.user;
    if (!user?.id) return res.status(401).json({ success: false, error: "Unauthorized" });

    const { matterId, alertType, severity, title, message, source, metadata } = req.body ?? {};
    if (!alertType || !title) {
      return res.status(400).json({ success: false, error: "alertType and title are required" });
    }
    const inserted = await db
      .insert(clerkAlertsTable)
      .values({
        userId: user.id,
        matterId: matterId ?? null,
        alertType,
        severity: severity ?? "info",
        title,
        message: message ?? null,
        source: source ?? "the_clerk",
        metadata: metadata ?? {},
      })
      .returning();
    return res.json({ success: true, alert: inserted?.[0] });
  } catch (err: any) {
    return res.status(500).json({ success: false, error: err?.message ?? "Failed to create alert" });
  }
});

// PATCH /clerk-alerts/:id — acknowledge or dismiss
clerkAlertsRouter.patch("/clerk-alerts/:id", async (req: AuthenticatedRequest, res: Response) => {
  try {
    const user = req.user;
    if (!user?.id) return res.status(401).json({ success: false, error: "Unauthorized" });

    const { status } = req.body ?? {};
    if (!["active", "acknowledged", "dismissed"].includes(status)) {
      return res.status(400).json({ success: false, error: "status must be active | acknowledged | dismissed" });
    }
    const updated = await db
      .update(clerkAlertsTable)
      .set({
        status,
        acknowledgedAt: status === "active" ? null : new Date(),
      })
      .where(and(eq(clerkAlertsTable.id, req.params.id), eq(clerkAlertsTable.userId, user.id)))
      .returning();
    if (!updated?.length) return res.status(404).json({ success: false, error: "Alert not found" });
    return res.json({ success: true, alert: updated[0] });
  } catch (err: any) {
    return res.status(500).json({ success: false, error: err?.message ?? "Failed to update alert" });
  }
});
