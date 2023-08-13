import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import useSWR from 'swr';

import Layout from '../templates/Layout';

import CounterButtonGroup from '../organisms/CounterButtonGroup';
import BlogContent from '../organisms/BlogContent';
import ContentList from '../organisms/ContentList';
import CommentList from '../organisms/CommentList';

import { Blog } from '../../types/blog';

const Component = () => {
  const { id } = useParams<{ id: string }>();
  const { data, error } = useSWR(`_api/v3/page?pageId=${id}`);
  const [blogData, setBlogData] = useState<Blog | null>(null);

  if (data && !blogData) setBlogData(data.page);
  if (error) return <div>Error</div>;

  return (
    <Layout>
      <div className="p-0 md:p-2 max-w-7xl mx-auto">
        <div className="grid grid-cols-12 gap-4 px-2 md:p-0">
          <div className="hidden md:block md:col-span-3 lg:col-span-1">
            <div className="py-2">
              {blogData && (
                <CounterButtonGroup
                  id={blogData._id}
                  like={blogData.liker.length}
                  comment={blogData.commentCount}
                />
              )}
            </div>
          </div>
          <div className="col-span-12 md:col-span-9 lg:col-span-8 mb-12">
            {blogData && (
              <BlogContent
                id={blogData._id}
                user_id={
                  blogData.lastUpdateUser
                    ? blogData.lastUpdateUser.username
                    : 'unknown'
                }
                user_image={
                  blogData.lastUpdateUser
                    ? blogData.lastUpdateUser.imageUrlCached
                    : '/images/icons/user.svg'
                }
                created_at={new Date(blogData.createdAt)}
                updated_at={new Date(blogData.updatedAt)}
                title={blogData.path.split('_')[1]}
                content={blogData.revision.body}
              />
            )}
            {blogData && <CommentList id={blogData._id} />}
          </div>

          <div className="hidden lg:col-span-3 lg:block">
            {blogData && <ContentList content={blogData.revision.body} />}
          </div>
        </div>
        <div className="w-full fixed bottom-0 bg-Main md:hidden">
          {blogData && (
            <CounterButtonGroup
              id={blogData._id}
              like={blogData.liker.length}
              comment={blogData.commentCount}
            />
          )}
        </div>
      </div>
    </Layout>
  );
};

export default Component;
