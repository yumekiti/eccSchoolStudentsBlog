import React from 'react';
import { Link } from 'react-router-dom';
import Twemoji from 'react-twemoji';

import LinkButton from '../atoms/LinkButton';

import { links } from '../../constants/navigation';

const Component: React.FC = () => (
  <div className="py-2">
    <div className="bg-Main p-4 rounded">
      <div className="py-2 flex items-center space-x-2 justify-center">
        <div className="w-8">
          <Twemoji options={{ className: 'twemoji' }}>
            <span>🔗</span>
          </Twemoji>
        </div>
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
