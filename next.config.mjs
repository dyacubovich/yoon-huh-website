/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "picsum.photos",
      },
    ],
    // TEMPORARY: every current image (About portrait + Gallery) is a
    // picsum.photos placeholder, not a real production asset. Server-side
    // optimization was adding several seconds per uncached request on
    // shared hosting. Remove this once real photos replace the
    // [PLACEHOLDER] images — next/image optimization is worth it for
    // actual production photography.
    unoptimized: true,
  },
};

export default nextConfig;
