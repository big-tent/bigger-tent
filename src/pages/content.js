import React from "react"
import { StaticQuery, graphql } from "gatsby"

import undrawbuild from "../svg/undrawbuild.svg"

import Layout from "../components/Layout"
import Topper from "../components/Topper"
import GraphicHeader from "../components/GraphicHeader"
import ContentHolder from "../components/ContentHolder"
import BlurbMain from "../components/BlurbMain"

export default ({ location }) => (
  <Layout location={location}>
    <Topper color="#f2ba05" />
    <ContentHolder>
      <GraphicHeader
        src={undrawbuild}
        alt="building blocks illustration"
        headerText="Content creation"
      />
      <BlurbMain>
        <StaticQuery
          query={graphql`
            query ContentQuery {
              allMarkdownRemark {
                edges {
                  node {
                    html
                  }
                }
              }
            }
          `}
          render={data => (
            <div>{data.allMarkdownRemark.edges[0].node.html}</div>
          )}
        />
      </BlurbMain>
    </ContentHolder>
  </Layout>
)
