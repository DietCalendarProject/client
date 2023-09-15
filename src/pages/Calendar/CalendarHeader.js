import React, { useState } from "react";
import { Icon } from "@iconify/react";
import { format, addMonths, subMonths } from "date-fns";
import "./CalendarHeader.css";
import Arrow from "../../components/arrow";
import theme from "../../assets/theme";

const Header = (props) => {
  const prevMonth = () => {
    props.setCurrentDate(subMonths(props.currentDate, 1));
  };
  const nextMonth = () => {
    props.setCurrentDate(addMonths(props.currentDate, 1));
  };
  return (
    <div className="header">
      <div className="arrow before" onClick={prevMonth}>
        <Arrow
          strokeWidth={5}
          stroke={theme.green.weak}
          fill={theme.green.strong}
          isright={false}
          width={"3rem"}
        ></Arrow>
      </div>
      <div className="text">{format(props.currentDate, "yyyy년 MM월")}</div>
      <div className="arrow next" onClick={nextMonth}>
        <Arrow
          strokeWidth={5}
          stroke={theme.green.weak}
          fill={theme.green.strong}
          isright={true}
          width={"3rem"}
        ></Arrow>
      </div>
    </div>
  );
};

export default Header;
