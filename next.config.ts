import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      // Add image domains as needed for your project
    ],
  },
};

export default nextConfig;
