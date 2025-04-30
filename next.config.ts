import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export',
  images: {
    unoptimized: true,
  },
  basePath: '/qr_app', // optional, if deploying to repo URL
};

export default nextConfig;
