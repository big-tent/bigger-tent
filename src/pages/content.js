import React from "react"
import { graphql } from "gatsby"

import Layout from "../components/Layout"
import Topper from "../components/Topper"
import Nav from "../components/Nav"
import BannerPic from "../components/BannerPic"
import Header from "../components/Header"
import ContentHolder from "../components/ContentHolder"
import BlurbMain from "../components/BlurbMain"
import VideoSection from "../components/VideoSection"
import VideoHolder from "../components/VideoHolder"
import Footer from "../components/Footer"

export default ({ location, data }) => (
  <Layout location={location}>
    <Topper color="hsla(30, 100%, 50%, 0.9)" />
    <Nav navcolor="hsla(0,0%,8.6%,0.7)" />
    <BannerPic
      fluid={data.bannerImage.childImageSharp.fluid}
      alt="Child drawing"
    />
    <ContentHolder>
      <Header
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
    <VideoSection color="hsl(30, 100%, 95%)" heading="Animations">
      <VideoHolder publicId="Videos/1f_getting-bedtime-off-to-a-flying-start" />
      <VideoHolder publicId="Videos/alluxi_1" />
    </VideoSection>
    <VideoSection
      color="hsl(30, 100%, 95%)"
      heading="Audiograms"
      copy={
        <p
          dangerouslySetInnerHTML={{
            __html: data.animationText.childMarkdownRemark.html
          }}
        />
      }
    >
      <VideoHolder publicId="Videos/A_bit_about_the_product" />
      <VideoHolder publicId="Videos/Copy_of_Soti_post_TEDx" />
      <VideoHolder publicId="Videos/March_1_Social_Days_Made_by_Headliner" />
    </VideoSection>
    <VideoSection
      color="hsl(30, 100%, 95%)"
      heading="Videos"
      copy={
        <p
          dangerouslySetInnerHTML={{
            __html: data.animationText.childMarkdownRemark.html
          }}
        />
      }
    >
      <VideoHolder publicId="Videos/wk1_Water" />
      <VideoHolder publicId="Videos/wk2_summer-sports-mason-clinic_1" />
    </VideoSection>
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
    bannerImage: file(relativePath: { eq: "rawpixel-463437-unsplash.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 1000) {
          ...GatsbyImageSharpFluid_withWebp_tracedSVG
        }
      }
    }
  }
`
