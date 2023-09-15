import React from "react";
import { styled } from "styled-components";

const Container = styled.div`
  width: 100%;
  height: 4rem;
  background-color: white;
  color: gray;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const MainFooter = () => {
  return (
    <Container>
      {" "}
      해당 사이트는 포트폴리오 용도로 만들어졌으며 상업적 목적이 전혀 없음을
      알려드립니다.
    </Container>
  );
};

export default MainFooter;
