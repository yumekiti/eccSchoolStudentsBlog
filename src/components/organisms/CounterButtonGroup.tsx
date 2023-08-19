import React from 'react';
import { Link } from 'react-router-dom';

import LikeIcon from '../../assets/elements/detail/LikeIcon';
import CommentIcon from '../../assets/elements/detail/CommentIcon';

type Props = {
  id: string;
  like: number;
  comment: number;
};

const Component: React.FC<Props> = ({ id, like, comment }) => (
  <ul className="flex md:flex-col md:justify-center md:space-y-2 text-center justify-evenly space-x-2 md:space-x-0">
    <li className="flex md:flex-col items-center">
      <Link
        to={process.env.REACT_APP_API_URL + `/${id}`}
        className="bg-Main rounded-full p-3 duration-200 hover:bg-opacity-60"
      >
        <LikeIcon />
      </Link>
      <span className="mt-1 text-Contrast">{like}</span>
    </li>
    <li className="flex md:flex-col items-center">
      <a
        href="#comment"
        className="bg-Main rounded-full p-3 duration-200 hover:bg-opacity-60"
      >
        <CommentIcon />
      </a>
      <span className="mt-1 text-Contrast">{comment}</span>
    </li>
  </ul>
);

export default Component;
