import React from 'react';
import { Link } from 'react-router-dom';

import LinkButton from '../atoms/LinkButton';
import LinkIcon from '../../assets/elements/LinkIcon';

import { links } from '../../constants/navigation';

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
        {links.map((item, index) => (
          <li key={index} className="flex items-center">
            <Link to={item.path} className="w-full">
              <LinkButton
                emoji={item.emoji}
                text={item.text}
                bold={item.bold}
              />
            </Link>
          </li>
        ))}
      </ul>
    </div>
  </div>
);

export default Component;
