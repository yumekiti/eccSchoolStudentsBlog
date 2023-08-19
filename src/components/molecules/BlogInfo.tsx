import React from 'react';
import { Link } from 'react-router-dom';
import { format } from 'date-fns';

type Props = {
  user_id: string;
  user_name: string;
  user_image: string;
  created_at: Date;
  updated_at: Date;
};

const Component: React.FC<Props> = ({
  user_id,
  user_name,
  user_image,
  created_at,
  updated_at,
}) => (
  <div className="flex items-center space-x-1">
    <img
      src={process.env.REACT_APP_API_URL + user_image}
      alt="user"
      className="w-8 h-8 rounded-full"
    />
    <div className="flex flex-col text-SubHeadline text-xs md:text-sm">
      <Link
        to={`${process.env.REACT_APP_API_URL}/user/${user_id}`}
        className="hover:underline"
      >
        <p className="px-1 w-fit font-bold tracking-wide">
          @{user_id}&nbsp;({user_name})
        </p>
      </Link>
      <p className="px-1">
        UpdateAt&nbsp;{format(updated_at, 'yyyy/MM/dd')}&nbsp;CreateAt&nbsp;
        {format(created_at, 'yyyy/MM/dd')}
      </p>
    </div>
  </div>
);

export default Component;
