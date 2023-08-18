import React from 'react';

import Welcome from '../organisms/Welcome';
import RelatedLinks from '../organisms/RelatedLinks';
import BlogList from '../organisms/BlogList';
import NavigationMenu from '../molecules/NavigationMenu';

import Layout from '../templates/Layout';

type Props = {
  path: string;
};

const Component: React.FC<Props> = ({ path }) => {
  return (
    <Layout>
      <div className="p-0 md:p-2 max-w-7xl mx-auto">
        <div className="grid grid-cols-12 gap-4 px-2 md:p-0">
          <div className="hidden md:block md:col-span-3 lg:col-span-2">
            <NavigationMenu />
          </div>
          <div className="col-span-12 md:col-span-9 lg:col-span-7 mb-12">
            <BlogList path={path} />
          </div>

          <div className="hidden lg:col-span-3 lg:block">
            <Welcome />
            <RelatedLinks />
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Component;
