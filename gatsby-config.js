require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`,
})

module.exports = {
  siteMetadata: {
    title: `Vermont Website Development Services`,
    description: `Website  development services in Vermont. We build fast and secure websites that help your site get to the top ranks of search engines.`,
    author: `@Vermont Web Development`,
    titleTemplate: `%s | Vermont Website Development Services`,
    siteUrl: `https://www.vtwebdevelopment.com`,
    image: `/images/vt-web-development.png`,
    twitterUsername: `@vtwebdev`,
  },
  plugins: [
    // {
    //   resolve: `gatsby-plugin-google-gtag`,
    //   options: {
    //     // You can add multiple tracking ids and a pageview event will be fired for all of them.
    //     trackingIds: [
    //       "Google Analytics ID", // Google Analytics / GA
    //     ],
    //     // This object is used for configuration specific to this plugin
    //     pluginConfig: {
    //       // Puts tracking script in the head instead of the body
    //       head: true,
    //       // Setting this parameter is also optional
    //       respectDNT: true,
    //     },
    //   },
    // },
    `gatsby-plugin-preact`,
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-sitemap`,
    `gatsby-plugin-image`,
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    // {
    //   resolve: `gatsby-plugin-webfonts`,
    //   options: {
    //     fonts: {
    //       google: [
    //         {
    //           family: "Raleway",
    //           variants: ["400", "500", "700", "900"],
    //         },
    //         {
    //           family: "Poppins",
    //           variants: ["400", "500", "700", "900"],
    //         },
    //         { family: "Josefin Sans" },
    //       ],
    //     },
    //   },
    // },
    // {
    //   resolve: "gatsby-source-prismic",
    //   options: {
    //     repositoryName: process.env.PRISMIC_REPOSITORY_NAME,
    //     accessToken: process.env.PRISMIC_ACCESS_TOKEN,
    //     schemas: {
    //       benefits: require("./src/schemas/benefits.json"),
    //     },
    //   },
    // },
  ],
}
