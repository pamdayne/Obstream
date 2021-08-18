import React from "react";
import Status from "../components/status/Status";

import logo from "../img/pam_light.png";

function Brb(){
    return <div>
        <Status status="Away from keyboard" dot="pause" />
        <div className="border-wrapper">
        <img src={logo} alt="Daeynne Logo" />
        <div className="title">BE RIGHT BACK</div>
      </div>
    </div>;
}

export default Brb;