import React from "react";
import "./style.css";
import BasicBlutton from "../../../../components/button/button";

const Card = ({
  isBlank,
  title = "EDIT",
  data,
  weight,
  memo,
  emoticon,
  onClickEdit = "",
  onClickClose = "",
}) => {
  // 데이터를 받아와서 get으로 보여줘야함
  return (
    <div className="card">
      <div
        className="card-box"
        style={
          isBlank === true ? { display: "none" } : { display: "block flex" }
        }
      >
        <div>아직 작성내용이 없어요! </div>
        <br />
        <div>EDIT을 눌러 작성해주세요</div>
      </div>
      <div
        className="card-box"
        style={
          isBlank === true ? { display: "block flex" } : { display: "none" }
        }
      >
        <div className="card-box_left">
          <div className="card-box-weight">
            <span>Weight : </span>
            <span>{weight}kg</span>
          </div>
          <div className="card-box-contents">{memo}</div>
        </div>
        <div className="card-box_right">
          <img className="card-box-img" src={emoticon}></img>
        </div>
      </div>
      <div className="card-box_btns">
        <BasicBlutton
          title={title}
          justifyContent={"end"}
          onClick={onClickEdit}
        ></BasicBlutton>
        <BasicBlutton
          title={"CLOSE"}
          justifyContent={"end"}
          onclick={onClickClose}
        ></BasicBlutton>
      </div>
    </div>
  );
};

export default Card;
