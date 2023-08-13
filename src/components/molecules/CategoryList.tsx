import React from 'react';
import { Link } from 'react-router-dom';

import LinkButton from '../atoms/LinkButton';
import IoTIcon from '../../assets/navigation/IoTIcon';

const Component: React.FC = () => (
  <nav className="py-2">
    <h2 className="text-Headline font-bold p-2">分野</h2>
    <ul>
      <li className="flex items-center">
        <Link to="/it" className="w-full">
          <LinkButton Icon={IoTIcon} text="IT分野" bold />
        </Link>
      </li>
      <li className="flex items-center">
        <Link to="/it/web" className="w-full">
          <LinkButton Icon={IoTIcon} text="Web" />
        </Link>
      </li>
    </ul>
  </nav>
);

export default Component;
