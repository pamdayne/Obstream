import React from "react";
import { useLocation } from "react-router-dom";

import Wrapper from "./components/Wrapper";
import SidebarR from "./components/sidebar/SidebarR";
import Flakes from "./components/flakes/Flakes";
import Center from "./components/content/Center";

function Main() {
  const locate = useLocation();

  const page = {
    name: locate.pathname.replace(/\\|\//g, ""),
  };
  return (
    <>
      <Wrapper page={page}>
        <Flakes />
        <Center />
        <SidebarR />
      </Wrapper>
    </>
  );
}

export default Main;
