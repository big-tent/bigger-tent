import React from "react"
import { graphql } from "gatsby"
import { Video } from "cloudinary-react"
import styled from "styled-components"

import undrawbuild from "../svg/undrawbuild.svg"

import Layout from "../components/Layout"
import Topper from "../components/Topper"
import Nav from "../components/Nav"
import GraphicHeader from "../components/GraphicHeader"
import ContentHolder from "../components/ContentHolder"
import BlurbMain from "../components/BlurbMain"
import ColourSection from "../components/ColourSection"
import Footer from "../components/Footer"

const VideoHolder = styled(Video)`
  max-width: 300px;
`

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
    <ColourSection
      color="hsla(30, 100%, 70%, 0.1)"
      heading={data.animationText.childMarkdownRemark.frontmatter.title}
      copy={
        <p
          dangerouslySetInnerHTML={{
            __html: data.animationText.childMarkdownRemark.html
          }}
        />
      }
    />
    <VideoHolder
      cloudName="big-tent"
      publicId="Videos/1f_getting-bedtime-off-to-a-flying-start"
      controls
    />
    <ColourSection
      color="hsla(30, 100%, 60%, 0.2)"
      heading={data.animationText.childMarkdownRemark.frontmatter.title}
      copy={
        <p
          dangerouslySetInnerHTML={{
            __html: data.animationText.childMarkdownRemark.html
          }}
        />
      }
    />
    <ColourSection
      color="hsla(30, 100%, 50%, 0.3)"
      heading={data.animationText.childMarkdownRemark.frontmatter.title}
      copy={
        <p
          dangerouslySetInnerHTML={{
            __html: data.animationText.childMarkdownRemark.html
          }}
        />
      }
    />
    <Footer color="hsl(30, 100%, 50%)" />
  </Layout>
)

export const query = graphql`
  fragment ContentCopy on File {
    childMarkdownRemark {
      frontmatter {
        title
      }
      html
    }
  }

  query ContentQuery {
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
  }
`
