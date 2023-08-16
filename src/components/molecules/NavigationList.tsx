import React from 'react';
import { Link } from 'react-router-dom';

import LinkButton from '../atoms/LinkButton';

const Component: React.FC = () => (
  <nav className="py-2">
    <ul>
      <li className="flex items-center">
        <Link to="/" className="w-full">
          <LinkButton emoji="🏠" text="ホーム" bold />
        </Link>
      </li>
      <li className="flex items-center">
        <Link to="/question" className="w-full">
          <LinkButton emoji="🤔" text="質問" bold />
        </Link>
      </li>
      <li className="flex items-center">
        <Link to="/recruit" className="w-full">
          <LinkButton emoji="📢" text="募集" bold />
        </Link>
      </li>
    </ul>
  </nav>
);

export default Component;
