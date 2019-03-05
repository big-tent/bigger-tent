import React from "react"
import styled from "styled-components"

import Burger from "./Burger"
import Iconlinks from "./IconLinks"

const LayoutWrapper = styled.div``

const Wrapper = styled.section`
  height: 100%;
  position: relative;
  width: 100vw;
`

const BurgerHolder = styled.div`
  @media (min-width: 600px) {
    display: none;
  }
`

export default ({ children }) => (
  <LayoutWrapper>
    <BurgerHolder>
      <Burger />
    </BurgerHolder>
    <Iconlinks />
    <Wrapper>{children}</Wrapper>
  </LayoutWrapper>
)
