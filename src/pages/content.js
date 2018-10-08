import React from "react"

import undrawbuild from "../svg/undrawbuild.svg"

import Layout from "../components/layout"
import Topper from "../components/Topper"
import GraphicHeader from "../components/graphicheader"

import ContentHolder from "../components/contentholder"

export default () => (
  <Layout>
    <Topper color="#f2ce05" />
    <ContentHolder>
      <GraphicHeader
        src={undrawbuild}
        alt="building blocks illustration"
        headerText="Content creation"
      />
    </ContentHolder>
  </Layout>
)
