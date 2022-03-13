module.exports = {
  siteMetadata: {
    title: `Gatsby Typescript Suite Starter`,
    description: `A Gatsby starter for typescript`,
    author: `Sam TS Chan`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `assets`,
        path: `${__dirname}/src/assets`,
      },
    },
    {
      resolve: `gatsby-plugin-postcss`,
      options: {
        postCssPlugins: [require(`postcss-preset-env`)({ stage: 0 })],
      },
    },
    {
      resolve: `gatsby-plugin-sass`,
      options: {
        implementation: require("sass"),
      },
    },
    `gatsby-plugin-less`,
    `gatsby-plugin-eslint`,
    `gatsby-plugin-image`,
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `GatsbyJS`, // @FIXME: change name
        short_name: `GatsbyJS`, // @FIXME: change name
        start_url: `/`,
        background_color: `#ffffff`,
        theme_color: `#000000`,
        display: `standalone`,
        icon: `src/assets/gatsby-icon.png`, // @FIXME: change image. This path is relative to the root of the site.
      },
    },
    `gatsby-plugin-offline`,
  ],
};
