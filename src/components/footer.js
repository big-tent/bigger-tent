import React from "react"
import styled from "styled-components"

const Foot = styled.footer`
  background: ${props => props.color};
  bottom: 0;
  height: 15vh;
  left: 0;
  position: relative;
  width: 100%;
  clip-path: polygon(0 45%, 100% 0, 100% 100%, 0% 100%);
`

const FooterCopy = styled.h6`
  bottom: 0;
  color: hsla(0, 0%, 99%, 0.7);
  font-weight: 100;
  position: absolute;
  right: 2vw;
`

const HeartsCopy = styled(FooterCopy)`
  left: 2vw;
`

export default props => (
  <Foot color={props.color}>
    <HeartsCopy>Made with &hearts; in Rochester</HeartsCopy>
    <FooterCopy>&copy; Big Tent Media</FooterCopy>
  </Foot>
)
