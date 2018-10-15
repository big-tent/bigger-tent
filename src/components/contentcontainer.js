import React from "react"
import styled from "styled-components"

import rocket from "../svg/rocket.svg"
import lego from "../svg/lego.svg"
import robot from "../svg/robot.svg"
import tablet from "../svg/tablet.svg"
import wallet from "../svg/wallet.svg"
import clean from "../svg/clean.svg"

import ContentBox from "./ContentBox"

const Container = styled.section`
  display: grid;
  grid-gap: 10px;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  grid-auto-rows: 300px;
`

export default () => (
  <Container>
    <ContentBox
      icon={rocket}
      boxhead="Blazing fast"
      boxcopy="Who wants to wait while a website loads? We build speedy sites so visitors aren't left twiddling their thumbs."
    />
    <ContentBox
      icon={tablet}
      boxhead="Responsive"
      boxcopy="Most internet browsing is done on smartphones nowadays, and we build sites that work just as well on small screens as big ones"
    />
    <ContentBox
      icon={robot}
      boxhead="Modern"
      boxcopy="We use the latest technology to build sites that are secure, fast, functional and accessible to all. "
    />
    <ContentBox
      icon={wallet}
      boxhead="Value for money"
      boxcopy="Our sites will keep your upkeep costs to a minimum, and we offer a high level of service at a reasonable price."
    />
    <ContentBox
      icon={clean}
      boxhead="Clean design"
      boxcopy="Modern, clean design will not only make your site look good, it will make it easier for your visitors to find what they want."
    />
    <ContentBox
      icon={lego}
      boxhead="Cheerful"
      boxcopy="We love doing what we do, and we want you to love what we do for you. Our aim is to spread happiness, one website at a time."
    />
  </Container>
)
