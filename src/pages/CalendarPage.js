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
      <div className="result">
        <div className="result-title">
          <div>8.31 목요일</div>
          <div>
            <button>수정</button>
            <button>삭제</button>
            <button>일기 쓰기</button>
          </div>
        </div>
        <div>이모티콘</div>
        <div>메모</div>
      </div>
    </div>
  );
};

export default CalendarPage;
