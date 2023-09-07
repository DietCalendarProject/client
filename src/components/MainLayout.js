import React from "react";
import MainNavBar from "./MainNavBar";
import MainHeader from "./MainHeader";
import { Outlet } from "react-router-dom";
import "./MainLayout.css";

const MainLayout = () => {
  return (
    <div className="root-wrapper">
      <MainHeader />
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
