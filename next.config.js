/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: {
    dirs: ['src'],
  },

  reactStrictMode: true,
  swcMinify: true,

  images: {
    domains: ['res.cloudinary.com'],
    // remotePatterns: [
    //   {
    //     protocol: 'https',
    //     hostname: 'cdn.sanity.io',
    //     port: '',
    //     pathname: '/about/**',
    //   },
    // ],
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
};

module.exports = nextConfig;
