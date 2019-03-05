import React from "react"
import { graphql } from "gatsby"

import Layout from "../components/Layout"
import Topper from "../components/Topper"
import Nav from "../components/Nav"
import BannerPic from "../components/BannerPic"
import Header from "../components/Header"
import ContentHolder from "../components/ContentHolder"
import BlurbMain from "../components/blurbmain"
import ContentContainer from "../components/ContentContainer"
import Footer from "../components/Footer"

export default ({ location, data }) => (
  <Layout location={location}>
    <Topper color="hsla(240, 43.6%, 38.2%, 0.9)" />
    <Nav navcolor="hsl(30, 100%, 50%)" />
    <BannerPic
      fluid={data.bannerImage.childImageSharp.fluid}
      alt="Spider's web"
    />
    <ContentHolder>
      <Header headerText="Web design" />
      <BlurbMain>
        <div
          dangerouslySetInnerHTML={{
            __html: data.headerText.childMarkdownRemark.html
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
    headerText: file(relativePath: { eq: "markdown/web/webcopy.md" }) {
      childMarkdownRemark {
        html
      }
    }
    bannerImage: file(
      relativePath: { eq: "michael-podger-43123-unsplash.jpg" }
    ) {
      childImageSharp {
        fluid(maxWidth: 1000) {
          ...GatsbyImageSharpFluid_withWebp_tracedSVG
        }
      }
    }
  }
`
