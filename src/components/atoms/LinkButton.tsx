import React from 'react';
import Twemoji from 'react-twemoji';

type Props = {
  emoji: string;
  text: string;
  bold?: boolean;
};

const Component: React.FC<Props> = ({ emoji, text, bold = false }) => (
  <button className="flex items-center pr-4 py-2 w-full text-Headline rounded group hover:bg-Highlight hover:bg-opacity-30 justify-start">
    <div className="px-2 w-10 flex justify-center items-center">
      <Twemoji options={{ className: 'twemoji' }}>
        <span>{emoji}</span>
      </Twemoji>
    </div>
    <p
      className={`whitespace-nowrap text-Headline group-hover:text-Highlight group-hover:underline ${
        bold && 'font-bold'
      }`}
    >
      {text}
    </p>
  </button>
);

export default Component;
