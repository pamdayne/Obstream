import React from "react";
import { NavLink } from "react-router-dom";
// import Status from "../status/Status";

import css from "./Nav.module.css";

function Nav() {
  const checkActive = (match, location) => {
    //some additional logic to verify you are in the home URI
    if (!location) return false;
    const { pathname } = location;
    return pathname === "/";
  };

  const style = {
    textShadow: "0 0 10px #fff",
    fontWeight: "bold",
    opacity: "1",
  };

  return (
    <div className={css.wrapper}>
      <ul className={css.nav}>
        <li>
          <NavLink to="/" isActive={checkActive} activeStyle={style}>
            Starting
          </NavLink>
        </li>
        <li>
          <NavLink to="/talk" activeStyle={style}>
            Talking
          </NavLink>
        </li>
        <li>
          <NavLink to="/brb" activeStyle={style}>
            Be Right Back
          </NavLink>
        </li>
        <li>
          <NavLink to="/end" activeStyle={style}>
            Ending
          </NavLink>
        </li>
      </ul>
    </div>
  );
}

export default Nav;
