import React from "react";
import Button from "../UI/Button";

const MainHeader = () => {
  return (
    <header>
      <Button to="/login" title="LOGIN" />
      <Button to="/register" title="REGISTER" />
    </header>
  );
};

export default MainHeader;
