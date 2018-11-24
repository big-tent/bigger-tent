import React from "react"
import { graphql } from "gatsby"

import undrawtwitter from "../svg/undrawtwitter.svg"

import Layout from "../components/Layout"
import Topper from "../components/Topper"
import ContentHolder from "../components/ContentHolder"
import GraphicHeader from "../components/GraphicHeader"
import BlurbMain from "../components/BlurbMain"
import ColourSection from "../components/ColourSection"
import Footer from "../components/Footer"

export default ({ location, data }) => (
  <Layout location={location}>
    <Topper color="#f2309b" />
    <ContentHolder>
      <GraphicHeader
        src={undrawtwitter}
        alt="twitter birds flying out of box"
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
      color="hsla(200, 85%, 87%, 0.3)"
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
      color="hsla(240, 4%, 80%, 0.3)"
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
    headerText: file(relativePath: { eq: "markdown/socialheader.md" }) {
      ...SocialCopy
    }
    managementText: file(relativePath: { eq: "markdown/socialmanagement.md" }) {
      ...SocialCopy
    }
    consultancyText: file(relativePath: { eq: "markdown/socialconsult.md" }) {
      ...SocialCopy
    }
    auditText: file(relativePath: { eq: "markdown/socialaudit.md" }) {
      ...SocialCopy
    }
  }
`
