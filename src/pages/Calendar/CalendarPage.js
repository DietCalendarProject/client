import React, { useState } from "react";
import Header from "./CalendarHeader";
import "./CalendarPage.css";
import Days from "./Days";
import Cells from "./Cells";
import theme from "../../assets/theme";
import { styled } from "styled-components";

const CalendarPage = () => {
  const [currentDate, setCurrentDate] = useState(new Date());
  const [selectedDate, setSelectedDate] = useState(new Date());

  const onDateClick = (day) => {
    setSelectedDate(day);
  };

  return (
    <div className="calender-page">
      <div className="calender">
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
    </div>
  );
};

export default CalendarPage;

const Calendar = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: theme.yellow.strong;
`;
