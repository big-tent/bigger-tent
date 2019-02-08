import React from "react"
import { graphql } from "gatsby"

import undrawweb from "../svg/undrawweb.svg"

import Layout from "../components/Layout"
import Topper from "../components/Topper"
import Nav from "../components/Nav"
import ContentHolder from "../components/ContentHolder"
import GraphicHeader from "../components/GraphicHeader"
import BlurbMain from "../components/BlurbMain"
import ContentContainer from "../components/ContentContainer"
import Footer from "../components/Footer"

export default ({ location, data }) => (
  <Layout location={location}>
    <Topper color="#37378c" />
    <Nav navcolor="hsl(30, 100%, 50%)" />
    <ContentHolder>
      <GraphicHeader
        src={undrawweb}
        alt="web design illustration"
        headerText="Web design"
      />
      <BlurbMain>
        <div
          dangerouslySetInnerHTML={{
            __html: data.file.childMarkdownRemark.html
          }}
        />
      </BlurbMain>
      <ContentContainer />
    </ContentHolder>
    <Footer color="#37378c" />
  </Layout>
)

export const query = graphql`
  query WebQuery {
    file(name: { eq: "webcopy" }) {
      childMarkdownRemark {
        html
      }
    }
  }
`
