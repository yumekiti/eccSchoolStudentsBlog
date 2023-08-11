import React from 'react';
import { Link } from 'react-router-dom';

import LikeIcon from '../../assets/elements/LikeIcon';

type Props = {
  id: string;
  user_id: string;
  user_image: string;
  date: string;
  title: string;
  likes: number;
};

const Component: React.FC<Props> = ({
  id,
  user_id,
  user_image,
  date,
  title,
  likes,
}) => (
  <Link to={id}>
    <div className="bg-Main p-4 rounded hover:cursor-pointer group">
      <div className="flex items-center space-x-1">
        <img
          src={process.env.REACT_APP_API_URL + user_image}
          alt="user"
          className="w-8 h-8 rounded-full"
        />
        <div className="flex flex-col text-SubHeadline text-xs md:text-sm">
          <p
            className="px-1 w-fit font-bold tracking-wide rounded"
            onClick={() => console.log('clicked')}
          >
            @{user_id}
          </p>
          <p className="px-1">{date}</p>
        </div>
      </div>
      <div className="mt-2 md:px-10">
        <h2 className="text-base md:text-lg lg:text-xl text-Headline break-all text-justify font-bold line-clamp-3 group-hover:text-Highlight">
          {title}
        </h2>
        <div className="flex justify-start items-center py-1">
          <LikeIcon />
          <span className="text-SubHeadline text-sm ml-1">{likes}</span>
        </div>
      </div>
    </div>
  </Link>
);

export default Component;
