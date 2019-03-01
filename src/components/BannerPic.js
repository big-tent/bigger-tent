import React from "react"
import styled from "styled-components"
import Img from "gatsby-image"

const BannerImage = styled(Img)`
  height: 40vh;
  object-fit: cover;
  width: 100vw;
`

export default props => <BannerImage fluid={props.fluid} />
