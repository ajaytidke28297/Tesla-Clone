import React from "react";
import classes from "./Header.module.css";

function Header(props) {
  return (
    <div className={classes.heading}>
      <h1>{props.title}</h1>
      <p>{props.description}</p>
    </div>
  );
}

export default Header;
