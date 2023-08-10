import React from 'react';

import Layout from '../templates/Layout';

import TagList from '../molecules/TagList';
import CounterButtonGroup from '../organisms/CounterButtonGroup';
import ContentList from '../organisms/ContentList';

import TagIcon from '../../assets/elements/TagIcon';

const Component = () => {
  return (
    <Layout>
      <div className="bg-gray-100 p-0 md:p-2">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-12 gap-4 px-2">
            <div className="hidden md:block md:col-span-3 lg:col-span-1">
              <div className="py-2">
                <CounterButtonGroup />
              </div>
            </div>
            <div className="col-span-12 md:col-span-9 lg:col-span-8">
              <div className="py-2">
                <div className="bg-Main p-6 md:px-16 rounded">
                  <div className="flex items-center space-x-1">
                    <div className="bg-Highlight w-8 h-8 rounded-full"></div>
                    <div className="flex flex-col text-SubHeadline text-xs md:text-sm">
                      <p className="px-1 w-fit font-bold tracking-wide hover:text-Headline hover:bg-SubHeadline hover:bg-opacity-10 rounded">
                        @asdasd
                      </p>
                      <p className="px-1">
                        Updated at 2021/01/01 Created at 2021/01/01
                      </p>
                    </div>
                  </div>
                  <div className="mt-2">
                    <h2 className="text-4xl font-bold text-Headline py-2">
                      Title
                    </h2>
                    <div className="flex flex-col">
                      <div className="flex items-center">
                        <div className="w-fit">
                          <TagIcon />
                        </div>
                        <TagList tags={['tag1', 'tag2', 'tag3']} />
                      </div>
                    </div>
                  </div>
                  <div className="body py-12">content</div>
                </div>
              </div>
            </div>

            <div className="hidden lg:col-span-3 lg:block">
              <ContentList />
            </div>
          </div>
          <div className="w-full fixed bottom-0 bg-Main md:hidden">
            <CounterButtonGroup />
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Component;
