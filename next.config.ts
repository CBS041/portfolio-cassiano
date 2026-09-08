import type { NextConfig } from 'next'

const nextConfig: NextConfig = {
  experimental: {
    optimizePackageImports: ['@phosphor-icons/react']
  },
  poweredByHeader: false,
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'github.com',
        pathname: '/**'
      },
      {
        protocol: 'https',
        hostname: 'opengraph.githubassets.com'
      }
    ]
  }
}

export default nextConfig
