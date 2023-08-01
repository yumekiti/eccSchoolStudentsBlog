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
        <LinkButton Icon={HomeIcon} Text="ホーム" Bold />
      </li>
      <li className="flex items-center">
        <LinkButton Icon={HelpIcon} Text="質問" Bold />
      </li>
      <li className="flex items-center">
        <LinkButton Icon={PersonSearchIcon} Text="募集" Bold />
      </li>
      <li className="flex items-center">
        <LinkButton Icon={BookmarkIcon} Text="ブックマーク" Bold />
      </li>
      <li className="flex items-center">
        <LinkButton Icon={InfoIcon} Text="Info" Bold />
      </li>
    </ul>
  </nav>
);

export default Component;
