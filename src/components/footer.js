import React from "react"
import styled from "styled-components"

const Footer = styled.footer`
  background: ${props => props.color};
  bottom: 0;
  height: 15vh;
  left: 0;
  position: relative;
  width: 100%;
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

const FooterCopy = styled.h6`
  bottom: 0;
  color: #fefefe;
  font-weight: 100;
  position: absolute;
  right: 2vw;
`

export default props => (
  <Footer color={props.color}>
    <FooterCopy>&copy; Big Tent Media</FooterCopy>
  </Footer>
)
