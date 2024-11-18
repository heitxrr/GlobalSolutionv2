import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    unoptimized: true,
  },
  eslint: {
    ignoreDuringBuilds: true, // Ignora avisos e erros do ESLint durante o build
  },
};

export default nextConfig;
