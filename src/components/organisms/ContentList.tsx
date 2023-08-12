import React from 'react';

import ListIcon from '../../assets/elements/ListIcon';

import { extractHeadersFromMarkdown } from '../../libs/markdown';

type Props = {
  content: string;
};

const Component: React.FC<Props> = ({ content }) => {
  const headers = extractHeadersFromMarkdown(content);

  return (
    <div className="py-2">
      <div className="bg-Main p-4 rounded">
        <div className="py-2 flex items-center space-x-2 justify-center">
          <ListIcon />
          <span className="text-xl font-bold text-center text-Headline">
            Contents
          </span>
        </div>
        <div className="mt-2 text-justify whitespace-pre-wrap text-SubHeadline px-8">
          <ul className="list-disc">
            {headers.map((header, index) => (
              <li
                key={index}
                className={`
                ${
                  header.level == 1
                    ? 'text-Headline font-bold'
                    : 'text-SubHeadline'
                }
                ${header.level == 2 ? 'ml-4' : ''}
                ${header.level == 3 ? 'ml-8' : ''}
                ${header.level == 4 ? 'ml-12' : ''}
                ${header.level == 5 ? 'ml-16' : ''}
                ${header.level == 6 ? 'ml-20' : ''}
              `}
              >
                <a href={`#${header.id}`} className="hover:underline">
                  {header.text}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Component;
