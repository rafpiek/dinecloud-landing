import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async headers() {
    return [
      {
        source: '/dl/:path*',
        headers: [
          {
            key: 'X-Apple-App-Clip-Bundle-ID',
            value: 'net.dinecloud.customers.Clip'
          },
          {
            key: 'Content-Type',
            value: 'text/html; charset=utf-8'
          },
          {
            key: 'X-Apple-App-Clip-Bundle-ID',
            value: 'net.dinecloud.customers.Clip'
          }
        ],
      },
    ]
  },
};

export default nextConfig;
