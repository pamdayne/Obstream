import React from "react";
import Nav from "../nav/Nav";
import Streamer from "../streamer/Streamer";
import Timestamp from "../content/Timestamp";
import css from "./LeftSidebar.module.css";


function LeftSidebar() {
  return (
    <div className={css.sidebar}>
      <Streamer />
      <Nav />
      <Timestamp/>
    </div>
  );
}

export default LeftSidebar;
