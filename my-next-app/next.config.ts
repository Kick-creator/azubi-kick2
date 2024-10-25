import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true, // Hilft, Fehler im React-Code frühzeitig zu erkennen
  swcMinify: true, // Aktiviert die SWC-Minifizierung für schnellere Builds
  experimental: {
    appDir: true, // Aktiviert den neuen App-Router (falls noch nicht standardmäßig aktiv)
  },
};

export default nextConfig;
