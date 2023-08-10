import React from 'react';

import LikeIcon from '../../assets/elements/detail/LikeIcon';
import BookmarkIcon from '../../assets/elements/detail/BookmarkIcon';
import CommentIcon from '../../assets/elements/detail/CommentIcon';

const Component: React.FC = () => (
  <ul className="flex md:flex-col md:justify-center md:space-y-2 text-center justify-evenly space-x-2 md:space-x-0">
    <li className="flex md:flex-col items-center">
      <button
        className="bg-Main rounded-full p-3 duration-200 hover:bg-opacity-60"
        aria-label="LikeButton"
      >
        <LikeIcon />
      </button>
      <span className="mt-1 text-Headline">12</span>
    </li>
    <li className="flex md:flex-col items-center">
      <button
        className="bg-Main rounded-full p-3 duration-200 hover:bg-opacity-60"
        aria-label="BookmarkButton"
      >
        <BookmarkIcon />
      </button>
      <span className="mt-1 text-Headline">12</span>
    </li>
    <li className="flex md:flex-col items-center">
      <button
        className="bg-Main rounded-full p-3 duration-200 hover:bg-opacity-60"
        aria-label="CommentButton"
      >
        <CommentIcon />
      </button>
      <span className="mt-1 text-Headline">12</span>
    </li>
  </ul>
);

export default Component;
