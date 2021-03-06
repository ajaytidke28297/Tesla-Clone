import React from "react";
import { NavLink } from "react-router-dom";
import classes from "./NavItem.module.css";

function NavItem(props) {
  return (
    <li className={classes.item}>
      <NavLink to={`/${props.item.replace(" ", "")}`}>
        <span>{props.item}</span>
      </NavLink>
    </li>
  );
}

export default NavItem;
