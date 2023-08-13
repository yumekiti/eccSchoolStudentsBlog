import React, { useState } from 'react';
import useSWR from 'swr';

import BlogItem from '../molecules/BlogItem';

import { Pages } from '../../types/page';

type Props = {
  path: string;
};

const Component: React.FC<Props> = ({ path }) => {
  const [pages, setPages] = useState<Pages>([]);
  const [page, setPage] = useState(1);
  const { data, error } = useSWR(
    `/_api/v3/pages/list?path=%2FBlog%2F${path}&limit=8&page=${page}`,
  );

  if (error) return <div>Error</div>;

  const isMore = data && pages.length != data.pages.length * page;
  const isLast = data && pages.length != data.totalCount;

  if (isMore && isLast) setPages([...pages, ...data.pages]);

  return (
    <>
      {pages.map((page, index) => (
        <div className="py-2" key={index}>
          <BlogItem
            id={page._id}
            user_id={
              page.lastUpdateUser ? page.lastUpdateUser.username : 'unknown'
            }
            user_image={
              page.lastUpdateUser
                ? page.lastUpdateUser.imageUrlCached
                : '/images/icons/user.svg'
            }
            date={page.createdAt}
            title={page.path.split('_')[1]}
            likes={page.liker.length}
          />
        </div>
      ))}
      <div className={`py-2 ${isLast ? 'hidden' : ''}`}>
        <div className="flex items-center justify-center">
          <button
            className="bg-Main py-2 px-16 rounded text-Headline hover:bg-SubHeadline hover:bg-opacity-20 outline outline-1 outline-SubHeadline"
            onClick={() => setPage(page + 1)}
          >
            もっと読む
          </button>
        </div>
      </div>
    </>
  );
};

export default Component;
