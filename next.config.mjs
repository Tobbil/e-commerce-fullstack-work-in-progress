/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
          {
            protocol: 'https',
            hostname: 'audiophile-store-bucket.s3.eu-north-1.amazonaws.com',
            port: '',
            pathname: '/items/**',
          },
          {
            protocol: 'https',
            hostname: 'audiophile-store-bucket.s3.eu-north-1.amazonaws.com',
            port: '',
            pathname: '/categories/**',
          },
        ],
      },
};

export default nextConfig;
