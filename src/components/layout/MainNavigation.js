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
          {/* <svg
            viewBox="0 0 342 35"
            xmlns="http://www.w3.org/2000/svg"
            height="1.2rem"
          >
            <path
              d="M0 .1a9.7 9.7 0 007 7h11l.5.1v27.6h6.8V7.3L26 7h11a9.8 9.8 0 007-7H0zm238.6 0h-6.8v34.8H263a9.7 9.7 0 006-6.8h-30.3V0zm-52.3 6.8c3.6-1 6.6-3.8 7.4-6.9l-38.1.1v20.6h31.1v7.2h-24.4a13.6 13.6 0 00-8.7 7h39.9v-21h-31.2v-7h24zm116.2 28h6.7v-14h24.6v14h6.7v-21h-38zM85.3 7h26a9.6 9.6 0 007.1-7H78.3a9.6 9.6 0 007 7zm0 13.8h26a9.6 9.6 0 007.1-7H78.3a9.6 9.6 0 007 7zm0 14.1h26a9.6 9.6 0 007.1-7H78.3a9.6 9.6 0 007 7zM308.5 7h26a9.6 9.6 0 007-7h-40a9.6 9.6 0 007 7z"
              fill="var(--tds-icon--fill, #171a20)"
            ></path>
          </svg> */}
          <svg className={classes.tesla}>
            <use href="/images/logo.svg#logo" />
          </svg>
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
