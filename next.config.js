/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false, // @note: use-metamask fails when this is true :/
  swcMinify: true,
}

module.exports = nextConfig
