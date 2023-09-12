import React from "react";
import "./style.css";
import Menu from "./components/menu";
import Main from "./components/main";
import Card from "./components/card";
import BasicBlutton from "../components/button/button";
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
          <BasicBlutton title={"CLOSE"}>
            {/* onclick 시 모달 창닫기 */}
          </BasicBlutton>
        </div>
      </div>
    </>
    // {/* </Background>
    // </> */}
  );
};

export default Post;
