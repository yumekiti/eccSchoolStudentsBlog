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
        <Route path="/" element={<List path="contents" />} />
        <Route path="/events" element={<List path="events/pre-event" />} />
        <Route
          path="/questions"
          element={<List path="questions/unresolved" />}
        />
        <Route path="/requests" element={<List path="requests" />} />
        <Route path="/clubs" element={<List path="clubs" />} />
        <Route path="/contacts" element={<List path="contacts" />} />
        {/* カテゴリ */}
        <Route path="/it" element={<List path="contents/it" />} />
        <Route path="/game" element={<List path="contents/game" />} />
        <Route path="/web" element={<List path="contents/web" />} />
        {/* 詳細ページ */}
        <Route path="/:path/:id" element={<Detail />} />
      </Routes>
    </SWRConfig>
  );
};

export default App;
