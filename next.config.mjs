/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      { protocol: "https", hostname: "**" },
    ],
  },
  // Allow Three.js canvas imports
  transpilePackages: ["three"],
};

export default nextConfig;
