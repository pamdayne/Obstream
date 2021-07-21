import React from "react";
import { useLocation } from "react-router-dom";

import Talkbox from "./components/content/Talkbox";
import Wrapper from "./components/Wrapper";
import Content from "./components/content/Content";
import LeftSidebar from "./components/sidebar/LeftSidebar";
import Flakes from "./components/ui/Flakes";

function Main() {
  const locate = useLocation();

  const page = {
    name: locate.pathname.replace(/\\|\//g, ""),
  };

  return (
    <>
      <Wrapper page={page}>
        <Flakes />
        <LeftSidebar />
        {page.name === "talk" ? <Talkbox /> : null}
        <Content />
      </Wrapper>
    </>
  );
}

export default Main;
