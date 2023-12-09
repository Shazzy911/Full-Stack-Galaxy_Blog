/** @type {import('next').NextConfig} */
const path = require('path')
const dotenv = require('dotenv');

dotenv.config();

const nextConfig = {
  images: {
    domains: ['img.freepik.com', 'images.unsplash.com'],
  },
  sassOptions: {
    // includePaths: ['styles'],
    includePaths: [path.join(__dirname, 'styles')],
  },
};

module.exports = nextConfig;
