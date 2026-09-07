import type { NextConfig } from 'next'

const nextConfig: NextConfig = {
  experimental: {
    optimizePackageImports: ['@phosphor-icons/react']
  },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'github.com',
        port: '',
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
