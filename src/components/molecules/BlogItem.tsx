import React from 'react';
import { useNavigate } from 'react-router-dom';
import Twemoji from 'react-twemoji';
import useSWR from 'swr';

import BlogTagList from './BlogTagList';
import BlogInfo from './BlogInfo';

type Props = {
  id: string;
  user_id: string;
  created_at: Date;
  updated_at: Date;
  title: string;
  likes: number;
  commentCount: number;
  seenUsersCount: number;
};

const Component: React.FC<Props> = ({
  id,
  user_id,
  created_at,
  updated_at,
  title,
  likes,
  commentCount,
  seenUsersCount,
}) => {
  const userNavigate = useNavigate();
  const { data, error } = useSWR(
    `/_api/v3/users/list?userIds=${user_id || ''}`,
  );

  if (error) return <div>Error</div>;
  if (!data) return <div>Loading...</div>;

  const handleClick = () => userNavigate(`/${id}`);

  return (
    <button onClick={handleClick} className="w-full">
      <div className="bg-Main p-4 rounded hover:cursor-pointer group">
        <BlogInfo
          user_id={data.users[0]?.username || 'unknown'}
          user_name={data.users[0]?.name || 'unknown'}
          user_image={data.users[0]?.imageUrlCached || '/images/icons/user.svg'}
          updated_at={updated_at}
          created_at={created_at}
        />
        <div className="md:px-10">
          <h2 className="py-2 text-base md:text-lg lg:text-xl text-Headline break-all text-justify font-bold line-clamp-3 group-hover:text-Highlight">
            {title}
          </h2>
          <div>
            <BlogTagList id={id} />
            <div className="flex justify-start items-center space-x-2">
              <div className="w-4">
                <Twemoji options={{ className: 'twemoji' }}>
                  <span>❤</span>
                </Twemoji>
              </div>
              <span className="text-SubHeadline text-sm">{likes}</span>
              <div className="w-4">
                <Twemoji options={{ className: 'twemoji' }}>
                  <span>💬</span>
                </Twemoji>
              </div>
              <span className="text-SubHeadline text-sm">{commentCount}</span>
              <div className="w-4">
                <Twemoji options={{ className: 'twemoji' }}>
                  <span>🐾</span>
                </Twemoji>
              </div>
              <span className="text-SubHeadline text-sm">{seenUsersCount}</span>
            </div>
          </div>
        </div>
      </div>
    </button>
  );
};

export default Component;
