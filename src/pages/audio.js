import React from "react"
import styled from "styled-components"
import { graphql } from "gatsby"

import SEO from "../components/seo"
import Layout from "../components/layout"
import Topper from "../components/topper"
import Nav from "../components/nav"
import Header from "../components/header"
import BannerPic from "../components/bannerimage"
import ContentHolder from "../components/contentholder"
import BlurbMain from "../components/blurbmain"
import CardGrid from "../components/cardgrid"
import GridCard from "../components/gridcard"
import Footer from "../components/footer"

const CardTopper = styled.div`
  background: ${props => props.color};
  clip-path: polygon(0 0, 100% 0, 100% 75%, 0% 100%);
  height: 100px;
  width: 110%;
`

export default ({ location, data }) => (
  <Layout location={location}>
    <SEO
      title="Audio"
      keywords={[`voice `, `audio`, `flash briefing`, `Alexa`]}
    />
    <Topper color="hsla(0, 0%, 8.6%, 0.8)" />
    <Nav navcolor="hsl(31.6, 92.5%, 52.5%)" />
    <BannerPic
      fluid={data.bannerImage.childImageSharp.fluid}
      alt="Child drawing"
    />
    <ContentHolder>
      <BlurbMain>
        <Header headerText="Audio" />
        <div
          dangerouslySetInnerHTML={{
            __html: data.headerText.childMarkdownRemark.html
          }}
        />
      </BlurbMain>
      <CardGrid>
        <GridCard>
          <CardTopper color="red">
            <h2>Hello</h2>
          </CardTopper>
        </GridCard>
        <GridCard>
          <CardTopper color="blue" />
        </GridCard>
        <GridCard>
          <CardTopper color="yellow" />
        </GridCard>
      </CardGrid>
    </ContentHolder>
    <Footer color="hsl(30, 100%, 50%)" />
  </Layout>
)

export const query = graphql`
  fragment AudioCopy on File {
    childMarkdownRemark {
      frontmatter {
        title
      }
      html
    }
  }

  query AudioQuery {
    headerText: file(
      relativePath: { eq: "markdown/content/contentheader.md" }
    ) {
      ...ContentCopy
    }
    animationText: file(
      relativePath: { eq: "markdown/content/contentanimation.md" }
    ) {
      ...ContentCopy
    }
    bannerImage: file(relativePath: { eq: "rawpixel-463437-unsplash.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 1000) {
          ...GatsbyImageSharpFluid_withWebp_tracedSVG
        }
      }
    }
  }
`
