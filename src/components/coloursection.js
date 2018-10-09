import React from "react"
import styled from "styled-components"

const ColouredContainer = styled.section`
  background: ${props => props.color};
  clip-path: polygon(0 20%, 100% 0, 100% 80%, 0% 100%);
  height: 25rem;
  width: 100vw;
`

export default props => <ColouredContainer color={props.color} />
