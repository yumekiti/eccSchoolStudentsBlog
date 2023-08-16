import React from 'react';
import { useNavigate } from 'react-router-dom';

import LikeIcon from '../../assets/elements/LikeIcon';
import TagIcon from '../../assets/elements/TagIcon';

import BlogTagList from './BlogTagList';

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
}) => {
  const userNavigate = useNavigate();
  const handleClick = () => userNavigate(`/content/${id}`);

  return (
    <button onClick={handleClick} className="w-full">
      <div className="bg-Main p-4 rounded hover:cursor-pointer group">
        <div className="flex items-center space-x-1">
          <img
            src={process.env.REACT_APP_API_URL + user_image}
            alt="user"
            className="w-8 h-8 rounded-full"
          />
          <div className="flex flex-col text-SubHeadline text-xs md:text-sm">
            <p className="px-1 w-fit font-bold tracking-wide">@{user_id}</p>
            <p className="px-1">{date}</p>
          </div>
        </div>
        <div className="md:px-10">
          <h2 className="py-2 text-base md:text-lg lg:text-xl text-Headline break-all text-justify font-bold line-clamp-3 group-hover:text-Highlight">
            {title}
          </h2>
          <div>
            <div className="flex items-center">
              <div className="w-fit">
                <TagIcon />
              </div>
              <BlogTagList id={id} />
            </div>
            <div className="flex justify-start items-center">
              <LikeIcon />
              <span className="text-SubHeadline text-sm ml-2">{likes}</span>
            </div>
          </div>
        </div>
      </div>
    </button>
  );
};

export default Component;
