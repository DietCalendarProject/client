import React, { useEffect, useState } from "react";
import {
  format,
  endOfMonth,
  endOfWeek,
  isSameDay,
  startOfMonth,
  startOfWeek,
  isSameMonth,
  parse,
  addDays,
  subDays,
} from "date-fns";

import "./Cells.css";
import happy from "./happy.png";
import sad from "./sad.png";
import Post from "../post/index";

const Cells = (props) => {
  const [isOpen, setIsOpen] = useState(false);
  const monthStart = startOfMonth(props.currentDate);
  const monthEnd = endOfMonth(monthStart);
  const startDate = startOfWeek(monthStart);
  const endDate = endOfWeek(monthEnd);

  const rows = [];
  let days = [];
  let day = startDate;
  let formattedDate = "";

  const [data, setData] = useState([
    {
      date: "2023-09-07",
      emoticon: "happy",
      memo: "1111",
    },
    {
      date: "2023-09-14",
      emoticon: "sad",
      memo: "2222",
    },
  ]);

  const calendarList = {};
  for (let index = 0; index < data.length; index++) {
    const currentValue = data[index];
    if (!calendarList[currentValue]) {
      calendarList[currentValue.date] = [];
    }
    calendarList[currentValue.date] = calendarList[currentValue.date].concat(
      currentValue.emoticon
    );
  }

  const cellClick = (cloneDay) => {
    props.onDateClick(cloneDay);
    setIsOpen(true);
    // props.setCurrentDate(props.selectedDate);
  };
  useEffect(() => {
    props.setCurrentDate(props.selectedDate);
  }, [props.selectedDate]);
  const prevDate = () => {
    props.setCurrentDate(subDays(props.currentDate, 1));
  };
  const nextDate = () => {
    props.setCurrentDate(addDays(props.currentDate, 1));
  };

  while (day <= endDate) {
    for (let i = 0; i < 7; i++) {
      formattedDate = format(day, "d");
      const cloneDay = day;

      const today = cloneDay;
      const year = today.getFullYear();
      let month = today.getMonth() + 1;
      let date = today.getDate();
      month = month > 10 ? month : "0" + month;
      date = date > 10 ? date : "0" + date;
      const todayDate = `${year}-${month}-${date}`;

      days.push(
        <div
          className={`col cell ${
            !isSameMonth(day, monthStart)
              ? "disabled"
              : isSameDay(day, props.selectedDate)
              ? "selected"
              : format(props.currentDate, "M") !== format(day, "M")
              ? "not-valid"
              : "valid"
          }`}
          key={day}
          onClick={() => cellClick(cloneDay)}
          // onClick={() => props.onDateClick(cloneDay)}
        >
          <div
            className={
              format(props.currentDate, "M") !== format(day, "M")
                ? "text not-valid"
                : "valid-day"
            }
          >
            {formattedDate}

            <div className="emoticon">
              {`${calendarList[todayDate]}` === "happy" && <img src={happy} />}
              {`${calendarList[todayDate]}` === "sad" && <img src={sad} />}
            </div>
          </div>
        </div>
      );
      day = addDays(day, 1);
    }
    rows.push(
      <div className="row" key={day}>
        {days}
      </div>
    );
    days = [];
  }

  return (
    <>
      {isOpen && (
        <Post
          setIsOpen={setIsOpen}
          prevDate={prevDate}
          nextDate={nextDate}
          currentDate={props.currentDate}
        />
      )}
      <div className="body">{rows}</div>;
    </>
  );
};

export default Cells;
