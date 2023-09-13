import React from "react";
import "./style.css";
import Arrow from "../../../components/arrow";
import theme from "../../../assets/theme";
const Menu = () => {
  return (
    <div className="menu">
      <div className="arrow before">
        <Arrow
          strokeWidth={5}
          stroke={theme.green.weak}
          fill={theme.green.strong}
          isright={false}
        ></Arrow>
      </div>
      <div>
        8월 16일
        {/* {날짜변수} */}
      </div>
      <div className="arrow next">
        <Arrow
          strokeWidth={5}
          stroke={theme.green.weak}
          fill={theme.green.strong}
          isright={true}
        ></Arrow>
      </div>
    </div>
  );
};

export default Menu;