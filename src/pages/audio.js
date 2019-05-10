import React from "react"
import styled from "styled-components"
import { graphql } from "gatsby"
import Img from "gatsby-image"

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
  height: 15%;
  position: absolute;
  width: 100%;
  z-index: 1;
`

const CardHeader = styled.h2`
  color: #fefefe;
  margin-top: 5px;
  margin-left: 10px;
`

const CardImage = styled(Img)`
  height: 50%;
  object-fit: cover;
  position: absolute;
`

const CardCopy = styled.p`
  color: #161616;
  padding: 20px 20px 0 20px;
`

export default ({ location, data }) => (
  <Layout location={location}>
    <SEO
      title="Audio"
      keywords={[`voice`, `audio`, `flash briefing`, `Alexa`]}
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
          <CardTopper color="hsl(30, 100%, 50%)">
            <CardHeader>Voiceover</CardHeader>
          </CardTopper>
          <CardImage fluid={data.bannerImage.childImageSharp.fluid} />
          <CardCopy>Hello hello</CardCopy>
        </GridCard>
        <GridCard>
          <CardTopper color="hsl(30, 100%, 50%)">
            <CardHeader>Audio production</CardHeader>
          </CardTopper>
          <CardImage fluid={data.bannerImage.childImageSharp.fluid} />
          <CardCopy>Hello hello</CardCopy>
        </GridCard>
        <GridCard>
          <CardTopper color="hsl(30, 100%, 50%)">
            <CardHeader>Flash briefings</CardHeader>
          </CardTopper>
          <CardImage fluid={data.bannerImage.childImageSharp.fluid} />
          <CardCopy>Hello hello</CardCopy>
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
