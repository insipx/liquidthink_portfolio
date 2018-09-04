module.exports = {
  plugins: [
    'gatsby-plugin-sass',
    {
      resolve: `gatsby-plugin-google-fonts`,
      options: {
        fonts: [
          `open sans\:300,600`
        ]
      }
    },
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: "<your-tracking-id-here>",
        head: true
      }
    },
  ],
  siteMetadata: {
    title: 'Andrew Plaza',
    description: 'Student/Freelance Software Engineer/Open-Source Contributor',
    keywords: 'full stack, product engineer, portfolio, personal website, blog, open-source, blockchain, ethereum, parity',
    url: 'https://www.liquidthink.net'
  }
};
