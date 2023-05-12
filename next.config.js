/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'static.nike.com'
      },
      {
        protocol: 'https',
        hostname: 'www.adidas.co.id'
      },
      {
        protocol: 'https',
        hostname: 'www.converse.id'
      },
      {
        protocol: 'https',
        hostname: 'images.vans.com'
      },
    ],
  }
}

module.exports = nextConfig
