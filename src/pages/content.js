import React from "react"

import undrawbuild from "../svg/undrawbuild.svg"

import Layout from "../components/Layout"
import Topper from "../components/Topper"
import GraphicHeader from "../components/GraphicHeader"
import ContentHolder from "../components/ContentHolder"

export default () => (
  <Layout>
    <Topper color="#f2ba05" />
    <ContentHolder>
      <GraphicHeader
        src={undrawbuild}
        alt="building blocks illustration"
        headerText="Content creation"
      />
    </ContentHolder>
  </Layout>
)
