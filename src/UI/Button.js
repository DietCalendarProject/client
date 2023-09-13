import React from "react";
import { Link } from "react-router-dom";
import "./Button.css";

const Button = (props) => {
  return (
    <Link to={props.to}>
      <button
        className="button"
        type={props.type || "button"}
        onClick={props.onClick}
      >
        {props.children}
      </button>
    </Link>
  );
};

export default Button;
