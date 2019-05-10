import React from "react"
import styled from "styled-components"

const GridHolder = styled.ul`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  grid-auto-rows: 450px;
  grid-gap: 20px;
  margin: 0;
  padding: 0;
`

export default ({ children }) => <GridHolder>{children}</GridHolder>
