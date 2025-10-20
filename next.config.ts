import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "cdn.dummyjson.com",
        port: "",
        pathname: "/product-images/**",
      },
      {
        protocol: "https",
        hostname: "dummyjson.com",
        port: "",
        pathname: "/icon/**",
      },
    ],
  },
  /* config options here */
};

export default nextConfig;
