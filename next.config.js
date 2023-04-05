/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  optimizeFonts: true,
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'source.unsplash.com',
      },
    ],
    minimumCacheTTL: 1500000
  }
}
// 'source.unsplash.com'
// module.exports = {
//   async rewrites() {
//       return [
//         {
//           source: '/api/:path*',
//           destination: 'https://api.example.com/:path*',
//         },
//       ]
//     },
// };

module.exports = nextConfig;
