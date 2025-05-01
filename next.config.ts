import type { NextConfig } from "next";

const isProd = process.env.NODE_ENV === 'production';
const NextConfig = {
  reactStrictMode: true,
  images: {
    unoptimized: true, // Disable default image optimization
  },
  assetPrefix: isProd ? '/qr_app/' : '',
  basePath: isProd ? '/qr_app' : '',
  output: 'export'
};

export default NextConfig;