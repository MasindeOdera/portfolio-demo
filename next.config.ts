import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  compiler:{
    styledComponents:true
  },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'loremflickr.com',
      },
    ],
  },
};

export default nextConfig;
