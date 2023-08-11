import React from 'react';
import { useParams } from 'react-router-dom';

import Layout from '../templates/Layout';

import CounterButtonGroup from '../organisms/CounterButtonGroup';
import Blog from '../organisms/Blog';
import ContentList from '../organisms/ContentList';

const Component = () => {
  const { id } = useParams<{ id: string }>();

  return (
    <Layout>
      <div className="p-0 md:p-2 max-w-7xl mx-auto">
        <div className="grid grid-cols-12 gap-4 px-2">
          <div className="hidden md:block md:col-span-3 lg:col-span-1">
            <div className="py-2">
              <CounterButtonGroup />
            </div>
          </div>
          <div className="col-span-12 md:col-span-9 lg:col-span-8 mb-12">
            <Blog id={id} />
          </div>

          <div className="hidden lg:col-span-3 lg:block">
            <ContentList />
          </div>
        </div>
        <div className="w-full fixed bottom-0 bg-Main md:hidden">
          <CounterButtonGroup />
        </div>
      </div>
    </Layout>
  );
};

export default Component;
