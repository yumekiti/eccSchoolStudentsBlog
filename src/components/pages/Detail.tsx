import React from 'react';
import { useParams } from 'react-router-dom';
import useSWR from 'swr';

import Layout from '../templates/Layout';

import CounterButtonGroup from '../organisms/CounterButtonGroup';
import BlogContent from '../organisms/BlogContent';
import ContentList from '../organisms/ContentList';
import CommentList from '../organisms/CommentList';

import Loading from '../pages/Loading';
import NotFond from '../pages/NotFound';

const Component = () => {
  const { id } = useParams<{ id: string }>();
  const { data, error } = useSWR(`_api/v3/page?pageId=${id}`);

  if (error) return <NotFond />;
  if (!data) return <Loading />;

  const splitedPath = data.page.path.split('/').slice(-1);
  const splitedUnderline = splitedPath[0].split('_');
  const title = splitedUnderline.slice(1).join('_');

  return (
    <Layout>
      <div className="p-0 md:p-2 max-w-7xl mx-auto">
        <div className="grid grid-cols-12 gap-4 px-2 md:p-0">
          <div className="hidden md:block md:col-span-3 lg:col-span-1">
            <div className="py-2">
              <CounterButtonGroup
                id={data.page._id}
                like={data.page.liker.length}
                comment={data.page.commentCount}
              />
            </div>
          </div>
          <div className="col-span-12 md:col-span-9 lg:col-span-8 mb-12">
            <BlogContent
              id={data.page._id}
              user_id={data.page.creator?.username || 'unknown'}
              user_name={data.page.creator?.name || 'unknown'}
              user_image={
                data.page.creator?.imageUrlCached || '/images/icons/user.svg'
              }
              created_at={new Date(data.page.createdAt)}
              updated_at={new Date(data.page.updatedAt)}
              title={title}
              content={data.page.revision.body}
            />
            <CommentList id={data.page._id} />
          </div>

          <div className="hidden lg:col-span-3 lg:block">
            <ContentList content={data.page.revision.body} />
          </div>
        </div>
        <div className="w-full fixed bottom-0 bg-Main md:hidden border-t-2 border-SubHeadline">
          <CounterButtonGroup
            id={data.page._id}
            like={data.page.liker.length}
            comment={data.page.commentCount}
          />
        </div>
      </div>
    </Layout>
  );
};

export default Component;
