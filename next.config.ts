import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "s4.anilist.co",
        port: '',
        pathname: "/**",
        search: '',
      }
    ]
  }
};

export default nextConfig;
