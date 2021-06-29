import React from "react";
import css from "./RightSidebar.module.css";

import Chatbox from "../chatbox/Chatbox";
import Status from "../status/Status";
import Content from "../content/Content";

function RightSidebar() {
  return (
    <div className={css.sidebar}>
      <Content />
      <Status/>
      <Chatbox/>
      <p className={css.img_credit}>gameplay image: Among Trees</p>
{/*  */}
    </div>
  );
}

export default RightSidebar;
