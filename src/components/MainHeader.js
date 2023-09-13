import React from "react";
import Button from "../UI/Button";

const MainHeader = () => {
  return (
    <header>
      <Button to="/login">Login</Button>
      <Button to="/register">Register</Button>
    </header>
  );
};

export default MainHeader;
