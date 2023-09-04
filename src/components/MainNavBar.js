import React from "react";
import { NavLink } from "react-router-dom";
import "./MainNavBar.css";

const MainNavBar = () => {
  return (
    <nav>
      <ul>
        <li>
          <NavLink to="/" end>
            home
          </NavLink>
        </li>
        <li>
          <NavLink to="/calendar">calendar</NavLink>
        </li>
        <li>
          <NavLink to="/my-page">my page</NavLink>
        </li>
        <li>
          <NavLink to="/project-description">project description</NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default MainNavBar;
