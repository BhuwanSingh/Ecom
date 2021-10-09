import ArrowLeftOutlinedIcon from "@mui/icons-material/ArrowLeftOutlined";
import ArrowRightOutlinedIcon from "@mui/icons-material/ArrowRightOutlined";
import React from "react";
import { useState } from "react";
import styled from "styled-components";
import { sliderItems } from "../../data";

const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  position: relative;
  overflow: hidden;
`;

const Arrow = styled.div`
  width: 50px;
  height: 50px;
  background-color: #fff7f7;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  top: 0;
  bottom: 0;
  left: ${(props) => props.direction === "left" && "10px"};
  right: ${(props) => props.direction === "right" && "10px"};
  margin: auto;
  cursor: pointer;
  opacity: 50%;
  z-index: 2;
`;

const Wrapper = styled.div`
  height: 100%;
  display: flex;
  transition: all 1.5s ease;
  transform: translate(${props => props.SlideIndex * -100}vw);
`;

const Slide = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  align-items: center;
  background-color: ${(props) => props.bg};
`;

const ImgContainer = styled.div`
  height: 100%;
  flex: 1;
  display: flex;
  justify-content: center;
`;

const Image = styled.img`
  height: 80%;
  box-shadow: 2px 2px gray;
`;

const InfoContainer = styled.div`
  flex: 1;
`;

const Title = styled.h1`
  font-style: 70px;
`;

const Description = styled.p`
  margin: 50px;
  font-style: 20px;
  font-weight: 500;
  letter-spacing: 3px;
`;

const Button = styled.button`
  padding: 10px;
  font-style: 20px;
  background-color: transparent;
  cursor: pointer;
`;

const Slider = () => {
  const [SlideIndex, setSlideIndex] = useState(0);

  const handleClick = (direction) => {
    if(direction === 'left'){
      setSlideIndex(SlideIndex > 0 ? SlideIndex - 1 : 2 )
    } else {
      setSlideIndex(SlideIndex < 2 ? SlideIndex + 1 : 0 )
    }
  };

  return (
    <Container>
      <Arrow
        direction="left"
        onClick={() => {
          handleClick("left");
        }}
      >
        <ArrowLeftOutlinedIcon />
      </Arrow>
      <Wrapper SlideIndex = {SlideIndex}>
        {sliderItems.map((item) => (
          <Slide bg={item.bg} key={item.id}>
            <ImgContainer>
              <Image src={item.img} alt="Something" />
            </ImgContainer>
            <InfoContainer>
              <Title>{item.title}</Title>
              <Description>
               {item.desc}
              </Description>
              <Button>Shop Now</Button>
            </InfoContainer>
          </Slide>
        ))}
      </Wrapper>
      <Arrow
        direction="right"
        onClick={() => {
          handleClick("right");
        }}
      >
        <ArrowRightOutlinedIcon />
      </Arrow>
    </Container>
  );
};

export default Slider;
