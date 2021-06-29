import React from "react";
import { Route } from "react-router-dom";
import css from "./Content.module.css";

import Intro from "../../pages/Intro";
import Talk from "../../pages/Talk";
import Brb from "../../pages/Brb";
import End from "../../pages/End";

function Content(props) {
  return (
    <div className={css.content}>
      <div className="content">
        <Route exact path="/" component={Intro} />
        <Route path="/talk" component={Talk} />
        <Route path="/brb" component={Brb} />
        <Route path="/end" component={End} />
      </div>
    </div>
  );
}

export default Content;
