import React from "react"
import styled from "styled-components"
import { Video } from "cloudinary-react"

const VideoHolder = styled(Video)`
  height: 100%;
  margin-right: 2rem;
`

export default props => (
  <>
    <VideoHolder cloudName="big-tent" publicId={props.publicId} controls />
  </>
)
