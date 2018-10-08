import React from "react"
import styled from "styled-components"

const Footer = styled.div`
  background: ${props => props.color};
  height: 17vh;
  width: 100%;
  position: absolute;
  bottom: 0;
  left: 0;
  /* :before {
    background: inherit;
    bottom: 0;
    content: "";
    display: block;
    height: 100%;
    left: 0;
    position: absolute;
    right: 0;
    transform: skewY(2deg);
    transform-origin: 100%;
  } */
  clip-path: polygon(0 45%, 100% 0, 100% 100%, 0% 100%);
`

export default props => <Footer color={props.color} />
