import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  images: {
    domains: ['res.cloudinary.com'],
  },
  i18n: {
    locales: ['en-US', 'pl-PL'],
    defaultLocale: 'en-US',
  },
};

export default nextConfig;
