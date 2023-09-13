import React from "react";
import styled from "styled-components";

const Container = styled.div`
  height: 3rem;
  border-style: none;
  display: flex;
  justify-content: start;
  align-items: center;

  div {
    padding-left: 1rem;
    display: inline-block;
    color: red;
    font-size: 0.8rem;
    font-style: italic;
    font-weight: bold;
    opacity: 0;
  }
  &.nothing > div {
    opacity: 1;
  }
`;

const Advice = ({ id, className = "" }) => {
  return (
    <Container id={id}>
      <div className="">{id}를 입력해주세요!</div>
    </Container>
  );
};

export default Advice;
