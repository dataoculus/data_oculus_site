/** @type {import('next').NextConfig} */

const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  output: "standalone", // for docker
  images: {
    domains: ["dataoculus.app", "www.dataoculus.app", "localhost"],
    remotePatterns: [
      {
        protocol: "https",
        hostname: "dataoculus.app",
        port: "",
      },
      {
        protocol: "https",
        hostname: "www.dataoculus.app",
        port: "",
      },
      {
        protocol: "http",
        hostname: "localhost",
        port: "",
      },
    ],
  },
};

module.exports = nextConfig;
