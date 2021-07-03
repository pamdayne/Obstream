import React from "react";
import css from "./LeftSidebar.module.css";

import Nav from "../nav/Nav";
import Streamer from "../streamer/Streamer";
import Timestamp from "../content/Timestamp";

function LeftSidebar() {
  return (
    <div className={[css.sidebar, "sidebar"].join(" ")}>
      <Streamer />
      <Nav />
      <Timestamp />
    </div>
  );
}

export default LeftSidebar;
