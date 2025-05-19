import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "gc4oxib16q.ufs.sh",
        pathname: "/**",
      },
    ],
  },
};

export default nextConfig;
