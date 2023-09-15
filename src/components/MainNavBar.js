import React from "react";
import { NavLink } from "react-router-dom";
import "./MainNavBar.css";
import styled from "styled-components";

const NavStyle = styled(NavLink)`
  color: white;
  font-size: 1.5rem;
  font-weight: border;
  margin: 5px;
  outline: invert;
  &:link {
    transition: 0.5s;
    text-decoration: none;
  }
  &:hover {
    color: #3aa19c;
    font-size: 1.8rem;
  }
  &.active {
    color: white;
    position: relative;
    top: 2px;
    font-size: 1.8rem;
    padding: 0.4rem 0 1rem 0;
    border-bottom: 0.2rem solid rgba(255, 255, 255, 0.7);
  }
`;

const MainNavBar = () => {
  return (
    <div className="container">
      <nav>
        <ul>
          <li>
            <div>
              <NavStyle to="/" end>
                Home
              </NavStyle>
            </div>
          </li>
          <li>
            <div>
              <NavStyle to="/calendar">Calendar</NavStyle>
            </div>
          </li>

          <li>
            <div>
              <NavStyle to="/my-page">My page</NavStyle>
            </div>
          </li>
          <li>
            <div>
              <NavStyle to="/project-description">Project description</NavStyle>
            </div>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default MainNavBar;
