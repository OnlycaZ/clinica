import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async headers() {
    return [
      // API responses: no cache (avoid stale form handling)
      {
        source: "/api/:path*",
        headers: [
          {
            key: "Cache-Control",
            value: "no-store, max-age=0"
          }
        ]
      },
      // Next static assets (already hashed) - long term cache
      {
        source: "/_next/static/:path*",
        headers: [
          {
            key: "Cache-Control",
            value: "public, max-age=31536000, immutable"
          }
        ]
      },
      // Public static assets (images, media, css/js without Next hash)
      {
        source: "/:all*(svg|jpg|jpeg|png|webp|ico|mp4|css|js)",
        headers: [
          {
            key: "Cache-Control",
            value: "public, max-age=31536000, immutable"
          }
        ]
      },
      // HTML/pages: short browser cache + longer server cache
      {
        source: "/(.*)",
        headers: [
          {
            key: "Cache-Control",
            value: "public, max-age=60, s-maxage=600, stale-while-revalidate=86400"
          }
        ]
      }
    ];
  },
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.pexels.com"
      },
      {
        protocol: "https",
        hostname: "lh3.googleusercontent.com"
      }
    ]
  }
};

export default nextConfig;
