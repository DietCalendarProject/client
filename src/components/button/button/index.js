import React from "react";
import styled from "styled-components";
import theme from "../../../assets/theme";

const Container = styled.div`
  display: flex;
  justify-content: ${({ justifyContent }) => justifyContent};
  align-items: ${({ alignItems }) => alignItems};
`;

const Button = styled.button`
  width: auto;
  border-radius: 8px;
  border-color: rgba(0, 0, 0, 0);
  padding: 7px 15px 7px 15px;
  border-style: none;
  background-color: ${({ backgroundColor }) => backgroundColor};
  color: ${({ color }) => color};
  transition: all 0.3s;

  &:hover {
    background-color: ${({ color }) => color};
    color: ${({ backgroundColor }) => backgroundColor};
    font-weight: bolder;
  }
`;

function BasicButton({
  title,
  backgroundColor = theme.green.strong,
  color = theme.green.weak,
  onclick,
  alignItems = "center",
  justifyContent = "center",
  ...rest
}) {
  return (
    <Container alignItems={alignItems} justifyContent={justifyContent}>
      <Button
        onclick={onclick}
        color={color}
        backgroundColor={backgroundColor}
        {...rest}
      >
        {title}
      </Button>
    </Container>
  );
}

export default BasicButton;
