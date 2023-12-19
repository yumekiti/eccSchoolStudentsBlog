import React, { useState } from 'react';
import useSWR from 'swr';
import { Link } from 'react-router-dom';

import LinkButton from '../atoms/LinkButton';

const Component: React.FC = () => {
  const { data, error } = useSWR(`/_api/tags.list`);
  const [tags, setTags] = useState([]);

  if (!data) return <p>Loading...</p>;
  if (error) return <p>Error!</p>;

  if (data.data && data.data.length && !tags.length)
    setTags(
      data.data.sort(
        (a: { count: number }, b: { count: number }) => b.count - a.count,
      ),
    );

  return (
    <nav className="py-2">
      <h2 className="text-Headline font-bold p-2">タグ</h2>
      <ul>
        {tags.map(
          (tag: { name: string }, index: number) =>
            index < 8 && (
              <li key={index} className="flex items-center">
                <Link to={`/search?q=tag%3A${tag.name}`} className="w-full">
                  <LinkButton emoji="🏷️" text={`# ${tag.name}`} />
                </Link>
              </li>
            ),
        )}
      </ul>
    </nav>
  );
};

export default Component;
