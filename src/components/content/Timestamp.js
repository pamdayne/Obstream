import React from "react";
import css from './Timestamp.module.css';

function Timestamp() {
  function timeNow() {
    let today = new Date().toLocaleTimeString("en-US", {
      hour: "2-digit",
      minute: "2-digit",
    });

    return today;
  }

  return (
    <div className={css.timestamp}>
      <p>{timeNow()} SGT</p>
    </div>
  );
}

export default Timestamp;
