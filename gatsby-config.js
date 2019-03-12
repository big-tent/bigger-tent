const dotenv = require("dotenv")

if (process.env.ENVIRONMENT !== "production") {
  dotenv.config()
}

const { spaceId, accessToken } = process.env

module.exports = {
  siteMetadata: {
    title: `Big Tent`
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
    `gatsby-plugin-styled-components`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Big Tent`,
        short_name: `Big Tent`,
        start_url: `/`,
        background_color: `#161616`,
        theme_color: `#161616`,
        display: `standalone`,
        icon: `src/images/big-tent-icon.png`,
        include_favicon: true
      }
    },
    `gatsby-plugin-offline`,
    `react-icons-kit`
  ]
}
