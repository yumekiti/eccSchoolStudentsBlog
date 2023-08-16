import React from 'react';
import { Link } from 'react-router-dom';

import LinkButton from '../atoms/LinkButton';

import fields from '../../constants/fields';

const Component: React.FC = () => (
  <nav className="py-2">
    <h2 className="text-Headline font-bold p-2">分野</h2>
    <ul>
      {fields.map((field, index) => (
        <li key={index} className="flex items-center">
          <Link to={field.path} className="w-full">
            <LinkButton emoji={field.emoji} text={field.text} bold />
          </Link>
        </li>
      ))}
    </ul>
  </nav>
);

export default Component;
