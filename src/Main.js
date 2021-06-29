import React from "react";
import { HashRouter } from "react-router-dom";

import Wrapper from "./components/Wrapper";
import LeftSidebar from "./components/sidebar/LeftSidebar";
import RightSidebar from "./components/sidebar/RightSidebar";
import MiddleContent from "./components/content/MiddleContent";

function Main() {
  return (
    <HashRouter>
      <Wrapper>
        <LeftSidebar />
        <MiddleContent />
        <RightSidebar />
      </Wrapper>
    </HashRouter>
  );
}

export default Main;
