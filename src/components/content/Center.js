import React from "react";

import { Route } from "react-router-dom";

import Start from "../../pages/Start";
import Talk from "../../pages/Talk";
import Brb from "../../pages/Brb";
import End from "../../pages/End";

import Timestamp from "../content/Timestamp";


function Center(props) {
  return (
    <div className="center">
        <Timestamp />
      <div>
        <Route exact path="/" component={Start} />
        <Route path="/talk/" component={Talk} />
        <Route path="/brb/" component={Brb} />
        <Route path="/end/" component={End} />

      </div>
    </div>
  );
}

export default Center;
