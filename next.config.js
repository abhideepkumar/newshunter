/** @type {import('next').NextConfig} */
// next.config.js
const withPlugins = require('next-compose-plugins');
const withTM = require('next-transpile-modules')(['tailwindcss']);

const nextConfig = {
  reactStrictMode: true,
  // Your Next.js configuration options here
}

module.exports = withPlugins([withTM], nextConfig);
