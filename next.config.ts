import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export',
  images: {
    unoptimized: true,
  },
  webpack(config, options) {
    config.module.rules.push({
      test: /\.(mp4|webm|ogg|swf|ogv|mov|pdf)$/i,
      type: 'asset/resource',
      generator: {
        filename: 'static/media/[name].[hash][ext]',
        publicPath: '/_next/',
      }
    });
    return config;
  },
};

export default nextConfig;
