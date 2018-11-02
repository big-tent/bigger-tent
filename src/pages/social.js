import React from "react"

import undrawtwitter from "../svg/undrawtwitter.svg"

import Layout from "../components/Layout"
import Topper from "../components/Topper"
import ContentHolder from "../components/ContentHolder"
import GraphicHeader from "../components/GraphicHeader"
import BlurbMain from "../components/BlurbMain"
import ColourSection from "../components/ColourSection"
import Footer from "../components/Footer"

export default ({ location }) => (
  <Layout location={location}>
    <Topper color="#f2309b" />
    <ContentHolder>
      <GraphicHeader
        src={undrawtwitter}
        alt="twitter birds flying out of box"
        headerText="Social media management"
      />
      <BlurbMain />
    </ContentHolder>
    <ColourSection color="hsla(200, 85%, 87%, 0.3)" />
    <ColourSection color="hsla(240, 4%, 80%, 0.3)" />
    <ColourSection color="hsla(330, 93%, 88%, 0.3)" />
    <Footer color="#f2309b" />
  </Layout>
)
