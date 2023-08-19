import React from 'react';

import Welcome from '../organisms/Welcome';
import RelatedLinks from '../organisms/RelatedLinks';
import NavigationMenu from '../molecules/NavigationMenu';

import NotFoundIcon from '../../assets/elements/NotFoundIcon';

import Layout from '../templates/Layout';

const Component: React.FC = () => {
  return (
    <Layout>
      <div className="p-0 md:p-2 max-w-7xl mx-auto">
        <div className="grid grid-cols-12 gap-4 px-2 md:p-0">
          <div className="hidden md:block md:col-span-3 lg:col-span-2">
            <NavigationMenu />
          </div>
          <div className="col-span-12 md:col-span-9 lg:col-span-7 mb-12">
            <div className="fixed top-1/3 left-1/2 transform -translate-x-2/3 -translate-y-1/2">
              <h2 className="text-SubHeadline font-bold text-center py-4">
                Page Not Found
                <span className="pl-2 text-4xl font-bold">404</span>
              </h2>
              <NotFoundIcon />
            </div>
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
