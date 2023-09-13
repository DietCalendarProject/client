import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const Container = styled.div`
  width: 100%;
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
  background-color: #72d4cf;
  color: #ffffff;
  transition: all 0.3s;

  &:hover {
    background-color: #ffffff;
    color: #72d4cf;
    font-weight: bolder;
  }
`;

const BasicButton = ({
  title,
  onclick,
  alignItems = "center",
  justifyContent = "center",
  ...rest
}) => {
  return (
    <Link to={rest.to} style={{ textDecoration: "none" }}>
      <Container alignItems={alignItems} justifyContent={justifyContent}>
        <Button onclick={onclick} {...rest}>
          {title}
        </Button>
      </Container>
    </Link>
  );
};

export default BasicButton;
