import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  compiler:{
    styledComponents:true
  },
  images: {
    domains: ['loremflickr.com'],
  },
};

export default nextConfig;
