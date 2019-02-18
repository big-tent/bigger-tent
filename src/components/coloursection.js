import React from "react"
import styled from "styled-components"

const ColouredContainer = styled.section`
  background: ${props => props.color};
  height: 15rem;
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
  border-width: 0 0 10vh 100vw;
  border-color: transparent transparent ${props => props.color} transparent;
`

const BottomTriangle = styled.div`
  width: 0;
  height: 0;
  border-style: solid;
  border-width: 10vh 100vw 0 0;
  border-color: ${props => props.color} transparent transparent transparent;
`

const CopyHolder = styled.div`
  display: flex;
  flex-direction: column;
  flex-grow: 1;
`

export default props => (
  <div>
    <TopTriangle color={props.color} />
    <ColouredContainer color={props.color}>
      <ContentWrapper>
        <CopyHolder>
          <h3>{props.heading}</h3>
          <div>{props.copy}</div>
        </CopyHolder>
      </ContentWrapper>
    </ColouredContainer>
    <BottomTriangle color={props.color} />
  </div>
)
