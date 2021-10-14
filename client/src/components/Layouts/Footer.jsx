import React from 'react'
import styled from 'styled-components'

import FacebookIcon from '@mui/icons-material/Facebook'
import InstagramIcon from '@mui/icons-material/Instagram'
import TwitterIcon from '@mui/icons-material/Twitter'
import PinterestIcon from '@mui/icons-material/Pinterest'
import RoomOutlinedIcon from '@mui/icons-material/RoomOutlined'
import LocalPhoneOutlinedIcon from '@mui/icons-material/LocalPhoneOutlined'
import AlternateEmailOutlinedIcon from '@mui/icons-material/AlternateEmailOutlined';
import CreditCardOutlinedIcon from '@mui/icons-material/CreditCardOutlined';

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
  margin-right: 20px;
`
const Center = styled.div`
  flex: 1;
`
const Title = styled.h3`
  margin-bottom: 30px;
`

const List = styled.ul`
  margin: 0;
  padding: 0;
  list-style: none;
  display: flex;
  flex-wrap: wrap;
`

const ListItem = styled.li`
  width: 50%;
  margin-bottom: 10px;
`

const Right = styled.div`
  flex: 1;
`

const ContactItem = styled.div`
  margin-bottom: 20px;
  display: flex;
  align-items: center;
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
      <Center>
        <Title>Useful Lists</Title>
        <List>
          <ListItem>sample link</ListItem>
          <ListItem>sample link</ListItem>
          <ListItem>sample link</ListItem>
          <ListItem>sample link</ListItem>
          <ListItem>sample link</ListItem>
          <ListItem>sample link</ListItem>
          <ListItem>sample link</ListItem>
        </List>
      </Center>
      <Right>
        <Title>Contact</Title>
        <ContactItem>
          <RoomOutlinedIcon />
          Address
        </ContactItem>
        <ContactItem>
          <LocalPhoneOutlinedIcon />
          Phone Number
        </ContactItem>
        <ContactItem>
          <AlternateEmailOutlinedIcon />
          email</ContactItem>
          <CreditCardOutlinedIcon />
      </Right>
    </Container>
  )
}

export default Footer
