import WorkContents from "../Component/Work/WorkContents";
import Header from "../Component/common/Header";
import NavBar from "../Component/common/NavBar";
import React from "react";

function WorkPage() {
  return (
    <>
      <Header />
      <NavBar bgBtn={true} list={["all", "web", "content", "branding"]} />
      <WorkContents />
    </>
  );
}

export default WorkPage;
