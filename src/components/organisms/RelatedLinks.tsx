import React from 'react';

import LinkButton from '../atoms/LinkButton';
import LinkIcon from '../../assets/elements/LinkIcon';

import links from '../../constants/links';

const Component: React.FC = () => (
  <div className="py-2">
    <div className="bg-Main p-4 rounded">
      <div className="py-2 flex items-center space-x-2 justify-center">
        <LinkIcon />
        <span className="text-xl font-bold text-center text-Headline">
          Links
        </span>
      </div>

      <ul>
        <li className="flex items-center">
          {links.map((link, index) => (
            <a key={index} href={link.url} target="blank" className="w-full">
              <LinkButton emoji={link.emoji} text={link.text} />
            </a>
          ))}
        </li>
      </ul>
    </div>
  </div>
);

export default Component;
