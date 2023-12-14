/** @type {import('next').NextConfig} */
const { i18n } = require('./next-i18next.config');
const nextConfig = {
  reactStrictMode: false,
  images: {
    domains: ['i.dummyjson.com'], // Add the domain here
  },
  i18n,
};

module.exports = nextConfig
