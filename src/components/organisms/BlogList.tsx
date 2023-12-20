import React from 'react';

import BlogItem from '../molecules/BlogItem';

import { Page } from '../../types/page';
import { getTitle } from '../../utils/format';

type Props = {
  length?: number;
  limit?: number;
  totalCount?: number;
  size: number;
  setSize: (size: number) => void;
  pages: Page[];
};

const Component: React.FC<Props> = ({
  length,
  limit,
  totalCount,
  size,
  setSize,
  pages,
}) => {
  const isLast =
    (length && length !== limit) ||
    (size !== 1 && totalCount && limit && totalCount <= limit * size);

  const handleMore = () => {
    setSize(size + 1);
  };

  return (
    <>
      {pages.map((page, index) => (
        <div className="py-2" key={index}>
          <BlogItem
            id={page._id}
            user_id={
              typeof page.creator === 'object' ? page.creator._id : page.creator
            }
            created_at={new Date(page.createdAt)}
            updated_at={new Date(page.updatedAt)}
            title={getTitle(page.path)}
            likes={page.liker.length}
            commentCount={page.commentCount}
            seenUsersCount={page.seenUsers.length}
          />
        </div>
      ))}
      {totalCount && (
        <div className={`py-2 ${isLast && 'hidden'}`}>
          <div className="flex items-center justify-center">
            <button
              className="bg-Main py-2 px-16 rounded text-Headline hover:bg-SubHeadline hover:bg-opacity-20 outline outline-1 outline-SubHeadline"
              onClick={handleMore}
            >
              もっと読む
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default Component;
