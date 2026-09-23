/** @type {import('next').NextConfig} */

// ---------------------------------------------------------------------------
// Stitch asset sync: mirror the 85 NEWSTITCH mockup folders into the Next.js
// public directory so screens are statically served at
//   /assets/stitch/<mockupName>/code.html  and  /assets/<mockupName>/code.html
// Runs at config load time (next dev / next build).
// ---------------------------------------------------------------------------
import { cpSync, existsSync, mkdirSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const webRoot = dirname(fileURLToPath(import.meta.url));
const stitchSource = join(
  webRoot,
  "components/mockups/acquit-case-workspace/NEWSTITCH/stitch_acquit.ai_legal_operating_system"
);

function syncStitchAssets() {
  if (!existsSync(stitchSource)) {
    console.warn("[next.config] NEWSTITCH mockup folder not found; skipping asset sync:", stitchSource);
    return;
  }
  const targets = [join(webRoot, "public/assets/stitch"), join(webRoot, "public/assets")];
  for (const target of targets) {
    mkdirSync(target, { recursive: true });
    cpSync(stitchSource, target, { recursive: true });
  }
}

syncStitchAssets();

function getApiDestination() {
  const rawUrl = process.env.API_URL?.trim();
  if (rawUrl) {
    const urlMatch = rawUrl.match(/(https?:\/\/[^\s"']+)/);
    if (urlMatch) {
      const clean = urlMatch[1].replace(/\/+$/, '');
      if (clean.endsWith('/api')) {
        return `${clean}/:path*`;
      }
      return `${clean}/api/:path*`;
    }
    if (rawUrl.startsWith('/')) {
      return rawUrl;
    }
  }
  return 'http://localhost:3001/api/:path*';
}

const nextConfig = {
  reactStrictMode: true,
  typescript: {
    ignoreBuildErrors: true,
  },
  async rewrites() {
    return [
      {
        source: '/api/:path*',
        destination: getApiDestination(),
      },
    ];
  },
};

export default nextConfig;
