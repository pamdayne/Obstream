import React from "react";
import { HashRouter } from "react-router-dom";
import ReactDom from "react-dom";

import Main from "./Main";
import "./index.css";


ReactDom.render(<HashRouter><Main /></HashRouter>, document.getElementById("root"));