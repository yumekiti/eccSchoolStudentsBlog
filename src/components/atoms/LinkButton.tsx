import React from 'react';

type Props = {
  Icon: React.FC;
  Text: string;
  Bold?: boolean;
};

const Component: React.FC<Props> = ({ Icon, Text, Bold = false }) => (
  <button className="flex items-center pr-4 py-2 w-full text-Headline rounded group hover:bg-Highlight hover:bg-opacity-30">
    <div className="px-2">
      <Icon />
    </div>
    <p
      className={`text-Headline group-hover:text-Highlight group-hover:underline ${
        Bold ? 'font-bold' : ''
      }`}
    >
      {Text}
    </p>
  </button>
);

export default Component;
