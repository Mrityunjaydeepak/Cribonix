/** @type {import('next').NextConfig} */

const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "http", // Change to https if needed
        hostname: "cribonix.com", // Replace with your backend's domain
        port: "5000", // Backend port, if applicable
        pathname: "/**", // Allow all paths
      },
    ],
    unoptimized: true, // Optionally disable optimization if needed
  },
  // output: "export",
  // trailingSlash: true,
  // distDir: "OutP", // Customize the output directory if needed
};

export default nextConfig;
