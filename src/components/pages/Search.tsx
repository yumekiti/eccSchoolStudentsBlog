import React from 'react';
import useSWRInfinite from 'swr/infinite';
import { useSearchParams } from 'react-router-dom';

import Welcome from '../organisms/Welcome';
import RelatedLinks from '../organisms/RelatedLinks';
import BlogList from '../organisms/BlogList';
import NavigationMenu from '../molecules/NavigationMenu';

import Layout from '../templates/Layout';

import Loading from '../pages/Loading';

import { SearchData } from '../../types/searchData';

const Component: React.FC = () => {
  const [searchParams] = useSearchParams();
  const q = searchParams.get('q') || '';
  const { data, error, size, setSize } = useSWRInfinite(
    (index) => `/_api/search?path=%2F&limit=8&page=${index + 1}&q=${q}`,
  );

  if (q === '') return <div>検索キーワードを入力してください</div>;
  if (error) return <div>Error</div>;
  if (!data) return <Loading />;

  const pages = data[0].data.map((page: SearchData) => page.data);

  return (
    <Layout>
      <div className="p-0 md:p-2 max-w-7xl mx-auto">
        <div className="grid grid-cols-12 gap-4 px-2 md:p-0">
          <div className="hidden md:block md:col-span-3 lg:col-span-2">
            <NavigationMenu />
          </div>
          <div className="col-span-12 md:col-span-9 lg:col-span-7 mb-12">
            <BlogList size={size} setSize={setSize} pages={pages} />
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
