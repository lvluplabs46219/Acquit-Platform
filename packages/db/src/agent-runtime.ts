import {
  pgTable,
  text,
  integer,
  doublePrecision,
  timestamp,
  jsonb,
  uuid,
} from "drizzle-orm/pg-core";
import { usersTable, mattersTable } from "./index";

// Agent Runtime — one row per delegated agent execution
export const agentRunsTable = pgTable("agent_runs", {
  id: uuid("id").defaultRandom().primaryKey(),
  userId: uuid("user_id").notNull().references(() => usersTable.id, { onDelete: "cascade" }),
  matterId: uuid("matter_id").references(() => mattersTable.id, { onDelete: "set null" }),
  agentId: text("agent_id").notNull(),
  task: text("task").notNull(),
  prompt: text("prompt"),
  provider: text("provider"),
  model: text("model"),
  status: text("status").default("running"),
  result: jsonb("result"),
  error: text("error"),
  tokensUsed: integer("tokens_used"),
  cost: doublePrecision("cost").default(0),
  latencyMs: integer("latency_ms"),
  createdAt: timestamp("created_at", { withTimezone: true }).defaultNow(),
  updatedAt: timestamp("updated_at", { withTimezone: true }).defaultNow(),
});

// The Clerk alert feed
export const clerkAlertsTable = pgTable("clerk_alerts", {
  id: uuid("id").defaultRandom().primaryKey(),
  userId: uuid("user_id").notNull().references(() => usersTable.id, { onDelete: "cascade" }),
  matterId: uuid("matter_id").references(() => mattersTable.id, { onDelete: "cascade" }),
  alertType: text("alert_type").notNull(),
  severity: text("severity").default("info"),
  title: text("title").notNull(),
  message: text("message"),
  source: text("source").default("the_clerk"),
  status: text("status").default("active"),
  metadata: jsonb("metadata").default("{}").notNull(),
  createdAt: timestamp("created_at", { withTimezone: true }).defaultNow(),
  acknowledgedAt: timestamp("acknowledged_at", { withTimezone: true }),
});

// Active Research screen + CourtListener pulls
export const researchQueriesTable = pgTable("research_queries", {
  id: uuid("id").defaultRandom().primaryKey(),
  userId: uuid("user_id").notNull().references(() => usersTable.id, { onDelete: "cascade" }),
  matterId: uuid("matter_id").references(() => mattersTable.id, { onDelete: "set null" }),
  query: text("query").notNull(),
  depth: text("depth").default("comprehensive"),
  status: text("status").default("pending"),
  results: jsonb("results"),
  courtlistenerDocket: text("courtlistener_docket"),
  error: text("error"),
  createdAt: timestamp("created_at", { withTimezone: true }).defaultNow(),
  completedAt: timestamp("completed_at", { withTimezone: true }),
});

export type AgentRun = typeof agentRunsTable.$inferSelect;
export type ClerkAlert = typeof clerkAlertsTable.$inferSelect;
export type ResearchQuery = typeof researchQueriesTable.$inferSelect;
