import React from "react";
import classes from "./Button.module.css";

function Button(props) {
  const classNames = props.className
    ? classes.button + " " + props.className
    : classes.button;

  return <button className={classNames}>{props.text}</button>;
}

export default Button;
