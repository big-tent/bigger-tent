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
  h6 {
    color: #fefefe;
    :hover {
      color: ${props => props.navcolor};
      /* color: hsl(31.6, 92.5%, 52.5%); */
    }
  }
  a {
    text-decoration: none;
  }
`

const LogoLink = styled(Link)`
  margin-left: 2rem;
  margin-right: auto;
`

const NavLink = props => (
  <Link
    {...props}
    getProps={({ isCurrent }) => {
      return {
        style: {
          display: isCurrent ? "none" : "block",
          marginRight: "2rem"
        }
      }
    }}
  />
)

export default props => (
  <Nav navcolor={props.navcolor}>
    <LogoLink to="/">
      <h3>Big Tent</h3>
    </LogoLink>
    <NavLink to="/">
      <h6>home</h6>
    </NavLink>
    <NavLink to="/about">
      <h6>about us</h6>
    </NavLink>
    <NavLink to="/web">
      <h6>web</h6>
    </NavLink>
    <NavLink to="/social">
      <h6>social</h6>
    </NavLink>
    <NavLink to="/content">
      <h6>content</h6>
    </NavLink>
    <NavLink to="/blog">
      <h6>blog</h6>
    </NavLink>
  </Nav>
)
