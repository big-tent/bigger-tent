import React from "react"
import styled from "styled-components"
import Img from "gatsby-image"

const BannerImage = styled(Img)`
  clip-path: polygon(0 0, 100% 0, 100% 83%, 0% 100%);
  object-fit: cover;
  width: 100vw;
  height: 40vh;
  @media (min-width: 600px) {
    clip-path: polygon(0 0, 100% 0, 100% 88.8%, 0% 100%);
    height: 60vh;
  }
`

export default props => <BannerImage fluid={props.fluid} />
