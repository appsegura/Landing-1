const nextConfig = {
  output: 'standalone',
  eslint: { ignoreDuringBuilds: true },
  images: { unoptimized: true },
  trailingSlash: true,

  headers: async () => [
    {
      source: '/:all*(svg|jpg|png)',
      locale: false,
      headers: [
        {
          key: 'Cache-Control',
          value: 'public, max-age=31536000, immutable',
        },
      ],
    },
  ],
};

module.exports = nextConfig;