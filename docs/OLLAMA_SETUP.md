# Local Ollama as default LLM (Acquit.ai)

Gemini is **not** required. Production path for this workspace is **Ollama on localhost**.

## 1. Install & run Ollama

```bash
# macOS / Linux: https://ollama.com
ollama serve
# other terminal:
ollama pull llama3.2
# optional stronger:
ollama pull mistral
ollama pull llama3.1:8b
```

Health check:

```bash
curl -s http://127.0.0.1:11434/api/tags | jq .
```

## 2. API env

```bash
cd apps/api
cp .env.example .env.local
# ensure:
# ACQUIT_DEFAULT_LLM_PROVIDER=ollama
# OLLAMA_BASE_URL=http://127.0.0.1:11434
# OLLAMA_MODEL=llama3.2

npm run dev
```

## 3. Smoke tests

```bash
# provider health
curl -s http://localhost:3001/api/ai/ollama/health | jq .

# AI lawyer via Ollama (no Gemini key)
curl -s -X POST http://localhost:3001/api/ai/lawyer \
  -H 'Content-Type: application/json' \
  -d '{"message":"What is an arraignment?","jurisdiction":"Arizona"}' | jq .

# specialist agent (defaults to ollama)
curl -s -X POST http://localhost:3001/api/ai/agents/rights-checker/runs \
  -H 'Content-Type: application/json' \
  -H 'Authorization: Bearer acquit-pro-se-token' \
  -d '{"input":"Officer searched my car without a warrant. Explain possible 4th Amendment issues in plain English."}' | jq .
```

## 4. Docker / LAN note

If the API runs in Docker and Ollama on the host:

```env
OLLAMA_BASE_URL=http://host.docker.internal:11434
```

On Linux, use the host gateway IP or `--network=host`.

## 5. Privacy

Case-sensitive flows should stay on Ollama (local). Cloud providers remain optional fallbacks only when explicitly requested via `provider` in the request body.
