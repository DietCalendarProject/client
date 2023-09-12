import * as React from "react";
const SvgArrow = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64" {...props}>
    <circle
      cx={32}
      cy={32}
      r={30}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeMiterlimit={10}
      data-name="layer2"
    />
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeMiterlimit={10}
      d="M14.002 32.002h35M36 21l13 11-13 11"
      data-name="layer1"
    />
  </svg>
);
export default SvgArrow;
