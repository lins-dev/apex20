import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  experimental: {
    allowedDevOrigins: ["localhost:3020", "127.0.0.1:3020", "0.0.0.0:3000"],
  },
};

export default nextConfig;
