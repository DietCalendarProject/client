import React, { useState } from "react";
import { Icon } from "@iconify/react";
import { format, addMonths, subMonths } from "date-fns";
import "./Header.css"

const Header = (props) => {

  const prevMonth = () => {
    props.setCurrentDate(subMonths(props.currentDate, 1));
  };
  const nextMonth = () => {
    props.setCurrentDate(addMonths(props.currentDate, 1));
  };
  return (
    <div className="header">
      <div className="row-start">
        <Icon icon="bi:arrow-left-circle-fill" onClick={prevMonth} />
      </div>
      <div className="text">{format(props.currentDate, "yyyy년 MM월")}</div>
      <div className="row-end">
        <Icon icon="bi:arrow-right-circle-fill" onClick={nextMonth} />
      </div>
    </div>
  );
};

export default Header;
