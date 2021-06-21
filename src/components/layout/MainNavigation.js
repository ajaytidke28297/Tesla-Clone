import React from "react";
import { NavLink } from "react-router-dom";
import classes from "./MainNavigation.module.css";

function MainNavigation(props) {
  return (
    <header className={classes.header}>
      <div className={classes.logo}>
        <NavLink to="/">
          <img src="/images/logo.svg" alt="Tesla Clone" />
        </NavLink>
      </div>
      <nav className={classes.leftMenu}>
        <ul>
          <li>
            <NavLink to="/ModelS">
              <span>Model S</span>
            </NavLink>
          </li>
          <li>
            <NavLink to="/Model3">
              <span>Model 3</span>
            </NavLink>
          </li>
          <li>
            <NavLink to="/ModelX">
              <span>Model X</span>
            </NavLink>
          </li>
          <li>
            <NavLink to="/ModelY">
              <span>Model Y</span>
            </NavLink>
          </li>
          <li>
            <NavLink to="/SolarR">
              <span>Solar Roof</span>
            </NavLink>
          </li>
          <li>
            <NavLink to="/SolarP">
              <span>Solar Panels</span>
            </NavLink>
          </li>
        </ul>
      </nav>
      <ul className={classes.rightMenu}>
        <li>
          <NavLink to="/Model3">
            <span>Shop</span>
          </NavLink>
        </li>
        <li>
          <NavLink to="/Model3">
            <span>Account</span>
          </NavLink>
        </li>
        <li>
          <NavLink to="/Model3">
            <span>Menu</span>
          </NavLink>
        </li>
      </ul>
    </header>
  );
}

export default MainNavigation;
