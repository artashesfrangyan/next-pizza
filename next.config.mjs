/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'standalone',
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'media.dodostatic.net',
      },
    ],
  }, // [FIXME] - Get rid of external images
};

export default nextConfig;
