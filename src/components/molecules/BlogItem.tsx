import React from 'react';
import { useNavigate } from 'react-router-dom';

import LikeIcon from '../../assets/elements/LikeIcon';
import TagIcon from '../../assets/elements/TagIcon';

import BlogTagList from './BlogTagList';
import BlogInfo from './BlogInfo';

type Props = {
  id: string;
  user_id: string;
  user_name: string;
  user_image: string;
  created_at: Date;
  updated_at: Date;
  title: string;
  likes: number;
};

const Component: React.FC<Props> = ({
  id,
  user_id,
  user_name,
  user_image,
  created_at,
  updated_at,
  title,
  likes,
}) => {
  const userNavigate = useNavigate();
  const handleClick = () => userNavigate(`/content/${id}`);

  return (
    <button onClick={handleClick} className="w-full">
      <div className="bg-Main p-4 rounded hover:cursor-pointer group">
        <BlogInfo
          user_id={user_id}
          user_name={user_name}
          user_image={user_image}
          updated_at={updated_at}
          created_at={created_at}
        />
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
