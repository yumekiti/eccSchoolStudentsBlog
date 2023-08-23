import React from 'react';
import { Routes, Route } from 'react-router-dom';

import { SWRConfig } from 'swr';
import { fetchInstance } from './libs/fetchInstance';

import List from './components/pages/List';
import Detail from './components/pages/Detail';
import NotFound from './components/pages/NotFound';

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
        <Route path="/event" element={<List path="event/pre-event" />} />
        <Route path="/question" element={<List path="question/unresolved" />} />
        <Route path="/recruitment" element={<List path="recruitment" />} />
        <Route path="/club" element={<List path="club" />} />
        <Route path="/contact" element={<List path="contact" />} />
        {/* カテゴリ */}
        <Route path="/it" element={<List path="content/it" />} />
        <Route path="/game" element={<List path="content/game" />} />
        <Route path="/web" element={<List path="content/web" />} />
        {/* 詳細ページ */}
        <Route path="/content/:id" element={<Detail />} />
        <Route path="/*" element={<NotFound />} />
      </Routes>
    </SWRConfig>
  );
};

export default App;
