import React from "react"
import styled from "styled-components"

const ColouredTopper = styled.div`
  background: ${props => props.color};
  clip-path: polygon(0 0, 100% 0, 100% 55%, 0% 100%);
  height: 15vh;
  position: fixed;
  width: 100%;
  z-index: 1;
  /* :after {
    background: inherit;
    bottom: 0;
    content: "";
    display: block;
    height: 100%;
    left: 0;
    position: absolute;
    right: 0;
    transform: skewY(-2.5deg);
    transform-origin: 100%;
  } */
`

export default props => <ColouredTopper color={props.color} />
