import React from "react";
import Status from "../components/status/Status";

import logo from "../img/pam_light.png";

function Start(props) {
  return (
    <div>
      <Status status="Loading" dot="red" />
      <div className="border-wrapper">
        <img src={logo} alt="Daeynne Logo" />
        <div className="title">Starting</div>
      </div>
    </div>
  );
}

export default Start;
