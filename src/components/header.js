import React from "react"
import styled from "styled-components"

const Header = styled.h1`
  color: #161616;
`

export default props => <Header>{props.headerText}</Header>
