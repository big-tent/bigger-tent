import React from "react"
import styled from "styled-components"

const Head = styled.h1`
  color: #161616;
`

export default props => <Head>{props.headerText}</Head>
