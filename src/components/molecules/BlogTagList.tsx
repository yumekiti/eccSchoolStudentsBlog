import React from 'react';
import useSWR from 'swr';
import Twemoji from 'react-twemoji';

type Props = {
  id: string;
};

const Component: React.FC<Props> = ({ id }) => {
  const [tags, setTags] = React.useState([]);
  const { data, error } = useSWR(
    `/_api/pages.getPageTag?pageId=${id}&access_token=${process.env.REACT_APP_API_TOKEN}`,
  );

  if (error) return <div>Error</div>;
  if (!data) return <div>Loading...</div>;

  if (data.tags && data.tags.length && !tags.length) setTags(data.tags);

  return (
    <div className="flex items-center">
      <div className="w-4">
        <Twemoji options={{ className: 'twemoji' }}>
          <span>🏷</span>
        </Twemoji>
      </div>
      <ul className="flex items-center flex-wrap ml-2">
        {tags.map((tag, index: number) => (
          <li
            key={index}
            className="mr-1 text-SubHeadline hover:underline hover:bg-SubHeadline hover:bg-opacity-10 rounded p-1 text-xs md:text-sm hover:outline outline-1 outline-SubHeadline"
          >
            <a href={process.env.REACT_APP_API_URL + `/_search?q=tag%3A${tag}`}>
              #{tag}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Component;
