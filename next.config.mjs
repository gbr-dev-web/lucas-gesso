/** @type {import('next').NextConfig} */
const isProd = process.env.NODE_ENV === "production";

const nextConfig = {
  reactStrictMode: true,
  basePath: isProd ? "/lucas-gesso" : "",
  assetPrefix: isProd ? "/lucas-gesso/" : "",
  images: {
    loader: "default",
    path: isProd ? "/lucas-gesso/_next/image" : "/_next/image",
  },
};

export default nextConfig;
