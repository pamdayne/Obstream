import React from "react";
import css from "./Wrapper.module.css";

function Wrapper(props) {
  return <div className={css.wrapper}>{props.children}</div>;
}

export default Wrapper;
