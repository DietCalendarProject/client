import React from "react";
import MainNavBar from "./MainNavBar";
import { Outlet } from "react-router-dom";
import "./MainLayout.css";

const MainLayout = () => {
  return (
    <div className="root-wrapper">
      <header>login/logout button</header>
      <main>
        <Outlet />
      </main>
      <footer>
        <MainNavBar />
      </footer>
    </div>
  );
};

export default MainLayout;
