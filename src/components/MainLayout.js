import React from "react";
import MainNavBar from "./MainNavBar";
import MainHeader from "./MainHeader";
import MainFooter from "./MainFooter";
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
        <MainFooter />
      </footer>
    </div>
  );
};

export default MainLayout;
