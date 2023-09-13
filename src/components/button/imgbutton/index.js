import React, { useState } from "react";
import styled from "styled-components";

const Container = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-around;
`;

const Button = styled.button`
  width: 4rem;
  height: 4rem;
  padding: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
  border-radius: 2rem;
  border-style: none;
  transition: all 0.5s;
  background-color: red;
  scale: ${({ scale }) => (scale ? 1.2 : 1)};

  &button:hover {
    scale: 1.2;
  }

  img {
    display: inline-block;
    width: 130%;
    height: 130%;
  }
`;

function ImgButton({ info, ...rest }) {
  const [clicked, setClicked] = useState();
  const btn = info.map((a, i) => {
    return (
      <Button
        key={i}
        name={a.value}
        scale={clicked === i ? true : false}
        id={clicked === i ? "clicked" : ""}
        {...rest}
        onClick={(a) => {
          setClicked(i);
        }}
      >
        <img src={a.src}></img>
      </Button>
    );
  });

  return <Container>{btn}</Container>;
}
export default ImgButton;
