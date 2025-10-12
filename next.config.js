/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  
  // Fix for multiple lockfiles warning on Vercel
  outputFileTracingRoot: __dirname,
  
  // Explicitly set output directory for Vercel
  distDir: '.next',
  
  // Experimental features disabled for now
  // experimental: {
  //   optimizeCss: true,
  // },

  // Image optimization
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.ctfassets.net',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'res.cloudinary.com',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
        pathname: '/**',
      },
    ],
    formats: ['image/avif', 'image/webp'],
  },

  // i18n is handled by middleware.ts for App Router

  // Environment variables available on the client side
  env: {
    NEXT_PUBLIC_CONTENTFUL_SPACE_ID: process.env.REACT_APP_CONTENTFUL_SPACE_ID,
    NEXT_PUBLIC_CONTENTFUL_ACCESS_TOKEN: process.env.REACT_APP_CONTENTFUL_ACCESS_TOKEN,
    NEXT_PUBLIC_CONTENTFUL_PREVIEW_TOKEN: process.env.REACT_APP_CONTENTFUL_PREVIEW_TOKEN,
    NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME: process.env.REACT_APP_CLOUDINARY_CLOUD_NAME,
  },

  // Redirects and rewrites
  async redirects() {
    return [
      {
        source: '/home',
        destination: '/',
        permanent: true,
      },
    ];
  },

  // Headers for security
  async headers() {
    return [
      {
        source: '/:path*',
        headers: [
          {
            key: 'X-DNS-Prefetch-Control',
            value: 'on',
          },
          {
            key: 'X-Content-Type-Options',
            value: 'nosniff',
          },
          {
            key: 'X-Frame-Options',
            value: 'SAMEORIGIN',
          },
          {
            key: 'X-XSS-Protection',
            value: '1; mode=block',
          },
          {
            key: 'Referrer-Policy',
            value: 'origin-when-cross-origin',
          },
        ],
      },
    ];
  },

  // Webpack configuration for compatibility
  webpack: (config) => {
    config.resolve.fallback = { fs: false, path: false };
    return config;
  },
};

module.exports = nextConfig;

