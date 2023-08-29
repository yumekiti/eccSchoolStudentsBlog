import React from 'react';
import useSWRInfinite from 'swr/infinite';
import BlogItem from '../molecules/BlogItem';

type Props = {
  path: string;
};

const getTitle = (path: string) => {
  const splitedPath = (path && path.split('/').slice(-1)) || [];
  const splitedUnderline =
    (splitedPath.length && splitedPath[0].split('_')) || [];
  const title = splitedUnderline.slice(1).join('_') || '';

  return title;
};

const Component: React.FC<Props> = ({ path }) => {
  const { data, error, size, setSize } = useSWRInfinite(
    (index) =>
      `/_api/v3/pages/list?path=%2Fblog%2F${path}&limit=8&page=${index + 1}`,
  );

  if (error) return <div>Error</div>;
  if (!data) return <div>Loading...</div>;

  const pages = data
    .flatMap((page) => page.pages)
    .filter((page) => {
      const title = getTitle(page.path);
      if (title === '__template') return false;
      if (title === '_template') return false;

      return title;
    });
  const isLast =
    pages.length === data[0].totalCount - (data[0].totalCount - pages.length);

  const handleMore = () => {
    setSize(size + 1);
  };

  return (
    <>
      {pages.map((page, index) => (
        <div className="py-2" key={index}>
          <BlogItem
            path={path}
            id={page._id}
            user_id={page.creator}
            created_at={new Date(page.createdAt)}
            updated_at={new Date(page.updatedAt)}
            title={getTitle(page.path)}
            likes={page.liker.length}
            commentCount={page.commentCount}
            seenUsersCount={page.seenUsers.length}
          />
        </div>
      ))}
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
    </>
  );
};

export default Component;
