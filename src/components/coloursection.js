import React from "react"
import styled from "styled-components"

const ColouredContainer = styled.section`
  background: ${props => props.color};
  clip-path: polygon(0 20%, 100% 0, 100% 80%, 0% 100%);
  height: 25rem;
  width: 100vw;
`

const ContentWrapper = styled.div`
  width: 70%;
  position: absolute;
  margin: 0 15%;
  top: 45%;
`

export default props => (
  <ColouredContainer color={props.color}>
    <ContentWrapper>
      <h3>shoreditch austin green juice</h3>
      <p>
        Master cleanse fashion axe bicycle rights, cliche dreamcatcher direct
        trade letterpress keytar ramps. Bespoke forage four loko, street art
        ennui tattooed aesthetic banh mi seitan vinyl butcher. Taxidermy plaid
        chia hell of flannel authentic disrupt. Thundercats seitan cred
        readymade la croix selvage pour-over copper mug kombucha plaid pok pok
        shoreditch austin green juice.
      </p>
    </ContentWrapper>
  </ColouredContainer>
)
