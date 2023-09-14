import React from "react";
import styled from "styled-components";
import theme from "../../../assets/theme";

const Container = styled.div`
  display: flex;
  justify-content: ${({ justifycontent }) => justifycontent};
  align-items: ${({ alignitems }) => alignitems};
`;

const Button = styled.button`
  width: auto;
  border-radius: 8px;
  border-color: rgba(0, 0, 0, 0);
  padding: 7px 15px 7px 15px;
  border-style: none;
  background-color: ${({ backgroundcolor }) => backgroundcolor};
  color: ${({ color }) => color};
  transition: all 0.3s;

  &:hover {
    background-color: ${({ color }) => color};
    color: ${({ backgroundcolor }) => backgroundcolor};
    font-weight: bolder;
  }
`;

function BasicButton({
  title,
  backgroundcolor = theme.green.strong,
  color = theme.green.weak,
  onclick,
  alignitems = "center",
  justifycontent = "center",
  ...rest
}) {
  return (
    <Container alignitems={alignitems} justifycontent={justifycontent}>
      <Button
        onClick={onclick}
        color={color}
        backgroundcolor={backgroundcolor}
        {...rest}
      >
        {title}
      </Button>
    </Container>
  );
}

export default BasicButton;
