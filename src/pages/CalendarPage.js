import React, { useEffect, useState } from "react";
import Header from "./CalendarHeader";
import "./CalendarPage.css";
import Days from "./Days";
import Cells from "./Cells";
import Result from "./Result";
import Empty from "./Empty";

const CalendarPage = () => {
  const [currentDate, setCurrentDate] = useState(new Date());
  const [selectedDate, setSelectedDate] = useState(new Date());

  const [data, setData] = useState([
    {
      date: new Date(2023, 8, 7),
      emoticon: null,
      memo: "보람찬 하루",
    },
    {
      date: new Date(2023, 8, 9),
      emoticon: null,
      memo: "신나는 어깨춤",
    },
  ]);

  const onDateClick = (day) => {
    setSelectedDate(day);
  };

  let day = selectedDate.getDay();
  switch (day) {
    case 0:
      day = "일요일";
      break;
    case 1:
      day = "월요일";
      break;
    case 2:
      day = "화요일";
      break;
    case 3:
      day = "수요일";
      break;
    case 4:
      day = "목요일";
      break;
    case 5:
      day = "금요일";
      break;
    case 6:
      day = "토요일";
      break;
  }
  const filteredData = data.filter((data) => {
    return data.date.toString() === selectedDate.toString();
  });
  let contents = <Empty selectedDate={selectedDate} day={day} />;
  if (filteredData.length > 0) {
    contents = filteredData.map((datas) => (
      <Result selectedDate={selectedDate} day={day} memo={datas.memo} />
    ));
  }
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
      {contents}
    </div>
  );
};

export default CalendarPage;
