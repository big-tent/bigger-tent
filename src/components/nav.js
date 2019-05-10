import React from "react"
import { Link } from "gatsby"
import styled from "styled-components"

const Navbar = styled.nav`
  display: flex;
  position: fixed;
  text-decoration: none;
  top: 1.5rem;
  width: 100%;
  z-index: 3;
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
  @media (max-width: 600px) {
    display: none;
  }
`

const NavItem = styled.h6`
  color: #fefefe;
  :hover {
    color: ${props => props.navcolor};
  }
`

export default props => (
  <Navbar navcolor={props.navcolor}>
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
    <NavLink to="/audio">
      <NavItem navcolor={props.navcolor}>audio</NavItem>
    </NavLink>
    <NavLink to="/blog">
      <NavItem navcolor={props.navcolor}>blog</NavItem>
    </NavLink>
  </Navbar>
)
