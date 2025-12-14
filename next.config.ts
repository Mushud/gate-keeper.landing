import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export',
  images: {
    unoptimized: true,
  },
  // Disable automatic static optimization issues
  reactStrictMode: true,
  // Ensure all pages are statically generated at build time
  experimental: {
    optimizePackageImports: ['framer-motion'],
  },
};

export default nextConfig;
