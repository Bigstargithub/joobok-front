import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      new URL("http://localhost:8000/**"),
      new URL("https://api.joobok.or.kr/**"),
    ],
  },
  /* config options here */
};

export default nextConfig;
