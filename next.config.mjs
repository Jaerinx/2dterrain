const isProd = process.env.NODE_ENV === "production";
const nextConfig = {
  reactStrictMode: true,
  images: {
    unoptimized: true // Disable default image optimization
  },
  assetPrefix: isProd ? "/2dterrain/" : "",
  basePath: isProd ? "/2dterrain" : "",
  output: "export"
};

export default nextConfig;
