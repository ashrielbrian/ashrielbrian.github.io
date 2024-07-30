import nextMDX from "@next/mdx";

const withMDX = nextMDX();

/** @type {import('next').NextConfig} */
const nextConfig = {
  // see: https://www.freecodecamp.org/news/how-to-deploy-next-js-app-to-github-pages
  output: "export",
  // Configure `pageExtensions` to include MDX files
  pageExtensions: ["js", "jsx", "mdx", "ts", "tsx"],
};

export default withMDX(nextConfig);
