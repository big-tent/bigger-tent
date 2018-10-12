import React from "react"
import { graphql } from "gatsby"
import styled from "styled-components"

import Layout from "../components/layout"
import Header from "../components/header"
import Topper from "../components/topper"

const AboutWrapper = styled.div`
  background-color: #f2ba05;
  background-image: linear-gradient(
    135deg,
    #f2ba05 15%,
    #f2309b 66%,
    #37378c 92%
  );
  height: 100vh;
  width: 100vw;
`

export default ({ data }) => (
  <Layout>
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
