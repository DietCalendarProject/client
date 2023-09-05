import React from "react";
import "./Days.css"

const Days = () => {
  const days = [];
  const date = ["일", "월", "화", "수", "목", "금", "토"];

  for (let i = 0; i < 7; i++) {
    days.push(<div className="row-days" key={date[i]}>{date[i]}</div>);
  }
  return <div className="row">{days}</div>;
};

export default Days;
