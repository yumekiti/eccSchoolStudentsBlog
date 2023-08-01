import React from 'react';

import LinkButton from '../atoms/LinkButton';
import IoTIcon from '../../assets/navigation/IoTIcon';

const Component: React.FC = () => (
  <nav className="py-2">
    <h2 className="text-Headline font-bold p-2">分野</h2>
    <ul>
      <li className="flex items-center">
        <LinkButton Icon={IoTIcon} Text="IoT" />
      </li>
    </ul>
  </nav>
);

export default Component;
