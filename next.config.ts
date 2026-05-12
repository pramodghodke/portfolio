import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  devIndicators: false,
  images: {
    domains: ["cdn.jsdelivr.net"],
  },
};
export default nextConfig;