import path from "path";



/** @type {import('next').NextConfig} */
const nextConfig = {
   sassOptions: {
      includePaths: [path.join(process.cwd(), "src/shared/scss/base")],
      additionalData: `@import "_vars.scss"; @import "_mixins.scss";`,
   },
   images: {
      domains: ['res.cloudinary.com']
   },
};

export default nextConfig;
