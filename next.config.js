/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  images: {
    unoptimized: true,
  },
  basePath: process.env.NODE_ENV === 'production' ? '/soiree' : '',
  assetPrefix: process.env.NODE_ENV === 'production' ? '/soiree/' : '',
  trailingSlash: true,
}

module.exports = nextConfig 