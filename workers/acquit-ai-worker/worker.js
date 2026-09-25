/**
 * Acquit.ai — Cloudflare API Proxy Worker (canonical)
 * Path: workers/acquit-ai-worker/
 * Deploy: wrangler deploy --config workers/acquit-ai-worker/wrangler.jsonc
 */

const SECURITY_HEADERS = {
  "X-Content-Type-Options": "nosniff",
  "X-Frame-Options": "SAMEORIGIN",
  "Referrer-Policy": "strict-origin-when-cross-origin",
  "Permissions-Policy": "camera=(), microphone=(), geolocation=()",
};

function corsHeaders(origin) {
  return {
    "Access-Control-Allow-Origin": origin || "*",
    "Access-Control-Allow-Methods": "GET, POST, PUT, DELETE, PATCH, OPTIONS",
    "Access-Control-Allow-Headers":
      "Content-Type, Authorization, X-Requested-With, X-Acquit-Case-Id",
    "Access-Control-Allow-Credentials": "true",
    "Access-Control-Max-Age": "86400",
  };
}

export default {
  async fetch(request, env) {
    const url = new URL(request.url);
    const origin = request.headers.get("Origin") || "*";

    if (request.method === "OPTIONS") {
      return new Response(null, {
        status: 204,
        headers: { ...corsHeaders(origin), ...SECURITY_HEADERS },
      });
    }

    if (url.pathname === "/health" || url.pathname === "/api/health") {
      return new Response(
        JSON.stringify({
          status: "healthy",
          service: "acquit-ai-api-proxy",
          canonical: "workers/acquit-ai-worker",
          timestamp: new Date().toISOString(),
          region: request.cf?.colo || "global",
        }),
        {
          status: 200,
          headers: {
            "Content-Type": "application/json",
            ...corsHeaders(origin),
            ...SECURITY_HEADERS,
          },
        },
      );
    }

    const upstreamBase = env?.API_UPSTREAM_URL || "http://localhost:3001";
    const targetUrl = new URL(url.pathname + url.search, upstreamBase);
    const newHeaders = new Headers(request.headers);
    newHeaders.set("X-Forwarded-Host", url.host);
    newHeaders.set("X-Forwarded-Proto", url.protocol.replace(":", ""));
    newHeaders.set("X-Acquit-Proxy", "workers/acquit-ai-worker");

    try {
      const response = await fetch(targetUrl.toString(), {
        method: request.method,
        headers: newHeaders,
        body: ["GET", "HEAD"].includes(request.method) ? undefined : request.body,
        redirect: "follow",
      });
      const responseHeaders = new Headers(response.headers);
      Object.entries({ ...corsHeaders(origin), ...SECURITY_HEADERS }).forEach(
        ([k, v]) => responseHeaders.set(k, v),
      );
      return new Response(response.body, {
        status: response.status,
        statusText: response.statusText,
        headers: responseHeaders,
      });
    } catch (err) {
      return new Response(
        JSON.stringify({
          error: "Upstream Service Unavailable",
          details: err instanceof Error ? err.message : String(err),
          target: targetUrl.origin,
        }),
        {
          status: 502,
          headers: {
            "Content-Type": "application/json",
            ...corsHeaders(origin),
            ...SECURITY_HEADERS,
          },
        },
      );
    }
  },
};
