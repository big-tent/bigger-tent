import React from "react"
import { graphql } from "gatsby"

import Layout from "../components/layout"
import Topper from "../components/topper"
import Nav from "../components/nav"
import BannerPic from "../components/bannerimage"
import Header from "../components/header"
import ContentHolder from "../components/contentholder"
import BlurbMain from "../components/blurbmain"
import ContentContainer from "../components/contentcontainer"
import Footer from "../components/footer"

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
    <Footer color="hsl(240, 43.6%, 38.2%)" />
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
