import React from "react"
import styled from "styled-components"
import { Video } from "cloudinary-react"

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
  height: 90%;
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

const VideoHeading = styled.h2`
  font-size: 2rem;
  margin: 0;
  transform: rotate(270deg);
`

const VideoHolder = styled(Video)`
  height: 100%;
  margin-right: 2rem;
`

export default props => (
  <>
    <TopTriangle color={props.color} />
    <ColouredContainer color={props.color}>
      <ContentWrapper>
        <VideoHeading>{props.heading}</VideoHeading>
        <div>{children}</div>
      </ContentWrapper>
    </ColouredContainer>
    <BottomTriangle color={props.color} />
  </>
)
