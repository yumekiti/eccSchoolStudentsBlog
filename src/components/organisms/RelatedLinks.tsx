import React from 'react';

import LinkButton from '../atoms/LinkButton';
import InfoIcon from '../../assets/navigation/InfoIcon';
import LinkIcon from '../../assets/elements/LinkIcon';

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
          <LinkButton Icon={InfoIcon} text="公式サイト" />
        </li>
      </ul>
    </div>
  </div>
);

export default Component;
