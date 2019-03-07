import React from "react"
import styled from "styled-components"

import GetInTouch from "../components/getintouch"

const ColouredContainer = styled.section`
  background: ${props => props.color};
  width: 100vw;
  display: flex;
  align-items: center;
  justify-content: center;
`

const ContentWrapper = styled.div`
  display: flex;
  height: 60%;
  width: 70%;
`

const TopTriangle = styled.div`
  width: 0;
  height: 0;
  border-style: solid;
  border-width: 0 0 7vh 100vw;
  border-color: transparent transparent ${props => props.color} transparent;
`

const BottomTriangle = styled.div`
  width: 0;
  height: 0;
  border-style: solid;
  border-width: 7vh 100vw 0 0;
  border-color: ${props => props.color} transparent transparent transparent;
`

const CopyHolder = styled.article`
  display: flex;
  flex-direction: column;
  flex-grow: 1;
`

const ColourHeading = styled.h3`
  margin-top: 3rem;
`

export default props => (
  <div>
    <TopTriangle color={props.color} />
    <ColouredContainer color={props.color}>
      <ContentWrapper>
        <CopyHolder>
          <ColourHeading>{props.heading}</ColourHeading>
          <div>{props.copy}</div>
          <GetInTouch hovercolor={props.hovercolor} />
        </CopyHolder>
      </ContentWrapper>
    </ColouredContainer>
    <BottomTriangle color={props.color} />
  </div>
)
