import React from "react"
import styled from "styled-components"

const ColouredContainer = styled.section`
  align-items: center;
  background: ${props => props.color};
  display: flex;
  justify-content: center;
  padding: 3rem 0;
  width: 100vw;
`

const ContentWrapper = styled.div`
  display: flex;
  width: 70%;
  @media (max-width: 600px) {
    flex-direction: column;
  }
`

const TopTriangle = styled.div`
  border-style: solid;
  border-width: 0 0 7vh 100vw;
  border-color: transparent transparent ${props => props.color} transparent;
  height: 0;
  width: 0;
`

const BottomTriangle = styled.div`
  border-style: solid;
  border-width: 7vh 100vw 0 0;
  border-color: ${props => props.color} transparent transparent transparent;
  height: 0;
  width: 0;
`

const VideoHeading = styled.h2`
  font-size: 2rem;
  margin: 0 2rem 0 0;
  @media (min-width: 600px) {
    transform: rotate(180deg);
    writing-mode: vertical-rl;
  }
`

const VideoHolder = styled.div`
  align-content: space-around;
  display: flex;
  flex-flow: row wrap;
  height: 100%;
  justify-content: space-around;
  flex-grow: 1;
`

export default props => (
  <>
    <TopTriangle color={props.color} />
    <ColouredContainer color={props.color}>
      <ContentWrapper>
        <VideoHeading>{props.heading}</VideoHeading>
        <VideoHolder>{props.children}</VideoHolder>
      </ContentWrapper>
    </ColouredContainer>
    <BottomTriangle color={props.color} />
  </>
)
