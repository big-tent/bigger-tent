import React from "react"
import styled from "styled-components"
import { Video } from "cloudinary-react"

const VideoBox = styled(Video)`
  box-shadow: 1px 3px 5px hsla(0, 0%, 0%, 0.7),
    1px 5px 15px hsla(0, 0%, 0%, 0.3);
  max-height: 30vh;
  margin: 10px;
  object-fit: fill;
  @media (max-width: 400px) {
    height: 100%;
    width: 100%;
  }
`

export default props => (
  <>
    <VideoBox
      cloudName="big-tent"
      publicId={props.publicId}
      controls
      autobuffer="true"
      playsInline
    />
  </>
)
