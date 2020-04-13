module.exports = {
  siteMetadata: {
    title: `Antoine Abhay`,
    description: `This is Antoine Abhay's website. Learn more about me and my projects here.`,
    author: `@gatsbyjs`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-typography`,
      options: {
        pathToConfigModule: `src/utils/typography`,
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Antoine's Webiste`,
        short_name: `Antoine`,
        start_url: `/`,
        background_color: `#eeeeee`,
        theme_color: `#eeeeee`,
        display: `minimal-ui`,
        icon: `src/images/my-icon.svg`, // This path is relative to the root of the site.
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
