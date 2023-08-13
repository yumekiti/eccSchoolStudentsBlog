import React from 'react';

import LinkButton from '../atoms/LinkButton';

import HomeIcon from '../../assets/navigation/HomeIcon';
import HelpIcon from '../../assets/navigation/HelpIcon';
import PersonSearchIcon from '../../assets/navigation/PersonSearchIcon';
import BookmarkIcon from '../../assets/navigation/BookmarkIcon';
import InfoIcon from '../../assets/navigation/InfoIcon';

const Component: React.FC = () => (
  <nav className="py-2">
    <ul>
      <li className="flex items-center">
        <LinkButton Icon={HomeIcon} text="ホーム" bold />
      </li>
      <li className="flex items-center">
        <LinkButton Icon={HelpIcon} text="質問" bold />
      </li>
      <li className="flex items-center">
        <LinkButton Icon={PersonSearchIcon} text="募集" bold />
      </li>
      <li className="flex items-center">
        <LinkButton Icon={BookmarkIcon} text="ブックマーク" bold />
      </li>
      <li className="flex items-center">
        <LinkButton Icon={InfoIcon} text="Info" bold />
      </li>
    </ul>
  </nav>
);

export default Component;
