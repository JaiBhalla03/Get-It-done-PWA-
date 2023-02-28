/** @type {import('next').NextConfig} */
const withPWA = require("@ducanh2912/next-pwa").default({
  dest: "public",
});

module.exports = withPWA({
  // Next.js config
  experimental: {
    appDir: true,
  },
  images: {
    domains: ["lh3.googleusercontent.com"]
  },
  typescript: {
    // !! WARN !!
    // Dangerously allow production builds to successfully complete even if
    // your project has type errors.
    // !! WARN !!
    ignoreBuildErrors: true,
  },
});

// const nextConfig = {
//   experimental: {
//     appDir: true,
//   },
//   images: {
//     domains: ["lh3.googleusercontent.com"]
//   },
//   typescript: {
//     // !! WARN !!
//     // Dangerously allow production builds to successfully complete even if
//     // your project has type errors.
//     // !! WARN !!
//     ignoreBuildErrors: true,
//   },
// }
//
//
// module.exports = nextConfig
