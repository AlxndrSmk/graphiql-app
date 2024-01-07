/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    forceSwcTransforms: true,
    swcPlugins: [['swc-plugin-coverage-instrument', {}]],
  },
  reactStrictMode: true,
  swcMinify: true,
};

module.exports = nextConfig;
