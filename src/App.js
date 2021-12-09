import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import Home from './pages/Home';
import Error404 from './pages/404';

function App() {
  return (
    <React.Fragment>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/*" element={<Error404/>} />
        </Routes>
      </BrowserRouter>
    </React.Fragment>
  );
}

export default App;
