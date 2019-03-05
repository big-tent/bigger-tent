import React from "react"
import styled from "styled-components"

const BoxWrapper = styled.section`
  display: flex;
  padding: 1rem;
  flex-wrap: wrap;
  p {
    color: #141414;
  }
`

const Icon = styled.img`
  height: 20%;
  margin-right: 1rem;
`

const BoxHead = styled.h3`
  color: #141414;
  text-align: center;
`

export default props => (
  <BoxWrapper>
    <Icon src={props.icon} />
    <BoxHead>{props.boxhead}</BoxHead>
    <p>{props.boxcopy}</p>
  </BoxWrapper>
)
