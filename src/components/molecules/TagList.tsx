import React from 'react';

type Props = {
  tags: string[];
};

const Component: React.FC<Props> = ({ tags }) => (
  <ul className="flex items-center flex-wrap ml-2">
    {tags.map((tag, i) => (
      <li
        key={i}
        className="mr-1 text-SubHeadline hover:underline hover:bg-SubHeadline hover:bg-opacity-10 rounded p-1 text-xs md:text-sm hover:outline outline-1 outline-SubHeadline"
      >
        #{tag}
      </li>
    ))}
  </ul>
);

export default Component;
