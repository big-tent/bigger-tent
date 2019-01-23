import React from "react"
import { Link } from "gatsby"
import styled from "styled-components"

import { IconMail, IconTwitter, IconPhone } from "../utilities/icons.js"

const IconsHolder = styled.div`
  align-items: flex-end;
  display: flex;
  height: 100%;
  justify-content: center;
  position: fixed;
  right: 0;
  bottom: 0;
  width: 100%;
  z-index: 1;
  @media (min-width: 900px) {
    flex-direction: column;
    width: auto;
  }
`

const IconLink = styled.div`
  background: ${props => props.color};
  display: grid;
  height: 55px;
  place-content: center;
  width: calc(100% / 3);
  @media (min-width: 900px) {
    width: 55px;
    transition: 0.3s ease-out;
    :hover {
      width: 65px;
    }
  }
`

export default () => (
  <IconsHolder>
    <IconLink color="#F4B41D">
      <Link to="/contact">
        <IconMail />
      </Link>
    </IconLink>
    <IconLink color="#f68c16">
      <a href="https://twitter.com/BigTentSocial">
        <IconTwitter />
      </a>
    </IconLink>
    <IconLink color="#E9440E">
      <a href="tel:+00447886453837">
        <IconPhone />
      </a>
    </IconLink>
  </IconsHolder>
)
