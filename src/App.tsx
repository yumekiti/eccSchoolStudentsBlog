import React from 'react';
import { Routes, Route } from 'react-router-dom';

import { SWRConfig } from 'swr';
import { fetchInstance } from './libs/fetchInstance';

import List from './components/pages/List';
import Detail from './components/pages/Detail';

const App = () => {
  return (
    <SWRConfig
      value={{
        fetcher: (resource, init) =>
          fetchInstance()
            .get(resource, init)
            .then((res) => res.data),
      }}
    >
      <Routes>
        <Route path="/" element={<List path="content" />} />
        <Route path="/:id" element={<Detail />} />
      </Routes>
    </SWRConfig>
  );
};

export default App;
