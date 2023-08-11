import React from 'react';
import useSWR from 'swr';

import About from '../organisms/About';
import RelatedLinks from '../organisms/RelatedLinks';
import BlogList from '../organisms/BlogList';
import NavigationMenu from '../organisms/NavigationMenu';

import Layout from '../templates/Layout';

type Props = {
  path: string;
};

const Component: React.FC<Props> = ({ path }) => {
  const { data, error, isLoading } = useSWR(
    `/_api/v3/pages/list?path=%2FBlog%2F${path}`,
  );

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error</div>;

  return (
    <Layout>
      <div className="bg-gray-100 p-0 md:p-2">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-12 gap-4 px-2">
            <div className="hidden md:block md:col-span-3 lg:col-span-2">
              <NavigationMenu />
            </div>
            <div className="col-span-12 md:col-span-9 lg:col-span-7">
              <BlogList pages={data.pages} />
            </div>

            <div className="hidden lg:col-span-3 lg:block">
              <About />
              <RelatedLinks />
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Component;
