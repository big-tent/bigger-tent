import React from "react"
import { graphql } from "gatsby"

import undrawbuild from "../svg/undrawbuild.svg"

import Layout from "../components/Layout"
import Topper from "../components/Topper"
import GraphicHeader from "../components/GraphicHeader"
import ContentHolder from "../components/ContentHolder"
import BlurbMain from "../components/BlurbMain"

export default ({ location, data }) => (
  <Layout location={location}>
    <Topper color="#f2ba05" />
    <ContentHolder>
      <GraphicHeader
        src={undrawbuild}
        alt="building blocks illustration"
        headerText="Content creation"
      />
      <BlurbMain>
        <div
          dangerouslySetInnerHTML={{
            __html: data.allMarkdownRemark.edges[0].node.html
          }}
        />
      </BlurbMain>
    </ContentHolder>
  </Layout>
)

export const query = graphql`
  query ContentQuery {
    allMarkdownRemark {
      edges {
        node {
          html
        }
      }
    }
  }
`
