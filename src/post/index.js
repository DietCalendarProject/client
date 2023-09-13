import React from "react";
import "./style.css";
import Menu from "./components/menu";
import Main from "./components/main";
import Card from "./components/card";
import BasicButton from "../components/button/button";
import Background from "./background";

const Post = () => {
  return (
    // <>
    // <Background>
    <>
      <div className="background">
        <div className="backDrop">
          <Menu></Menu>
          <Main></Main>
          <Card></Card>
          <BasicButton title={"CLOSE"}>
            {/* onclick 시 모달 창닫기 */}
          </BasicButton>
        </div>
      </div>
    </>
    // {/* </Background>
    // </> */}
  );
};

export default Post;
