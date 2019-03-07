import React from "react"
import Link from "gatsby-link"
import styled from "styled-components"

import logo from "../svg/logo.svg"

const HeroLogoWrapper = styled.h1`
  position: absolute;
  top: 25%;
  bottom: 0;
  left: 0;
  right: 0;
  margin: auto;
  width: 75vmin;
  z-index: 2;
`

const LogoContainer = styled.img`
  width: 100%;
`

const LinksContainer = styled.div`
  color: #fefefe;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  @media (min-width: 600px) {
    flex-direction: row;
  }
  a {
    color: #fefefe;
    text-decoration: none;
  }
  h2 {
    color: #fefefe;
    font-size: 2.5rem;
    font-weight: 100;
    margin: 20px 0 0 0;
    padding-bottom: 5px;
    text-align: center;
    text-shadow: 2px 2px 2px #000;
    transition: 1s all;
    @media (min-width: 600px) {
      border-bottom: 10px solid transparent;
      font-size: 2rem;
      :hover,
      :focus,
      :active,
      :link {
        cursor: pointer;
        border-bottom: 10px solid #f2309b;
        text-decoration: none;
        :first-of-type {
          border-color: hsl(240, 43.6%, 38.2%);
        }
        :last-of-type {
          border-color: hsl(30, 100%, 50%);
        }
      }
    }
  }
`

export default () => (
  <HeroLogoWrapper>
    <LogoContainer src={logo} alt="Big Tent logo" />
    <LinksContainer>
      <h2>
        <Link to="/web">Web</Link>
      </h2>
      <h2>
        <Link to="/social">Social</Link>
      </h2>
      <h2>
        <Link to="/content">Content</Link>
      </h2>
    </LinksContainer>
  </HeroLogoWrapper>
)
