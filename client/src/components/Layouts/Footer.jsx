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
  display: flex;
  flex-direction: column;
  padding: 20px;
`
const Logo = styled.h1``
const Desc = styled.p`
  margin: 20px 0px;
`
const SocialContainer = styled.div`
  display: flex;
  flex-direction: row;
`
const SocialIcon = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  color: white;
  background-color: ${(props) => props.bg};
  display: flex;
  justify-content: center;
  align-items: center;
  margin-right: 20px
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
          <SocialIcon bg="blue">
            <FacebookIcon />
          </SocialIcon>
          <SocialIcon bg="red">
            <InstagramIcon />
          </SocialIcon>
          <SocialIcon bg="lightblue">
            <TwitterIcon />
          </SocialIcon>
          <SocialIcon bg="pink">
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
