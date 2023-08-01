import React from 'react';

import ButtonWithIcon from '../atoms/ButtonWithIcon';
import TagList from '../molecules/TagList';
import TagIcon from '../../assets/elements/TagIcon';
import LikeIcon from '../../assets/elements/LikeIcon';
import BookmarkBorderIcon from '../../assets/elements/BookmarkBorderIcon';

type Props = {
  user_id: string;
  date: string;
  title: string;
  tags: string[];
  likes: number;
};

const Component: React.FC<Props> = ({ user_id, date, title, tags, likes }) => (
  <div className="py-2">
    <div className="bg-Main p-4 rounded hover:cursor-pointer">
      <div className="flex items-center space-x-1">
        <div className="bg-Highlight w-8 h-8 rounded-full"></div>
        <div className="flex flex-col text-SubHeadline text-xs md:text-sm">
          <p className="px-1 w-fit font-bold tracking-wide hover:text-Headline hover:bg-SubHeadline hover:bg-opacity-10 rounded">
            @{user_id}
          </p>
          <p className="px-1">{date}</p>
        </div>
      </div>
      <div className="mt-2 md:px-10">
        <h2 className="text-base md:text-lg lg:text-xl text-Headline break-all text-justify font-bold line-clamp-3 hover:text-Highlight">
          {title}
        </h2>
        <div className="flex flex-col">
          <div className="flex flex-col">
            <div className="flex items-center">
              <div className="w-fit">
                <TagIcon />
              </div>
              <TagList tags={tags} />
            </div>
          </div>
          <div className="flex justify-between items-end">
            <div className="mt-2 flex space-x-1">
              <div className="w-fit">
                <LikeIcon />
              </div>
              <span className="text-SubHeadline text-sm">{likes}</span>
            </div>
            <div className="w-fit">
              <ButtonWithIcon Icon={BookmarkBorderIcon} />
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default Component;
