import React from "react";
import { popularProducts } from "../../data";
import { styled } from "styled-components";
import Product from "./Product";

const Container = styled.div``;

const Products = () => {
  return (
    <Container>
      {popularProducts.map((item) => (
        <Product item={item} key={item.id} />
      ))}
    </Container>
  );
};

export default Products;
