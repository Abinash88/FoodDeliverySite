/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
          {
            protocol: 'https',
            hostname: 'apipics.s3.amazonaws.com',
            port: '',
            pathname: '/account123/**',
          },
        ],
      },
}

module.exports = nextConfig

