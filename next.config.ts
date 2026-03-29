import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  reactCompiler: true,
  turbopack: {
    rules: {
      "*.{glsl,vert,frag}": {
        loaders: ["raw-loader"],
        as: "*.js",
      },
    },
  },

};

export default nextConfig;
