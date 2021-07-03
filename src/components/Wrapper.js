import React from "react";
import css from "./Wrapper.module.css";
import './wrapper.css';

function Wrapper(props) {
  return (
    <div className={[css.wrapper, "bg", props.page.name].join(" ")}>
      {props.children}
    </div>
  );
}


export default Wrapper;
