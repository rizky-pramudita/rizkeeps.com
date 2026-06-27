/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    // Required for Server Actions on Next.js 13.4.x.
    serverActions: true,
  },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'res.cloudinary.com',
      },
    ],
  },
}

module.exports = nextConfig
