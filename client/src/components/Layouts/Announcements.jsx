import styled from "styled-components";

const Container = styled.div`
  height: 30px;
  background-color: teal;
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 14;
  font-weight: 500;
`;

const Anouncements = () => {
  return <Container>Deal of the season! 40% Off</Container>;
};

export default Anouncements;
