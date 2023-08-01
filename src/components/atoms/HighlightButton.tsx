import React from 'react';

type Props = {
  Text: string;
};

const Component: React.FC<Props> = ({ Text }) => (
  <button className="ml-2 border border-Highlight text-Highlight px-4 py-2 rounded hover:bg-Highlight hover:text-Main hover:underline">
    {Text}
  </button>
);

export default Component;
