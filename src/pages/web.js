import React from "react"

import undrawweb from "../svg/undrawweb.svg"

import Layout from "../components/layout"
import Topper from "../components/Topper"
import ContentHolder from "../components/contentholder"
import GraphicHeader from "../components/graphicheader"
import BlurbMain from "../components/Blurbmain"
import ContentContainer from "../components/contentcontainer"
import Footer from "../components/footer"

export default () => (
  <Layout>
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
