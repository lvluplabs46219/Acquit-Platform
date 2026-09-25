#!/usr/bin/env node
/** Idempotent patch: agent runs default provider = ollama */
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const aiPath = path.join(root, "src/routes/ai.ts");
let t = fs.readFileSync(aiPath, "utf8");

if (!t.includes("getDefaultLlmProvider")) {
  t = t.replace(
    'import type { ModelProvider } from "../ai/model-gateway";',
    'import type { ModelProvider } from "../ai/model-gateway";\nimport { getDefaultLlmProvider, getDefaultOllamaModel } from "../ai/ollama-client";',
  );
}
t = t.replace(
  'const provider = (record.request.provider ?? "demo") as ModelProvider;',
  'const provider = (record.request.provider ?? getDefaultLlmProvider()) as ModelProvider;',
);
t = t.replace(
  'model: record.request.model ?? (provider === "ollama" ? "llama3.2" : "acquit-demo-1"),',
  'model: record.request.model ?? (provider === "ollama" ? getDefaultOllamaModel() : provider === "demo" ? "acquit-demo-1" : getDefaultOllamaModel()),',
);

fs.writeFileSync(aiPath, t);
console.log("[patch-ollama-default] applied", aiPath);
