/** @type {import('next').NextConfig} */

const { withKeystone } = require('@keystone-6/core/next');
module.exports = withKeystone({
  reactStrictMode: true,
  compiler: {
    styledComponents: true, // https://styled-components.com/docs/advanced#nextjs
  },
});
