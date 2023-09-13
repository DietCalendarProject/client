import React from "react";
import styled from "styled-components";
import SvgArrow from "../../assets/svgArrow";

const Container = styled.div`
  width: 100%;
  height: 100%;
  backgroundcolor: rgba(0, 0, 0, 0);
  bordercolor: rgba(0, 0, 0, 0);
  padding: 0;
  margin: 0;

  .arrow-svg {
    stroke: ${({ stroke }) => stroke};
    fill: ${({ fill }) => fill};
    stroke-width: ${({ strokeWidth }) => strokeWidth};
  }

  &:hover .arrow-svg {
    fill: ${({ stroke }) => stroke};
    stroke: ${({ fill }) => fill};
  }
`;

function Arrow({ isright, strokeWidth, stroke, fill, ...rest }) {
  return (
    <Container strokeWidth={strokeWidth} stroke={stroke} fill={fill}>
      <SvgArrow
        className="arrow-svg"
        transform={
          isright ? "matrix(1, 0, 0, 1, 0, 0)" : "matrix(-1, 0, 0, -1, 0, 0)"
        }
      ></SvgArrow>
    </Container>
  );
}

export default Arrow;
