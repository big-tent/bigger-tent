import React from "react"
import styled from "styled-components"
import { Video } from "cloudinary-react"

const VideoHolder = styled(Video)`
  box-shadow: 1px 3px 5px hsla(0, 0%, 0%, 0.7),
    1px 5px 15px hsla(0, 0%, 0%, 0.3);
  max-height: 30vh;
  margin: 5px;
  max-width: 100%;
`

export default props => (
  <>
    <VideoHolder cloudName="big-tent" publicId={props.publicId} controls />
  </>
)
