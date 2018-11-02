import React from "react"
import { graphql } from "gatsby"
import styled from "styled-components"

import Layout from "../components/Layout"
import Header from "../components/Header"
import Topper from "../components/Topper"

const AboutWrapper = styled.div`
  background-color: #f2ba05;
  background-image: linear-gradient(
    135deg,
    #f2ba05 15%,
    #f2309b 56%,
    #37378c 92%
  );
  height: 100vh;
  width: 100vw;
`

export default ({ data, location }) => (
  <Layout location={location}>
    <AboutWrapper>
      <Topper color="#fefefe" />
      <Header headerText="About us" />
      <p>About {data.site.siteMetadata.title}</p>
    </AboutWrapper>
  </Layout>
)

export const query = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
  }
`
