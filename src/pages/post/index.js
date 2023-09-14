import React, { useState } from "react";
import "./style.css";
import Menu from "./components/menu";
import Edit from "./components/edit";
import Card from "./components/card";
import Background from "./background";
import { blankPost, writedPost } from "../../test";
import ReactDOM from "react-dom";

const dumy = {
  date: "9월 16일",
  weight: 43,
  memo: "오늘도 열심히 닭가슴살과 고구마를 먹었다.",
  emoticon: "happy",
};

function trim(str) {
  return str.replace(/(^\s*)|(\s*$)/g, "");
}

function makePost(data = { date: "", weight: 0, memo: "", emoticon: "" }) {
  const date = trim(data.date);
  const weight = data.weight;
  const memo = trim(data.memo);
  const emoticon = trim(data.emoticon);
  const writed = true;

  if (date !== "" && weight !== "" && memo !== "" && emoticon !== "") {
    return date, weight, memo, emoticon, writed;
  } else {
    writed = false;
    return date, weight, memo, emoticon, writed;
  }
}

function selectEmoticon(a) {
  if (a === "happy") {
    return "./happy.png";
  } else if (a === "sad") {
    return "./sad.png";
  } else {
    return "";
  }
}

const Post = ({
  date = "3월8일",
  weight = "40",
  memo = "엽떡좋앙",
  emoticon = "happy",
  writed = true,
  setIsOpen,
  prevDate,
  nextDate,
  currentDate,
}) => {
  const [edit, setEdit] = useState(false);
  const [isBlank, setIsBlank] = useState(writed);

  const today = currentDate;
  const year = today.getFullYear();
  let month = today.getMonth() + 1;
  let dates = today.getDate();
  month = month > 10 ? month : "0" + month;
  dates = dates > 9 ? dates : "0" + dates;
  const todayDate = `${year}-${month}-${dates}`;

  const closeModal = () => {
    setIsOpen(false);
  };

  return (
    // <>
    // <Background>
    <>
      {ReactDOM.createPortal(
        <div className="background" onClick={closeModal} />,
        document.getElementById("backdrop-root")
      )}
      {ReactDOM.createPortal(
        <div className="backDrop">
          <Menu date={todayDate} prevDate={prevDate} nextDate={nextDate}></Menu>
          <Card
            isBlank={isBlank}
            date={date}
            weight={weight}
            memo={memo}
            emoticon={selectEmoticon(emoticon)}
            onClickEdit={() => setEdit(!edit)}
            onClickClose={closeModal}
            title={edit === false ? "EDIT" : "X"}
          ></Card>
          {edit === true ? (
            <Edit
              date={date}
              weight={weight}
              memo={memo}
              emoticon={emoticon}
            ></Edit>
          ) : (
            ""
          )}
        </div>,
        document.getElementById("overlay-root")
      )}
    </>
    // {/* </Background>
    // </> */}
  );
};

export default Post;
