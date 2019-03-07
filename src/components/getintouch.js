import React from "react"
import styled from "styled-components"
import { Link } from "gatsby"

const GetIn = styled(Link)`
  h5 {
    color: #626262;
    box-shadow: none;
    font-family: sans-serif;
  }
  h5:hover,
  :focus,
  :active,
  :link {
    text-decoration: none;
    color: ${props => props.hovercolor};
  }
`

export default props => (
  <GetIn to="/contact" hovercolor={props.hovercolor}>
    <h5>Get in touch to find out more</h5>
  </GetIn>
)
