import React from 'react';
import BlogItem from '../molecules/BlogItem';

type Page = {
  _id: string;
  path: string;
  createdAt: string;
  liker: Array<string>;
  lastUpdateUser: {
    imageUrlCached: string;
    username: string;
  };
};

type Props = {
  pages: Page[];
};

const Component: React.FC<Props> = ({ pages }) => (
  <>
    {pages.map((page, index) => (
      <div className="py-2" key={index}>
        <BlogItem
          id={page._id}
          user_id={page.lastUpdateUser.username}
          user_image={page.lastUpdateUser.imageUrlCached}
          date={page.createdAt}
          title={page.path.split('_')[1]}
          likes={page.liker.length}
        />
      </div>
    ))}
    <div className="py-2">
      <div className="flex items-center justify-center">
        <button className="bg-Main py-2 px-16 rounded text-Headline hover:bg-SubHeadline hover:bg-opacity-20 outline outline-1 outline-SubHeadline">
          もっと読む
        </button>
      </div>
    </div>
  </>
);

export default Component;
