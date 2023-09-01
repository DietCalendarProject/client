import "./App.css";
import React from "react";
import { Routes, Route } from "react-router-dom";

import { Main } from "./Main/Main";
import { Login } from "./Login/Login";
import { SignUp } from "./SignUp/SignUp";
import { Calendar } from "./Calendar/Calendar";
import { MyPage } from "./MyPage/MyPage";
import { ProjectDescription } from "./ProjectDescription/ProjectDescription";
function App() {
  return (
    <Routes>
      <Route path="/" element={<Main />} exact={true}></Route>
      <Route path="/login" element={<Login />}></Route>
      <Route path="/signup" element={<SignUp />}></Route>
      <Route path="/calendar" element={<Calendar />}></Route>
      <Route path="/my-page" element={<MyPage />}></Route>
      <Route
        path="/project-description"
        element={<ProjectDescription />}
      ></Route>
    </Routes>
  );
}

export default App;
