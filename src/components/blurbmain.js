import React from "react"
import styled from "styled-components"

const BlurbMain = styled.div`
  margin: 0 auto 3rem;
  max-width: 800px;
`

export default ({ children }) => <BlurbMain>{children}</BlurbMain>
