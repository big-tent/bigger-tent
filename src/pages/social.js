import React from "react"
import { graphql } from "gatsby"

import Layout from "../components/Layout"
import Topper from "../components/Topper"
import Nav from "../components/Nav"
import BannerPic from "../components/BannerPic"
import Header from "../components/Header"
import ContentHolder from "../components/contentholder"
import BlurbMain from "../components/blurbmain"
import ColourSection from "../components/coloursection"
import Footer from "../components/Footer"

export default ({ location, data }) => (
  <Layout location={location}>
    <Topper color="hsl(326.9, 88.2%, 56.9%, 0.8)" />
    <Nav navcolor="hsl(0, 0%, 22.6%)" />
    <BannerPic
      fluid={data.bannerImage.childImageSharp.fluid}
      alt="Birds on a branch"
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
    <ColourSection
      color="hsla(330, 93%, 88%, 0.3)"
      heading={data.managementText.childMarkdownRemark.frontmatter.title}
      copy={
        <p
          dangerouslySetInnerHTML={{
            __html: data.managementText.childMarkdownRemark.html
          }}
        />
      }
    />
    <ColourSection
      color="hsla(330, 93%, 88%, 0.3)"
      heading={data.consultancyText.childMarkdownRemark.frontmatter.title}
      copy={
        <p
          dangerouslySetInnerHTML={{
            __html: data.consultancyText.childMarkdownRemark.html
          }}
        />
      }
    />
    <ColourSection
      color="hsla(330, 93%, 88%, 0.3)"
      heading={data.auditText.childMarkdownRemark.frontmatter.title}
      copy={
        <p
          dangerouslySetInnerHTML={{
            __html: data.auditText.childMarkdownRemark.html
          }}
        />
      }
    />
    <Footer color="#f2309b" />
  </Layout>
)

export const query = graphql`
  fragment SocialCopy on File {
    childMarkdownRemark {
      frontmatter {
        title
      }
      html
    }
  }
  query SocialQuery {
    headerText: file(relativePath: { eq: "markdown/social/socialheader.md" }) {
      ...SocialCopy
    }
    managementText: file(
      relativePath: { eq: "markdown/social/socialmanagement.md" }
    ) {
      ...SocialCopy
    }
    consultancyText: file(
      relativePath: { eq: "markdown/social/socialconsult.md" }
    ) {
      ...SocialCopy
    }
    auditText: file(relativePath: { eq: "markdown/social/socialaudit.md" }) {
      ...SocialCopy
    }
    bannerImage: file(
      relativePath: { eq: "arjan-stalpers-1367087-unsplash.jpg" }
    ) {
      childImageSharp {
        fluid(maxWidth: 1000) {
          ...GatsbyImageSharpFluid_withWebp_tracedSVG
        }
      }
    }
  }
`
