import React from "react";
import { Route } from "react-router-dom";

import css from "./Content.module.css";

import Chatbox from "../chatbox/Chatbox";
import Start from "../../pages/Start";
import Talk from "../../pages/Talk";
import Brb from "../../pages/Brb";
import End from "../../pages/End";

function Content(props) {
  return (
    <div className={css.content}>
      <Route exact path="/" component={Start} />
      <Route path="/talk/" component={Talk} />
      <Route path="/brb/" component={Brb} />
      <Route path="/end/" component={End} />

      <Chatbox />
    </div>
  );
}

export default Content;
