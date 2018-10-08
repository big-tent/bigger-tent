import React from "react"
import styled from "styled-components"

const ColouredTopper = styled.div`
  background: ${props => props.color};
  height: 10vh;
  margin-bottom: 8rem;
  position: relative;
  width: 100%;
  :after {
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
  }
`

export default props => <ColouredTopper color={props.color} />
