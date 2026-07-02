/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    // Hostinger's CDN doesn't edge-cache the /_next/image optimizer route
    // the way it does static files (max-age=60, must-revalidate, DYNAMIC at
    // the edge vs. immutable for plain static assets), so every unique
    // width variant gets re-resized by sharp on the origin roughly once a
    // minute. On shared hosting that on-demand resize is slow enough to be
    // the dominant cost of a page load. Since images are already self-hosted
    // static files, skip the optimizer and serve them directly so they get
    // the same immutable edge caching as everything else in /public.
    unoptimized: true,
  },
};

export default nextConfig;
