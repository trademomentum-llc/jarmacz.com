/** @type {import('next').NextConfig} */

// Set to 'export' for cPanel static hosting, 'standalone' for NUC self-hosting
const DEPLOYMENT_MODE = process.env.DEPLOYMENT_MODE || 'export'

const nextConfig = {
  output: DEPLOYMENT_MODE,
  reactStrictMode: true,
  images: {
    // Must be true for static export
    unoptimized: DEPLOYMENT_MODE === 'export',
    remotePatterns: [],
  },
  // Use trailing slash for better static hosting compatibility
  trailingSlash: DEPLOYMENT_MODE === 'export',
}

module.exports = nextConfig

