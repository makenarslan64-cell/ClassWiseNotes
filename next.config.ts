// import type { NextConfig } from "next";

// const nextConfig: NextConfig = {
//   webpack: (config) => {
//     config.module.rules.push({
//       test: /pdf\.worker\.min\.js/,
//       type: 'asset/resource',
//     });
//     return config;
//   }
  
  
// };

// export default nextConfig;

// next.config.js (or next.config.mjs if using ESM)

import type { NextConfig } from "next";

/** @type {NextConfig} */
const nextConfig = {
  webpack: (config: { module: { rules: { test: RegExp; type: string; }[]; }; }) => {
    config.module.rules.push({
      test: /pdf\.worker\.min\.js/,
      type: 'asset/resource',
    });
    return config;
  },

};

export default nextConfig;
