import React from "react";
import { NavLink } from "react-router-dom";
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
const NavContainer = styled.nav`
  width: 87rem;
  margin-top: 4rem;
  height: 7rem;
  background-color: #72d4cf;
  display: flex;
  justify-content: space-around;
  align-items: center;
`;

const MainNavBar = () => {
  return (
    <NavContainer>
      <NavStyle to="/" end>
        Home
      </NavStyle>
      <NavStyle to="/calendar">Calendar</NavStyle>
      <NavStyle to="/my-page">My page</NavStyle>
      <NavStyle to="/project-description">Project description</NavStyle>
    </NavContainer>
  );
};

export default MainNavBar;
