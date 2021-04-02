"use strict";

require("dotenv").config({
  path: ".env.".concat(process.env.NODE_ENV)
});

module.exports = {
  siteMetadata: {
    title: "Vermont Website Development Services",
    description: "Website  development services in Vermont. We build fast and secure websites that help your site get to the top ranks of search engines.",
    author: "@Vermont Web Development",
    titleTemplate: "%s | Vermont Website Development Services",
    siteUrl: "https://www.vtwebdevelopment.com",
    image: "/images/vt-web-development.png",
    twitterUsername: "@vtwebdev"
  },
  plugins: [// {
  //   resolve: `gatsby-plugin-google-analytics`,
  //   options: {
  //     // trackingId: "UA-190135241-1",
  //     // this option places the tracking script into the head of the DOM
  //     head: true,
  //     // other options
  //   },
  // },
  "gatsby-plugin-preact", "gatsby-plugin-react-helmet", "gatsby-plugin-sitemap", "gatsby-plugin-image", "gatsby-plugin-sharp", "gatsby-transformer-sharp", // {
  //   resolve: "gatsby-source-storyblok",
  //   options: {
  //     accessToken: "yDEAzTrksUHqy4Ks3rrQOAtt",
  //     version: "draft",
  //     languages: ["de", "at"], // Optional parameter. Omission will retrieve all languages by default.
  //     homeSlug: "home",
  //     version: process.env.NODE_ENV === "production" ? "published" : "draft",
  //   },
  // },
  // {
  //   resolve: "gatsby-source-graphql",
  //   options: {
  //     typeName: "WPGraphQL",
  //     fieldName: "wpgraphql",
  //     url: `http://kissaneassociates.local/graphql`,
  //   },
  // },
  {
    resolve: "gatsby-source-wordpress",
    options: {
      url: "http://kissaneassociates.local/graphql" // includedRoutes: [
      //   "**/categories",
      //   "**/posts",
      //   "**/pages",
      //   "**/media",
      //   "**/tags",
      //   "**/taxonomies",
      //   "**/users",
      //   "**/*/*/menus",
      //   "**/*/*/menu-locations",
      // ],

    }
  }, {
    resolve: "gatsby-source-filesystem",
    options: {
      name: "images",
      path: "".concat(__dirname, "/src/images")
    }
  }, {
    resolve: "gatsby-plugin-web-font-loader",
    options: {
      google: {
        families: ["Roboto: 100, 200, 300, 400, 500, 600, 700,900", "Poppins:  100, 200, 300, 400, 500, 600, 700,900"]
      }
    }
  }]
};