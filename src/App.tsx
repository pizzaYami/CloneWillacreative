import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './Page/Home';
import Work from './Page/Work/Work';
import Vntrs from './Page/Vntrs';

function App() {
  return (
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/work' element={<Work />} />
      <Route path='/vntrs' element={<Vntrs />} />
    </Routes>
  );
}

export default App;
