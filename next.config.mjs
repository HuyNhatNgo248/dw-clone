import { withPayload } from '@payloadcms/next/withPayload'

/** @type {import('next').NextConfig} */
const nextConfig = {
  // Your Next.js config here
  output: 'standalone',
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'dw-clone-eta.vercel.app', // Your deployed domain
        pathname: '/api/media/file/**', // Path to your images
      },
      {
        protocol: 'http',
        hostname: '*', // Allow images from all HTTP domains
      },
    ],
  },
}

export default withPayload(nextConfig)
