import type { NextConfig } from "next";

const basePath = process.env.PAGES_BASE_PATH || undefined;

const nextConfig: NextConfig = {
  output: "export",
  // GitHub project Pages are served under /<repo>, not the domain root.
  ...(basePath ? { basePath } : {}),
  // Required for static hosting — no Next.js image optimization server.
  images: {
    unoptimized: true,
  },
  // Prefer /path/index.html so GitHub Pages resolves nested routes cleanly.
  trailingSlash: true,
};

export default nextConfig;
