/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  distDir: '/tmp/next-build/dist',
  images: {
    unoptimized: true,
  },
  trailingSlash: true,
}

export default nextConfig
