import nextMDX from "@next/mdx";

const withMDX = nextMDX();

/** @type {import('next').NextConfig} */
const nextConfig = {
  // see: https://www.freecodecamp.org/news/how-to-deploy-next-js-app-to-github-pages
  output: "export",
  // Configure `pageExtensions` to include MDX files
  pageExtensions: ["js", "jsx", "mdx", "ts", "tsx"],
  // set the base path as by default, nextjs maps all static assets to /,
  // but Github Pages uses the project name, in my case, /ashrielbrian
  basePath: "/ashrielbrian",
};

export default withMDX(nextConfig);
