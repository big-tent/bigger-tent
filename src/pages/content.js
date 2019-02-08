import React from "react"
import { graphql } from "gatsby"

import undrawbuild from "../svg/undrawbuild.svg"

import Layout from "../components/Layout"
import Topper from "../components/Topper"
import Nav from "../components/Nav"
import GraphicHeader from "../components/GraphicHeader"
import ContentHolder from "../components/ContentHolder"
import BlurbMain from "../components/BlurbMain"
import Footer from "../components/Footer"

export default ({ location, data }) => (
  <Layout location={location}>
    <Topper color="hsl(30, 100%, 50%)" />
    <Nav navcolor="hsla(0,0%,8.6%,0.7)" />
    <ContentHolder>
      <GraphicHeader
        src={undrawbuild}
        alt="building blocks illustration"
        headerText={data.headerText.childMarkdownRemark.frontmatter.title}
      />
      <BlurbMain>
        <div
          dangerouslySetInnerHTML={{
            __html: data.headerText.childMarkdownRemark.html
          }}
        />
      </BlurbMain>
    </ContentHolder>
    <Footer color="hsl(30, 100%, 50%)" />
  </Layout>
)

export const query = graphql`
  query ContentQuery {
    headerText: file(
      relativePath: { eq: "markdown/content/contentheader.md" }
    ) {
      childMarkdownRemark {
        frontmatter {
          title
        }
        html
      }
    }
  }
`
