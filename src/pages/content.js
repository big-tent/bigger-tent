import React from "react"
import { graphql } from "gatsby"
import SEO from "../components/seo"

import Layout from "../components/layout"
import Topper from "../components/topper"
import Nav from "../components/nav"
import Header from "../components/header"
import ContentHolder from "../components/contentholder"
import BlurbMain from "../components/blurbmain"
import Footer from "../components/footer"
import BannerPic from "../components/bannerimage"
import VideoHolder from "../components/videosholder"
import VideoSection from "../components/vidsection"

export default ({ location, data }) => (
  <Layout location={location}>
    <SEO
      title="Content creation"
      keywords={[
        `content`,
        `creation`,
        `animation`,
        `audiograms`,
        `videos`,
        `website content`,
        `content marketing`
      ]}
    />
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
