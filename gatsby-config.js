module.exports = {
  siteMetadata: {
    title: 'OZE Małopolska',
    description: 'Portal o odnawialnych źródłach energii w Małopolsce i Krakowie',
    siteUrl: 'https://oze-malopolska.netlify.app',
    author: 'Redakcja OZE Małopolska',
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    {
      resolve: 'gatsby-source-filesystem',
      options: { name: 'blog', path: `${__dirname}/content/blog` },
    },
    {
      resolve: 'gatsby-transformer-remark',
      options: {
        plugins: [],
      },
    },
  ],
};
