/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
  },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'cntrpnt.io',
        port: '',
        pathname: '/assets/**',
      },
    ],
  },
}


module.exports = nextConfig
