import React from "react"

import undrawtwitter from "../svg/undrawtwitter.svg"

import Layout from "../components/layout"
import Topper from "../components/Topper"
import ContentHolder from "../components/contentholder"
import GraphicHeader from "../components/graphicheader"

export default () => (
  <Layout>
    <Topper color="#f2309b" />
    <ContentHolder>
      <GraphicHeader
        src={undrawtwitter}
        alt="twitter birds flying out of box"
        headerText="Social media management"
      />
    </ContentHolder>
  </Layout>
)
