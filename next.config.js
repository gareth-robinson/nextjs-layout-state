const path = require("path");
const webpack = require("webpack");

const nextConfig = {
  basePath: '/client',
  experimental: {
    transpilePackages: ['@foresee/component-library'],
  },
  webpack (config, { dev }) {
    console.log("ARE WE LIKE TOTALLY EVEN IN HERE?")
    config.resolve.alias = {
      ...config.resolve.alias,
      'cx-component-library': '@foresee/component-library/lib/component-library',
    };
    return config;
  },
  async redirects() {
    return [
      {
        source: '/',
        destination: '/client/dashboards',
        permanent: false,
        basePath: false
      }
    ]
  }
}

module.exports = nextConfig;

