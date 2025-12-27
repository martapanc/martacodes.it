/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,

  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'res.cloudinary.com',
      },
    ],
  },

  // SVGR
  webpack(config) {
    config.module.rules.push({
      test: /\.svg$/i,
      issuer: /\.[jt]sx?$/,
      use: [
        {
          loader: '@svgr/webpack',
          options: {
            typescript: true,
            icon: true,
          },
        },
      ],
    });

    return config;
  },

  staticPageGenerationTimeout: 600,

  turbopack: {
    root: __dirname,
  },

  async rewrites() {
    return [
      {
        source: '/downloads/cv.pdf',
        destination: '/api/cv.pdf',
      },
    ];
  },
};

module.exports = nextConfig;
