import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      new URL("http://localhost:8000/**"),
      new URL(
        "http://ec2-54-180-146-70.ap-northeast-2.compute.amazonaws.com:8000/**"
      ),
    ],
  },
  /* config options here */
};

export default nextConfig;
