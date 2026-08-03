/** @type {import('next').NextConfig} */
const nextConfig = {
  // Static export or serverless? Vercel optimized server-side works fine without static exports.
  // We can read local files in server side routes / server components.
  // Next 15 default config
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
};

module.exports = nextConfig;
