import React from "react"
import styled from "styled-components"
import { graphql } from "gatsby"
import Img from "gatsby-image"
import SEO from "../components/seo"

import Layout from "../components/layout"
import Topper from "../components/topper"
import Nav from "../components/nav"
import HeroLogo from "../components/herologo"

const BackgroundImage = styled(Img)`
  min-height: 100vh;
  left: 0;
  object-fit: cover;
  position: absolute;
  width: 100vw;
  top: 0;
  z-index: -1;
`

export default ({ data, location }) => (
  <Layout location={location}>
    <SEO title="Home" keywords={[`Big`, `Tent`, `web`, `social`, `content`]} />
    <Topper color="hsla(0, 0%, 18.6%, 0.4)" />
    <Nav navcolor="hsl(30, 100%, 50%)" />
    <BackgroundImage
      fluid={data.backgroundImage.childImageSharp.fluid}
      alt="campfire"
    />
    <HeroLogo />
  </Layout>
)

export const query = graphql`
  query {
    backgroundImage: file(
      relativePath: { eq: "james-owen-656170-unsplash.jpg" }
    ) {
      childImageSharp {
        fluid(maxWidth: 1000) {
          ...GatsbyImageSharpFluid_withWebp_tracedSVG
        }
      }
    }
    allMarkdownRemark {
      edges {
        node {
          frontmatter {
            title
          }
        }
      }
    }
  }
`
