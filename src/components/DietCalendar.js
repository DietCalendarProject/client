import React, { useState } from "react";
import Header from "./Header";
import "./DietCalendar.css";
import Days from "./Days";
import Cells from "./Cells";

const DietCalendar = () => {
  const [currentDate, setCurrentDate] = useState(new Date());
  const [selectedDate, setSelectedDate] = useState(new Date());

  const onDateClick = (day) => {
    setSelectedDate(day);
  };

  return (
    <div>
      <div>
        <Header currentDate={currentDate} setCurrentDate={setCurrentDate} />
      </div>
      <div>
        <Days />
      </div>
      <div>
        <Cells
          currentDate={currentDate}
          setCurrentDate={setCurrentDate}
          selectedDate={selectedDate}
          onDateClick={onDateClick}
        />
      </div>
    </div>
  );
};

export default DietCalendar;
