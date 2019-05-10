import React from "react"
import styled from "styled-components"

const GridCard = styled.li`
  background: #fefefe;
  border: 1px solid #3c3c3c;
  border-radius: 5px;
  overflow: hidden;
  position: relative;
  transition: 1s all;
  :hover {
    box-shadow: 1px 3px 5px hsla(0, 0%, 0%, 0.7),
      1px 5px 15px hsla(0, 0%, 0%, 0.3);
  }
  a {
    text-decoration: none;
  }
`

export default ({ children }) => <GridCard>{children}</GridCard>
