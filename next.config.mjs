/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "**", // Allow images from any HTTPS domain
      },
      {
        protocol: "http",
        hostname: "**", // Allow images from any HTTP domain
      },
    ],
  },
  // Add these settings for better development performance
  swcMinify: true, // Enable SWC-based minification for faster builds
  reactStrictMode: false, // Turn off strict mode in development for faster rendering
  productionBrowserSourceMaps: false, // Disable source maps for faster development builds
  webpack: (config, { dev }) => {
    if (dev) {
      config.watchOptions = {
        poll: 1000, // Poll for changes every second to reduce load
        aggregateTimeout: 300, // Delay the build after the first change for smoother dev experience
      };
    }
    return config;
  },
};

export default nextConfig;
