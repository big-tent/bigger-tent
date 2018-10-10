import React from "react"

import undrawtwitter from "../svg/undrawtwitter.svg"

import Layout from "../components/layout"
import Topper from "../components/Topper"
import ContentHolder from "../components/contentholder"
import GraphicHeader from "../components/graphicheader"
import BlurbMain from "../components/blurbmain"
import ColourSection from "../components/coloursection"
import Footer from "../components/footer"

export default () => (
  <Layout>
    <Topper color="#f2309b" />
    <ContentHolder>
      <GraphicHeader
        src={undrawtwitter}
        alt="twitter birds flying out of box"
        headerText="Social media management"
      />
      <BlurbMain />
    </ContentHolder>
    <ColourSection color="#C2E7FA" />
    <ColourSection color="#CCCCD0" />
    <ColourSection color="#FDC5E1" />
    <Footer color="#f2309b" />
  </Layout>
)
