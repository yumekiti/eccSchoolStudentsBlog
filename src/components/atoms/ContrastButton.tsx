import React from 'react';

type Props = {
  text: string;
  onClick: () => void;
};

const Component: React.FC<Props> = ({ text, onClick }) => (
  <button
    className="ml-2 border border-Contrast text-Contrast px-4 py-2 rounded hover:bg-Contrast hover:text-Main hover:underline"
    onClick={onClick}
  >
    {text}
  </button>
);

export default Component;
