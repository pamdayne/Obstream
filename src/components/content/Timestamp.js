import React from "react";
import '../style/Content.css'

function Timestamp(props) {
  function timeNow() {
    let today = new Date().toLocaleTimeString("en-US", {
      hour: "2-digit",
      minute: "2-digit",
    });

    return today;
  }

  return (
    <div className={["timestamp", props.class].join(" ")}>
      <p>{timeNow()} SGT</p>
    </div>
  );
}

export default Timestamp;
