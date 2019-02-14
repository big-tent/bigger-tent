import React from "react"
import { Link } from "gatsby"
import styled from "styled-components"

const Nav = styled.nav`
  display: flex;
  position: absolute;
  text-decoration: none;
  top: 1.5rem;
  width: 100%;
  z-index: 1;
  h3 {
    color: ${props => props.navcolor};
  }
  a {
    text-decoration: none;
  }
`

const LogoLink = styled(Link)`
  margin-left: 2rem;
  margin-right: auto;
`

const NavLink = styled(Link)`
  margin-right: 2rem;
`

const NavItem = styled.h6`
  color: #fefefe;
  :hover {
    color: ${props => props.navcolor};
  }
`

export default props => (
  <Nav navcolor={props.navcolor}>
    <LogoLink to="/">
      <h3>Big Tent</h3>
    </LogoLink>
    <NavLink to="/">
      <NavItem navcolor={props.navcolor}>home</NavItem>
    </NavLink>
    <NavLink to="/about">
      <NavItem navcolor={props.navcolor}>about us</NavItem>
    </NavLink>
    <NavLink to="/web">
      <NavItem navcolor={props.navcolor}>web</NavItem>
    </NavLink>
    <NavLink to="/social">
      <NavItem navcolor={props.navcolor}>social</NavItem>
    </NavLink>
    <NavLink to="/content">
      <NavItem navcolor={props.navcolor}>content</NavItem>
    </NavLink>
    {/* <NavLink to="/blog">
      <h6>blog</h6>
    </NavLink> */}
  </Nav>
)
