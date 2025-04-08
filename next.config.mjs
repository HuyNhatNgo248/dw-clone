import { withPayload } from '@payloadcms/next/withPayload'

/** @type {import('next').NextConfig} */
const nextConfig = {
  // Your Next.js config here
  output: 'standalone',
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '*', // Allow images from all HTTPS domains
      },
      {
        protocol: 'http',
        hostname: '*', // Allow images from all HTTP domains
      },
    ],
  },
}

export default withPayload(nextConfig)
