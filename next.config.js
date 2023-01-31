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
            value: 'Googlebot',
          },
          // {
          //   type: 'header',
          //   key: 'User-Agent',
          //   value: 'facebookcatalog/1.0',
          // },
          // {
          //   type: 'header',
          //   key: 'User-Agent',
          //   value: 'facebookexternalhit/1.1',
          // },
        ],
      },
    ];
  },
};
