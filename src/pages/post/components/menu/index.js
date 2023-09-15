import React from "react";
import "./style.css";
import Arrow from "../../../../components/arrow";
import theme from "../../../../assets/theme";

const Menu = ({ date, prevDate, nextDate }) => {
  return (
    <div className="menu">
      <div className="arrow before" onClick={prevDate}>
        <Arrow
          strokeWidth={5}
          stroke={theme.green.weak}
          fill={theme.green.strong}
          isright={false}
        ></Arrow>
      </div>
      <div>{date}</div>
      <div className="arrow next" onClick={nextDate}>
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
