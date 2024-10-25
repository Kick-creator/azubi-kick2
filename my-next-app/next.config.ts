import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  experimental: {
    appDir: true, // Aktiviert den neuen App-Router (falls noch nicht standardmäßig aktiv)
  },
};

export default nextConfig;
