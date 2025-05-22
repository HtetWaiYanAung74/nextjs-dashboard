import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  experimental: {
    ppr: 'incremental',
  },
  devIndicators: false
};

export default nextConfig;
