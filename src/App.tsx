import React from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import Home from './Page/Home';

function App() {
  return (
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/about' element={<div>어바웃페이지임</div>} />
    </Routes>
  );
}

export default App;
