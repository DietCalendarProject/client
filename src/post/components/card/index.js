import React from "react";
import "./style.css";

const Card = ({ data, weight, contents, img }) => {
  // 데이터를 받아와서 get으로 보여줘야함
  return (
    <div className="card">
      <div className="card-data">8월16일</div>
      <div className="card-box">
        <div className="card-box_left">
          <div className="card-box-weight">
            <span>Weight </span>
            <span>50kg</span>
          </div>
          <div className="card-box-contents">어제 밤 10시에 엽떡먹음 ㅠ</div>
        </div>
        <div className="card-box_right">
          <img className="card-box-img" src="./sad.png"></img>
        </div>
      </div>
    </div>
  );
};

export default Card;
