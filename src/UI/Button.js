import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const Container = styled.div`
  width: 100%;
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
  background-color: #72d4cf;
  color: #ffffff;
  transition: all 0.3s;
  margin: 0.5rem;

  &:hover {
    background-color: #ffffff;
    color: #72d4cf;
    font-weight: bolder;
  }
  &:disabled,
  &:disabled:hover,
  &:disabled:active {
    font-weight: 500;
    background-color: #ccc;
    color: #292929;
    border-color: #ccc;
    cursor: not-allowed;
  }
`;

const BasicButton = ({
  title,
  onClick,
  alignItems = "center",
  justifyContent = "center",
  ...rest
}) => {
  return (
    <Link to={rest.to} style={{ textDecoration: "none" }}>
      <Container alignitems={alignItems} justifycontent={justifyContent}>
        <Button onClick={onClick} {...rest}>
          {title}
        </Button>
      </Container>
    </Link>
  );
};

export default BasicButton;
