import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./Page/Home";
import Info from "./Page/Info/Info";
import WorkPage from "./Page/WorkPage";
import VntrsPage from "./Page/VntrsPage";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/work" element={<WorkPage />} />
      <Route path="/vntrs" element={<VntrsPage />} />
      <Route path="/info" element={<Info />} />
    </Routes>
  );
}

export default App;
