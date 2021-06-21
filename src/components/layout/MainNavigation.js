import React from "react";
import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import classes from "./MainNavigation.module.css";
import NavItem from "./NavItem";

function MainNavigation(props) {
  const { leftItems, rightItems } = useSelector((state) => state.nav);

  return (
    <header className={classes.header}>
      <div className={classes.logo}>
        <NavLink to="/">
          <img src="/images/logo.svg" alt="Tesla Clone" />
        </NavLink>
      </div>
      <nav className={classes.leftMenu}>
        <ul>
          {leftItems.map((item) => (
            <NavItem key={item} item={item} />
          ))}
        </ul>
      </nav>
      <ul className={classes.rightMenu}>
        {rightItems.map((item) => (
          <NavItem key={item} item={item} />
        ))}
      </ul>
    </header>
  );
}

export default MainNavigation;
