import React from "react";
import { HashRouter } from "react-router-dom";
import ReactDom from "react-dom";
import Favicon from "react-favicon";
import ico from './img/favicon.ico';

import Main from "./Main";
import "./index.css";

ReactDom.render(
    <HashRouter>
      <Favicon url={ico} />
      <Main />
    </HashRouter>,
  document.getElementById("root")
);
