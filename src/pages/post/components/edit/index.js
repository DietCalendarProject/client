import React, { useRef } from "react";
import "./style.css";
import ImgButton from "../../../../components/button/imgbutton";
import BasicBlutton from "../../../../components/button/button";
import Advice from "../../../../components/advice";
import checkInput from "./useLogic";

const Edit = () => {
  const weightInputRef = useRef();
  const diaryInputRef = useRef();
  const btnInfo = [
    { src: "./happy.png", value: "happy" },
    { src: "./sad.png", value: "sad" },
  ];

  return (
    <div className="main">
      <div className="main-box weight">
        <span>Weight</span>
        <input
          name={"weight"}
          type="number"
          placeholder=" write here !"
          ref={weightInputRef}
        ></input>
      </div>
      <Advice id={"weight"}></Advice>
      <div className="main-box diary">
        <span>Today diary </span>
        <textarea
          name={"diary"}
          placeholder=" write here!"
          ref={diaryInputRef}
        ></textarea>
      </div>
      <Advice id={"diary"}></Advice>
      <div className="main-box feelings">
        <span>Today feelings </span>
        <ImgButton className="feelings-btn" info={btnInfo}></ImgButton>
      </div>
      <Advice id={"feelings"}></Advice>
      <div className="main-box submit">
        <BasicBlutton
          title={"SUBMIT"}
          justifycontent={"end"}
          onClick={() => {
            checkInput(
              weightInputRef.current.value,
              diaryInputRef.current.value,
              document.getElementById("clicked")
            );
          }}
        ></BasicBlutton>
      </div>
    </div>
  );
};
export default Edit;
