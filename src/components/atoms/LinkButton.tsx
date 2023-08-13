import React from 'react';

type Props = {
  Icon: React.FC;
  text: string;
  bold?: boolean;
};

const Component: React.FC<Props> = ({ Icon, text, bold = false }) => (
  <button className="flex items-center pr-4 py-2 w-full text-Headline rounded group hover:bg-Highlight hover:bg-opacity-30">
    <div className="px-2">
      <Icon />
    </div>
    <p
      className={`whitespace-nowrap text-Headline group-hover:text-Highlight group-hover:underline ${
        bold ? 'font-bold' : ''
      }`}
    >
      {text}
    </p>
  </button>
);

export default Component;
