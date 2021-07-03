import React from "react";
import css from './pages.module.css'
import Status from "../components/status/Status";

function End(){
    return <div>
        <div class={css.sq}></div>
        <Status status="Shutting down" dot="orange"/>
    </div>;
}

export default End;