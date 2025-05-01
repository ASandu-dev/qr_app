const isProd = process.env.NODE_ENV === 'production';

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    unoptimized: true,
  },
  assetPrefix: isProd ? '/qr_app/' : '',
  basePath: isProd ? '/qr_app' : '',
  output: 'export',
};

export default nextConfig;
