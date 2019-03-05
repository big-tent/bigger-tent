import React from "react"
import { graphql } from "gatsby"
import styled from "styled-components"
import Img from "gatsby-image"

import Layout from "../components/layout"
import Header from "../components/header"
import Topper from "../components/topper"
import BannerPic from "../components/bannerpic"
import BlurbMain from "../components/blurbmain"
import Nav from "../components/nav"
import Footer from "../components/footer"

const AboutWrapper = styled.main`
  background: #fefefe;
  height: 100%;
  width: 100vw;
`

const ContentWrapper = styled.section`
  padding: 10vh 10vw 10vh;
`

const ImageList = styled.ul`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  grid-auto-rows: 200px;
  grid-gap: 10px;
  margin: 0;
  @media (min-width: 600px) {
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    grid-auto-rows: 300px;
  }
  @media (min-width: 900px) {
    grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
    grid-auto-rows: 350px;
  }
`

const ImageListItem = styled.li`
  background: #fefefe;
  border: 1px solid #3c3c3c;
  list-style-type: none;
  overflow: hidden;
`

const Image = styled(Img)`
  object-fit: cover;
  height: 100%;
  width: 100%;
`

export default ({ data, location }) => (
  <Layout location={location}>
    <AboutWrapper>
      <Topper color="hsla(0, 0%, 8.6%, 0.8)" />
      <Nav navcolor="hsl(31.6, 92.5%, 52.5%)" />
      <BannerPic
        fluid={data.bannerImage.childImageSharp.fluid}
        alt="Tents in a misty field"
      />
      <ContentWrapper>
        <Header headerText="Why Big Tent" />
        <BlurbMain>
          <div
            dangerouslySetInnerHTML={{
              __html: data.contentfulWebsiteCopy.copy.childMarkdownRemark.html
            }}
          />
        </BlurbMain>
        <ImageList>
          {data.allContentfulImage.edges.map(edge => (
            <ImageListItem>
              <Image fluid={edge.node.image.fluid} alt={edge.node.caption} />
            </ImageListItem>
          ))}
        </ImageList>
      </ContentWrapper>
      <Footer color="hsla(0,0%,8.6%,0.7)" />
    </AboutWrapper>
  </Layout>
)

export const aboutQuery = graphql`
  query {
    allContentfulImage {
      edges {
        node {
          image {
            fluid {
              ...GatsbyContentfulFluid_withWebp
            }
          }
          caption
          slug
        }
      }
    }
    contentfulWebsiteCopy {
      copy {
        childMarkdownRemark {
          html
        }
      }
    }
    bannerImage: file(
      relativePath: { eq: "kilarov-zaneit-773502-unsplash.jpg" }
    ) {
      childImageSharp {
        fluid(maxWidth: 1000) {
          ...GatsbyImageSharpFluid_withWebp_tracedSVG
        }
      }
    }
  }
`
