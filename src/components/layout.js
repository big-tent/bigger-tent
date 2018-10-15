import React from "react"
import styled from "styled-components"

import Nav from "./Nav"
import Iconlinks from "./IconLinks"

const LayoutWrapper = styled.div``

const Wrapper = styled.section`
  height: 100%;
  position: relative;
  width: 100vw;
`

export default ({ children }) => (
  <LayoutWrapper>
    <Nav />
    <Iconlinks />
    <Wrapper>{children}</Wrapper>
  </LayoutWrapper>
)
