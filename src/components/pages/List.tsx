import React from 'react';
import useSWRInfinite from 'swr/infinite';

import Welcome from '../organisms/Welcome';
import RelatedLinks from '../organisms/RelatedLinks';
import BlogList from '../organisms/BlogList';
import NavigationMenu from '../molecules/NavigationMenu';

import Loading from '../pages/Loading';

import Layout from '../templates/Layout';

import { getTitle } from '../../utils/format';

type Props = {
  path: string;
};

const Component: React.FC<Props> = ({ path }) => {
  const { data, error, size, setSize } = useSWRInfinite(
    (index) =>
      `/_api/v3/pages/list?path=%2Fblog%2F${path}&limit=8&page=${index + 1}`,
  );

  if (error) return <div>Error</div>;
  if (!data) return <Loading />;

  const pages = data
    .flatMap((page) => page.pages)
    .filter((page) => {
      const title = getTitle(page.path);
      if (title === '__template') return false;
      if (title === '_template') return false;
      if (title === 'template') return false;

      return title;
    });

  return (
    <Layout>
      <div className="p-0 md:p-2 max-w-7xl mx-auto">
        <div className="grid grid-cols-12 gap-4 px-2 md:p-0">
          <div className="hidden md:block md:col-span-3 lg:col-span-2">
            <NavigationMenu />
          </div>
          <div className="col-span-12 md:col-span-9 lg:col-span-7 mb-12">
            <BlogList
              length={data[0].pages.length}
              limit={data[0].limit}
              totalCount={data[0].totalCount}
              size={size}
              setSize={setSize}
              pages={pages}
            />
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
