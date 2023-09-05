import React from 'react';
import "./Result.css"
const Empty = (props) => {
    return (
        <div className="result">
        <div className="result-title">
          <div>
            {props.selectedDate.getMonth() + 1}.{props.selectedDate.getDate()} {props.day}
          </div>
          <div>
            <button>일기 쓰기</button>
          </div>
        </div>
        <div>작성된 일기가 없습니다.</div>
      </div>
    );
};

export default Empty;