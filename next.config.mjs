import { withPayload } from '@payloadcms/next/withPayload'

/** @type {import('next').NextConfig} */
const nextConfig = {
  // Your Next.js config here
  output: 'standalone',
  // Next 15.4 otherwise picks a stray lockfile in a parent dir as the workspace root
  outputFileTracingRoot: import.meta.dirname,
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'q4aw4kksczq5nsez.public.blob.vercel-storage.com', // Your deployed domain
        pathname: '/api/media/file/**',
      },
    ],
  },
}

export default withPayload(nextConfig)
