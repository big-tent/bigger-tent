import React from "react"
import { graphql } from "gatsby"
import styled from "styled-components"

import Layout from "../components/Layout"
import Header from "../components/Header"
import Topper from "../components/Topper"
import BlurbMain from "../components/BlurbMain"
import Nav from "../components/Nav"
import Footer from "../components/Footer"

const AboutWrapper = styled.div`
  background: #fefefe;
  height: 100%;
  width: 100vw;
`

const ContentWrapper = styled.main`
  padding: 20vh 10vw 10vh;
`

const ImageList = styled.ul`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  grid-auto-rows: 400px;
  grid-gap: 10px;
  margin: 0;
`

const ImageHolder = styled.li`
  background: #fefefe;
  border: 1px solid #3c3c3c;
  list-style-type: none;
  overflow: hidden;
`

const Image = styled.img`
  object-fit: cover;
  height: 100%;
  width: 100%;
`

export default ({ data, location }) => (
  <Layout location={location}>
    <AboutWrapper>
      <Topper color="hsla(0,0%,8.6%,0.7)" />
      <Nav navcolor="hsl(31.6, 92.5%, 52.5%)" />
      <ContentWrapper>
        <Header headerText="About us" />
        <BlurbMain>
          <div
            dangerouslySetInnerHTML={{
              __html:
                data.allContentfulWebsiteCopy.edges.node.copy
                  .childMarkdownRemark.html
            }}
          />
        </BlurbMain>
        <ImageList>
          {data.allContentfulImage.edges.map(edge => (
            <ImageHolder>
              <Image src={edge.node.image.file.url} alt={edge.node.caption} />
            </ImageHolder>
          ))}
        </ImageList>
      </ContentWrapper>
      <Footer color="hsla(0,0%,8.6%,0.7)" />
    </AboutWrapper>
  </Layout>
)

export const aboutQuery = graphql`
  query aboutQuery {
    allContentfulImage {
      edges {
        node {
          image {
            file {
              url
            }
          }
          caption
          slug
        }
      }
    }
    allContentfulWebsiteCopy {
      edges {
        node {
          copy {
            childMarkdownRemark {
              html
            }
          }
        }
      }
    }
  }
`
