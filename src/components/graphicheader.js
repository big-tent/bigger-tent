import React from "react"
import styled from "styled-components"

const GraphicHeaderHolder = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-bottom: 4rem;
  max-width: 100%;
  @media (min-width: 900px) {
    flex-direction: row;
  }
`

const Illustration = styled.img`
  max-width: 70%;
  @media (min-width: 900px) {
    max-width: 50%;
    align-self: flex-start;
  }
`

const Header = styled.h1`
  color: #141414;
  text-align: center;
  max-width: 270px;
  @media (min-width: 900px) {
    align-self: flex-end;
  }
`

export default props => (
  <GraphicHeaderHolder>
    <Illustration src={props.src} />
    <Header>{props.headerText}</Header>
  </GraphicHeaderHolder>
)
