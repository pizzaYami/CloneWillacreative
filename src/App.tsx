import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./Page/Home";
import Vntrs from "./Page/Vntrs";
import Info from "./Page/Info/Info";
import WorkPage from "./Page/WorkPage";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/work" element={<WorkPage />} />
      <Route path="/vntrs" element={<Vntrs />} />
      <Route path="/info" element={<Info />} />
    </Routes>
  );
}

export default App;
