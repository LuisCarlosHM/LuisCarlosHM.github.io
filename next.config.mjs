/** @type {import('next').NextConfig} */
import path from "path";

const nextConfig = {
  output: "export",
  images: { unoptimized: true },
};

nextConfig.sassOptions = {
  includePaths: [path.join(new URL(import.meta.url).pathname, "public/styles")],
};

export default nextConfig;
