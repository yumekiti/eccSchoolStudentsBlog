import React from 'react';

type Props = {
  Text: string;
};

const Component: React.FC<Props> = ({ Text }) => (
  <button className="ml-2 border border-Contrast text-Contrast px-4 py-2 rounded hover:bg-Contrast hover:text-Main hover:underline">
    {Text}
  </button>
);

export default Component;
