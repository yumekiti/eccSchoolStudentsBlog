import React from 'react';
import { Link } from 'react-router-dom';

import LinkButton from '../atoms/LinkButton';

import { categories } from '../../constants/navigation';

const Component: React.FC = () => (
  <nav className="py-2">
    <h2 className="text-Headline font-bold p-2">カテゴリ</h2>
    <ul>
      {categories.map((item, index) => (
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
