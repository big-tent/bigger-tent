import React from "react"
import { Link } from "gatsby"
import styled from "styled-components"

const Nav = styled.nav`
  display: flex;
  margin-bottom: 2rem;
  position: absolute;
  top: 1.5rem;
  width: 100%;
  h3,
  h6 {
    color: #fefefe;
  }
  z-index: 1;
`

const LogoLink = styled(Link)`
  margin-left: 2rem;
  margin-right: auto;
`

const NavLink = styled(Link)`
  margin-right: 2rem;
`

export default () => (
  <Nav>
    <LogoLink to="/">
      <h3>Big Tent</h3>
    </LogoLink>
    <NavLink to="/">
      <h6>home</h6>
    </NavLink>
    <NavLink to="/about">
      <h6>about us</h6>
    </NavLink>
  </Nav>
)
