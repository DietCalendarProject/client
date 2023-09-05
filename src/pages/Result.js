import React from "react";
import "./Result.css";

const Result = (props) => {
  return (
    <div className="result">
      <div className="result-title">
        <div>
          {props.selectedDate.getMonth() + 1}.{props.selectedDate.getDate()}{" "}
          {props.day}
        </div>
        <div>
          <button>수정</button>
          <button>삭제</button>
        </div>
      </div>
      <div>이모티콘</div>
      <div>{props.memo}</div>
    </div>
  );
};

export default Result;
