import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    domains: ['img.clerk.com'], // Add "img.clerk.com" to the allowed domains list
  },
};

export default nextConfig;
