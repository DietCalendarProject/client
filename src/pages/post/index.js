import React, { useState } from "react";
import "./style.css";
import Menu from "./components/menu";
import Edit from "./components/edit";
import Card from "./components/card";
import Background from "./background";

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
  month = month > 9 ? month : "0" + month;
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
