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
        <Route path="/question" element={<List path="question" />} />
        <Route path="/recruit" element={<List path="recruit" />} />
        <Route path="/it" element={<List path="content%2FIT" />} />
        <Route path="/it/ai" element={<List path="content/IT/ai" />} />
        <Route path="/it/nw_sec" element={<List path="content/IT/nw_sec" />} />
        <Route path="/it/iot" element={<List path="content/IT/iot" />} />
        <Route path="/it/design" element={<List path="content/IT/design" />} />
        <Route path="/:id" element={<Detail />} />
      </Routes>
    </SWRConfig>
  );
};

export default App;
