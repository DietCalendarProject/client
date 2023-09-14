import React, { useState } from "react";
import "./style.css";
import Menu from "./components/menu";
import Edit from "./components/edit";
import Card from "./components/card";
import Background from "./background";
import { blankPost, writedPost } from "../../test";

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
}) => {
  const [edit, setEdit] = useState(false);
  const [isBlank, setIsBlank] = useState(writed);
  return (
    // <>
    // <Background>
    <>
      <div className="background">
        <div className="backDrop">
          <Menu date={date}></Menu>
          <Card
            isBlank={isBlank}
            date={date}
            weight={weight}
            memo={memo}
            emoticon={selectEmoticon(emoticon)}
            onClickEdit={() => setEdit(!edit)}
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
        </div>
      </div>
    </>
    // {/* </Background>
    // </> */}
  );
};

export default Post;
