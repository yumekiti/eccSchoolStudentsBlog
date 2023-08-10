import React from 'react';
import { Routes, Route } from 'react-router-dom';

import List from './components/pages/List';
import Detail from './components/pages/Detail';

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<List />} />
      <Route path="/:id" element={<Detail />} />
    </Routes>
  );
};

export default App;
