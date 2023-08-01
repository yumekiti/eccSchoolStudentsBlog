import React from 'react';

import NavigationList from '../molecules/NavigationList';
import CategoryList from '../molecules/CategoryList';

import About from '../organisms/About';
import RelatedLinks from '../organisms/RelatedLinks';
import BlogList from '../organisms/BlogList';

import Layout from '../templates/Layout';

const Component = () => {
  return (
    <Layout>
      <div className="max-w-7xl mx-auto bg-gray-100 p-0 md:p-2">
        <div className="grid grid-cols-12 gap-4 px-2">
          <div className="hidden md:block md:col-span-3 lg:col-span-2">
            <NavigationList />
            <CategoryList />
          </div>
          <div className="col-span-12 md:col-span-9 lg:col-span-7">
            <BlogList />
          </div>

          <div className="hidden lg:col-span-3 lg:block">
            <About />
            <RelatedLinks />
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Component;
