import React from 'react';
import { Link } from 'react-router-dom';

import LinkButton from '../atoms/LinkButton';

type Props = {
  title?: string;
  navigation: {
    path: string;
    emoji: string;
    text: string;
    bold: boolean;
  }[];
};

const Component: React.FC<Props> = ({ title, navigation }) => (
  <nav className="py-2">
    {title && <h2 className="text-Headline font-bold p-2">{title}</h2>}
    <ul>
      {navigation.map((item, index) => (
        <li key={index} className="flex items-center">
          <Link to={item.path} className="w-full">
            <LinkButton emoji={item.emoji} text={item.text} bold={item.bold} />
          </Link>
        </li>
      ))}
    </ul>
  </nav>
);

export default Component;
