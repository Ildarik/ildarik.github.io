import React from "react"
import styled from "styled-components"

const Img = styled.img`
  width: 40px;
`

export default ({ url, logo, socialName }) => (
  <a href={url} target="_blank" rel="noopener noreferrer">
    <Img src={logo} alt={`${socialName} logo`} />
  </a>
)
