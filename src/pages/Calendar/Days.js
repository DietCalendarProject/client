import React from "react";
import "./Days.css";

const Days = () => {
  const days = [];
  const date = ["SUN", "MON", "TUE", "WED", "THU", "FRI", "SAT"];

  for (let i = 0; i < 7; i++) {
    days.push(
      <div className="row-day" key={date[i]}>
        {date[i]}
      </div>
    );
  }
  return <div className="row-days">{days}</div>;
};

export default Days;
