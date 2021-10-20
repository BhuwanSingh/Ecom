import React from 'react'
import styled from 'styled-components'

import Navbar from '../Layouts/Navbar'
import Announcements from '../Layouts/Announcements'
import Products from '../Layouts/Products'
import NewsLetter from '../Layouts/NewsLetter'
import Footer from '../Layouts/Footer'

const Title = styled.h1`
  font-weight: 600;
  margin: 20px;
`

const Container = styled.div``

const FilterContainer = styled.div`
  display: flex;
  justify-content: space-between;
`

const Filter = styled.div`
  margin: 20px;
`

const FilterText = styled.span`
  font-size: 20px;
  font-weight: 600;
`

const Select = styled.select`
  margin-left: 20px;
  padding: 5px;
`

const Option = styled.option``

const ProductList = () => {
  return (
    <Container>
      <Announcements />
      <Navbar />
      <Title>Dresses</Title>
      <FilterContainer>
        <Filter>
          <FilterText>Filter Products:</FilterText>
          <Select>
            <Option disabled selected>
              Color
            </Option>
            <Option>White</Option>
            <Option>Black</Option>
            <Option>Red</Option>
            <Option>Blue</Option>
            <Option>Yellow</Option>
            <Option>Green</Option>
          </Select>
          <Select>
            <Option disabled selected>
              Size
            </Option>
            <Option>XXXL</Option>
            <Option>XXL</Option>
            <Option>XL</Option>
            <Option>L</Option>
            <Option>M</Option>
            <Option>S</Option>
          </Select>
        </Filter>
        <Filter>
          <FilterText>Sort Products:</FilterText>
          <Select>
            <Option disabled selected>
              Sort by
            </Option>
            <Option>Newest</Option>
            <Option>Price (asc)</Option>
            <Option>Price (desc)</Option>
          </Select>
        </Filter>
      </FilterContainer>
      <Products />
      <NewsLetter />
      <Footer />
    </Container>
  )
}

export default ProductList
