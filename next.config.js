module.exports = {
  async redirects() {
    return [
      {
        source: '/problems/:path*',
        destination: '/ssr/problems/:path*',
        permanent: false,
        has: [
          {
            type: 'header',
            key: 'User-Agent',
            value:
              '(.*)Googlebot|Bingbot|Slurp|DuckDuckBot|Baiduspider|facebot|facebookcatalog|facebookexternalhit|Twitterbot(.*)',
          },
        ],
      },
    ];
  },
};
