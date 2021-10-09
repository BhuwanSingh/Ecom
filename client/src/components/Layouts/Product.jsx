import { ListItem } from '@mui/material'
import React from 'react'
import styled from "styled-components";
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';

const Container = styled.div``
const Image = styled.div``
const Circle = styled.div``
const Info = styled.div``

const Product = () => {
  return (
    <Container>
      <Circle />
      <Image src={ListItem.img} alt="" />
      <Info>
          <ShoppingCartOutlinedIcon />
      </Info>
    </Container>
  )
}

export default Product
