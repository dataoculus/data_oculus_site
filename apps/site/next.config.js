/** @type {import('next').NextConfig} */

const nextConfig = {
  reactStrictMode: false,
  swcMinify: true,
  // Use static export for GitHub Pages, standalone for Docker
  output: process.env.GITHUB_PAGES ? "export" : "standalone",
  
  // Configure for GitHub Pages deployment
  // If deploying to a custom domain, leave basePath empty
  // If deploying to username.github.io/repository-name, use the repository name
  basePath: process.env.GITHUB_PAGES ? "" : "",
  assetPrefix: process.env.GITHUB_PAGES ? "" : "",
  
  // Disable image optimization for static export
  images: {
    unoptimized: process.env.GITHUB_PAGES ? true : false,
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
  
  // Ensure trailing slashes for GitHub Pages
  trailingSlash: process.env.GITHUB_PAGES ? true : false,
};

module.exports = nextConfig;
