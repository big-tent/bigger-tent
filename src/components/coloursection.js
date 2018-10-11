import React from "react"
import styled from "styled-components"

const ColouredContainer = styled.section`
  background: ${props => props.color};
  /* clip-path: polygon(0 20%, 100% 0, 100% 80%, 0% 100%); */
  height: 15rem;
  width: 100vw;
  display: flex;
  align-items: center;
  justify-content: center;
`

const ContentWrapper = styled.div`
  width: 70%;
  height: 50%;
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

export default props => (
  <div>
    <TopTriangle color={props.color} />
    <ColouredContainer color={props.color}>
      <ContentWrapper>
        <h3>shoreditch austin green juice</h3>
        <p>
          90's master cleanse YOLO Wes Anderson Godard plaid pug Pitchfork
          mumblecore cornhole banjo XOXO vinyl chia Odd Future keffiyeh
          literally mustache Vice tote bag Pinterest deep v bicycle rights
          letterpress slow-carb tattooed Williamsburg{" "}
        </p>
      </ContentWrapper>
    </ColouredContainer>
    <BottomTriangle color={props.color} />
  </div>
)
