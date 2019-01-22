import React from "react"
import { graphql } from "gatsby"
import styled from "styled-components"

import Layout from "../components/Layout"
import Header from "../components/Header"
import Topper from "../components/Topper"
import Footer from "../components/Footer"

const AboutWrapper = styled.div`
  background-color: #f2ba05;
  background-image: linear-gradient(
    135deg,
    #f2ba05 15%,
    #f2309b 56%,
    #37378c 92%
  );
  height: 100%;
  width: 100vw;
`

const ContentWrapper = styled.main`
  padding: 20vh 10vw 10vh;
`

const ImagesWrapper = styled.div`
  /* margin: 10vh 10vw; */
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

export default ({ data, location }) => (
  <Layout location={location}>
    <AboutWrapper>
      <Topper color="hsla(0,0%,8.6%,0.7)" />
      <ContentWrapper>
        <Header headerText="About us" />
        <ImagesWrapper>
          <ImageList>
            {data.allContentfulImage.edges.map(edge => (
              <ImageHolder>
                <img src={edge.node.image.file.url} />
              </ImageHolder>
            ))}
          </ImageList>
        </ImagesWrapper>
      </ContentWrapper>
      <Footer color="hsla(0,0%,8.6%,0.7)" />
    </AboutWrapper>
  </Layout>
)

export const imageQuery = graphql`
  query imageQuery {
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
  }
`
