import React from "react"
import { graphql } from "gatsby"

import Layout from "../components/layout"
import Header from "../components/header"

export default ({ data }) => (
  <Layout>
    <Header headerText="About us" />
    <p>About {data.site.siteMetadata.title}</p>
  </Layout>
)

export const query = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
  }
`
