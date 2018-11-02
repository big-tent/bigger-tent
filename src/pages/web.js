import React from "react"

import undrawweb from "../svg/undrawweb.svg"

import Layout from "../components/Layout"
import Topper from "../components/Topper"
import ContentHolder from "../components/ContentHolder"
import GraphicHeader from "../components/GraphicHeader"
import BlurbMain from "../components/BlurbMain"
import ContentContainer from "../components/ContentContainer"
import Footer from "../components/Footer"

export default ({ location }) => (
  <Layout location={location}>
    <Topper color="#37378c" />
    <ContentHolder>
      <GraphicHeader
        src={undrawweb}
        alt="web design illustration"
        headerText="Web design"
      />
      <BlurbMain />
      <ContentContainer />
    </ContentHolder>
    <Footer color="#37378c" />
  </Layout>
)
