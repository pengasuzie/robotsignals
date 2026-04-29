import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async rewrites() {
    return [
      {
        source: "/tools/rd-tax-calculator",
        destination: "/tools/rd-tax-calculator/index.html",
      },
    ];
  },
};

export default nextConfig;
