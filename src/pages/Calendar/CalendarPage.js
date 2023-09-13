import React, { useState } from "react";
import Header from "./CalendarHeader";
import "./CalendarPage.css";
import Days from "./Days";
import Cells from "./Cells";

const CalendarPage = () => {
  const [currentDate, setCurrentDate] = useState(new Date());
  const [selectedDate, setSelectedDate] = useState(new Date());



  const onDateClick = (day) => {
    setSelectedDate(day);
  };

  return (
    <div className="calender-page">
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

export default CalendarPage;
