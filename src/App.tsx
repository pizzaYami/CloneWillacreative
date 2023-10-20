import React from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import Home from './Page/Home';
import Work from './Page/Work';

function App() {
  return (
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/work' element={<Work />} />
    </Routes>
  );
}

export default App;
