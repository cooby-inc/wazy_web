const isDev = process.env.NODE_ENV === 'development';
const basePath = isDev ? '' : '/wazy_web';

/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  distDir: './dist',
  basePath,
  assetPrefix: basePath,
};

export default nextConfig;
