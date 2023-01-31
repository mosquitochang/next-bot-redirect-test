module.exports = {
  async redirects() {
    return [
      {
        source: '/',
        destination: '/bot',
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
