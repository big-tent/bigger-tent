const dotenv = require("dotenv")

if (process.env.ENVIRONMENT !== "production") {
  dotenv.config()
}

const { spaceId, accessToken } = process.env

module.exports = {
  siteMetadata: {
    title: `Big Tent`,
    description: `Big Tent Media web design, social media management and content creation`,
    author: `Big Tent`
  },
  plugins: [
    {
      resolve: `gatsby-source-contentful`,
      options: {
        spaceId,
        accessToken
      }
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`
      }
    },
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
    `gatsby-transformer-remark`,
    `gatsby-plugin-styled-components`,
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `src`,
        path: `${__dirname}/src/`
      }
    },
    {
      resolve: `gatsby-plugin-typography`,
      options: {
        pathToConfigModule: `src/utilities/typography.js`
      }
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Big Tent`,
        short_name: `Big Tent`,
        start_url: `/`,
        background_color: `#161616`,
        theme_color: `#161616`,
        display: `standalone`,
        icon: `src/images/bigtentgreycircle.png`,
        include_favicon: true
      }
    },
    `gatsby-plugin-offline`,
    `react-icons-kit`
  ]
}
