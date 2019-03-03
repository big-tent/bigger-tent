import React from "react"
import styled from "styled-components"

import Iconlinks from "./IconLinks"
const LayoutWrapper = styled.div``

const Wrapper = styled.section`
  height: 100%;
  position: relative;
  width: 100vw;
`

export default ({ children }) => (
  <LayoutWrapper>
    <Iconlinks />
    <Wrapper>{children}</Wrapper>
  </LayoutWrapper>
)
