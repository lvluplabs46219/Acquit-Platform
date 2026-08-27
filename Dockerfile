# Acquit.ai Dockerfile

FROM node:20.15.1-bookworm-slim AS base
ENV DEBIAN_FRONTEND=noninteractive
RUN apt-get update && apt-get install -y \
    python3 python3-pip python3-venv \
    && rm -rf /var/lib/apt/lists/*
WORKDIR /app

# ---------- Dependencies ----------
FROM base AS deps
COPY package.json package-lock.json ./
COPY apps/web/package.json apps/web/
COPY apps/api/package.json apps/api/
COPY packages/db/package.json packages/db/
COPY scripts/package.json scripts/
RUN npm ci

# ---------- Builder ----------
FROM base AS builder
WORKDIR /app
COPY --from=deps /app/node_modules ./node_modules
COPY . .
ENV NODE_ENV=production
# Note: we need to build web for the frontend, and api for the backend
RUN npm run build --workspace=apps/web
RUN npm run build --workspace=apps/api

# ---------- Runner ----------
FROM base AS runner
WORKDIR /app
ENV NODE_ENV=production

COPY --from=builder /app/package.json ./package.json
COPY --from=builder /app/package-lock.json ./package-lock.json
COPY --from=builder /app/node_modules ./node_modules

# Copy built frontend
COPY --from=builder /app/apps/web/dist ./apps/web/dist

# Copy built backend
COPY --from=builder /app/apps/api/dist ./apps/api/dist
COPY --from=builder /app/apps/api/package.json ./apps/api/package.json

RUN useradd -m aquit && chown -R aquit:aquit /app
USER aquit

EXPOSE 3000
ENV PORT=3000

CMD ["node", "apps/api/dist/index.mjs"]
