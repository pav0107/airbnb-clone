/** @type {import("next").NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ['links.papareact.com'],
  },
  env: {
    mapbox_key:
      'pk.eyJ1IjoicGF2MDEwNyIsImEiOiJjbDlza2dseGMwMjdrM29zOTR4bzljbjA1In0.Sixdxr1zHmad4wwiS8e7kA',
  },
};

module.exports = nextConfig;
