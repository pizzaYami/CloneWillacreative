import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./Page/Home";
import WorkPage from "./Page/WorkPage";
import VntrsPage from "./Page/VntrsPage";
import InfoPage from "./Page/InfoPage";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/work" element={<WorkPage />} />
      <Route path="/vntrs" element={<VntrsPage />} />
      <Route path="/info" element={<InfoPage />} />
    </Routes>
  );
}

export default App;
