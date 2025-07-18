/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  images: {
    domains: ["ui-avatars.com"],
  },
  sassOptions: {
    implementation: "sass-embedded",
  },
};

module.exports = nextConfig;
