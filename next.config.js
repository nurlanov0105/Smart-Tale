const path = require("path");

/** @type {import('next').NextConfig} */
const nextConfig = {
   reactStrictMode: true,
   swcMinify: true,
   compiler: {
      removeConsole: process.env.NODE_ENV !== "development",
   },
   sassOptions: {
      includePaths: [path.join(process.cwd(), "src/shared/scss/base")],
      additionalData: `@import "_vars.scss"; @import "_mixins.scss";`,
   },
   images: {
      domains: ['res.cloudinary.com']
   },
};

const withPWA = require("next-pwa")({
   dest: "public",
   disable: process.env.NODE_ENV === "development",
   register: true,
   skipWaiting: true,
});

module.exports = withPWA(nextConfig);

//export default nextConfig;
