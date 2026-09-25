/**
 * Acquit.ai — Local Ollama client (default LLM path).
 * No cloud keys required. Point OLLAMA_BASE_URL at your machine or LAN host.
 */

export type OllamaChatMessage = {
  role: "system" | "user" | "assistant";
  content: string;
};

const DEFAULT_BASE = process.env.OLLAMA_BASE_URL ?? "http://127.0.0.1:11434";
const DEFAULT_MODEL =
  process.env.OLLAMA_MODEL ?? process.env.ACQUIT_DEFAULT_MODEL ?? "llama3.2";

export function getDefaultLlmProvider(): "ollama" | "demo" | "openai" | "gemini" {
  const p = (process.env.ACQUIT_DEFAULT_LLM_PROVIDER ?? "ollama").toLowerCase();
  if (p === "demo" || p === "openai" || p === "gemini" || p === "ollama") return p;
  return "ollama";
}

export function getDefaultOllamaModel(): string {
  return DEFAULT_MODEL;
}

export async function ollamaHealth(): Promise<{
  ok: boolean;
  baseUrl: string;
  models: string[];
  details?: string;
}> {
  const baseUrl = DEFAULT_BASE.replace(/\/$/, "");
  try {
    const res = await fetch(`${baseUrl}/api/tags`, {
      signal: AbortSignal.timeout(8000),
    });
    if (!res.ok) {
      return { ok: false, baseUrl, models: [], details: `HTTP ${res.status}` };
    }
    const body = (await res.json()) as { models?: Array<{ name?: string }> };
    const models = (body.models ?? [])
      .map((m) => m.name)
      .filter((n): n is string => Boolean(n));
    return { ok: true, baseUrl, models };
  } catch (err) {
    return {
      ok: false,
      baseUrl,
      models: [],
      details: err instanceof Error ? err.message : String(err),
    };
  }
}

export async function ollamaChat(opts: {
  messages: OllamaChatMessage[];
  model?: string;
  temperature?: number;
}): Promise<{ text: string; model: string }> {
  const baseUrl = DEFAULT_BASE.replace(/\/$/, "");
  const model = opts.model || DEFAULT_MODEL;

  const res = await fetch(`${baseUrl}/api/chat`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      model,
      messages: opts.messages,
      stream: false,
      options: {
        temperature: opts.temperature ?? 0.3,
        num_predict: 4096,
      },
    }),
    signal: AbortSignal.timeout(120_000),
  });

  if (!res.ok) {
    const body = await res.text().catch(() => "");
    throw new Error(`Ollama chat failed HTTP ${res.status}: ${body.slice(0, 200)}`);
  }

  const payload = (await res.json()) as {
    message?: { content?: string };
    model?: string;
  };
  const text = payload.message?.content?.trim();
  if (!text) {
    throw new Error("Ollama returned empty content");
  }
  return { text, model: payload.model || model };
}

/** Shared UPL system prompt for lawyer / clerk paths via Ollama */
export const OLLAMA_UPL_SYSTEM = `You are Acquit.ai, a legal information assistant for self-represented litigants.
You provide educational and procedural information only. You do not form an attorney-client relationship.
STRICT RULES:
1. Never say "In my legal opinion" or give personalized strategy advice.
2. Never recommend a specific lawyer or firm.
3. Prefer plain English (~8th grade).
4. Cite statutes or rules when stating procedural requirements; if unsure, say [Authority Not Verified].
5. End with: This information is for educational and procedural purposes only and does not constitute legal advice.`;
