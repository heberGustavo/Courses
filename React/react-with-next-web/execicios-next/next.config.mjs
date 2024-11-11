/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  env: {
    //{process.env.dbPath}
    dbPath: 'mysql...'
  }
};

export default nextConfig;
