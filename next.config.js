/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images:{
    domains:[
    "fitz-images.01hive.com",
    "mybayutcdn.bayut.com"
  ]}
}

module.exports = nextConfig
