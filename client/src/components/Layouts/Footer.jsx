import React from 'react'
import styled from 'styled-components'

import FacebookIcon from '@mui/icons-material/Facebook'
import InstagramIcon from '@mui/icons-material/Instagram'
import TwitterIcon from '@mui/icons-material/Twitter'
import PinterestIcon from '@mui/icons-material/Pinterest'

const Container = styled.div`
  display: flex;
  justify-content: space-between;
`
const Left = styled.div`
  flex: 1;
`
const Logo = styled.div`
  
`
const Desc = styled.div`
  
`
const SocialContainer = styled.div`
  display: flex;
  flex-direction: row;
`
const SocialIcon = styled.div`
  size: 40px;
`
const Center = styled.div`
  flex: 1;
`
const Right = styled.div`
  flex: 1;
`

const Footer = () => {
  return (
    <Container>
      <Left>
        <Logo>Bhu.</Logo>
        <Desc>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Est molestias
          tempore ex at asperiores deserunt recusandae placeat aliquid. Ipsum
          sed laboriosam eveniet dolores mollitia, dolor eius labore molestiae
          quidem placeat?
        </Desc>
        <SocialContainer>
          <SocialIcon>
            <FacebookIcon />
          </SocialIcon>
          <SocialIcon>
            <InstagramIcon />
          </SocialIcon>
          <SocialIcon>
            <TwitterIcon />
          </SocialIcon>
          <SocialIcon>
            <PinterestIcon />
          </SocialIcon>
        </SocialContainer>
      </Left>
      <Center></Center>
      <Right></Right>
    </Container>
  )
}

export default Footer
