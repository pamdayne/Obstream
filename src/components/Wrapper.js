import React from "react";
import Nav from './nav/Nav';
import css from '../components/style/Wrapper.css';

function Wrapper(props) {
  return (
    <>
    <Nav />
    <div className={["wrapper bg", props.page.name].join(" ")}>
      {props.children}
    </div>
    </>
  );
}


export default Wrapper;
