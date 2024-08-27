/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "**", // This allows images from any HTTPS domain
      },
      {
        protocol: "http",
        hostname: "**", // This allows images from any HTTP domain
      },
    ],
  },
};

export default nextConfig;
