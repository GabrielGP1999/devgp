import React from 'react'
import styled from 'styled-components'
import myAvatar from '../assets/myAvatar.png'


const ImageContainer = styled.div`
width: 100%;

img{
    width: 75%;
    height: auto;
}

@media (max-width: 64em) {
  min-width: 40vh;
}
`

const CoverVideo = () => {
  return (
    <ImageContainer>
        <img src={myAvatar} type="img" />
    </ImageContainer>
  )
}

export default CoverVideo