import React, { useState } from "react";
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
} from "date-fns";

import "./Cells.css";

const Cells = (props) => {
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
      emoticon: null,
      memo: "1111",
    },
    {
      date: "2023-09-14",
      emoticon: null,
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
      currentValue.memo
    );
  }

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
          onClick={() => props.onDateClick(cloneDay)}
        >
          <div
            className={
              format(props.currentDate, "M") !== format(day, "M")
                ? "text not-valid"
                : "valid-day"
            }
          >
            {formattedDate}

            <div>{`${calendarList[todayDate]?.join() || ""}`}</div>
            {/* <img src="2-b.png" alt="" /> */}
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

  return <div className="body">{rows}</div>;
};

export default Cells;
