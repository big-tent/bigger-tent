import React from "react"
import styled from "styled-components"

const ContentHolder = styled.main`
  width: 70%;
  margin: 0 auto 5rem;
`

export default ({ children }) => <ContentHolder>{children}</ContentHolder>
