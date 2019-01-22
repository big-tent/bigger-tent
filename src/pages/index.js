import React from "react"
import styled from "styled-components"
import { graphql } from "gatsby"
import Img from "gatsby-image"

import Layout from "../components/Layout"
import Topper from "../components/Topper"
import HeroLogo from "../components/HeroLogo"

const BackgroundImage = styled(Img)`
  height: 100vh;
  left: 0;
  object-fit: cover;
  position: fixed;
  width: 100vw;
  top: 0;
  z-index: -1;
`

export default ({ data, location }) => (
  <Layout location={location}>
    <Topper color="hsla(0,0%,8.6%,0.7)" />
    <BackgroundImage
      fluid={data.backgroundImage.childImageSharp.fluid}
      alt="campfire"
    />
    <HeroLogo />
  </Layout>
)

export const query = graphql`
  query {
    backgroundImage: file(relativePath: { eq: "firepit.jpg" }) {
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
