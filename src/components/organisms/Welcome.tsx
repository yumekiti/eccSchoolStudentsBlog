import React from 'react';

import WelcomeIcon from '../../assets/elements/WelcomeIcon';

import { welcomeText } from '../../constants/text';

const Component: React.FC = () => (
  <div className="py-2">
    <div className="bg-Main p-4 rounded">
      <div className="py-2 flex items-center space-x-2 justify-center">
        <WelcomeIcon />
        <span className="text-xl font-bold text-center text-Headline">
          Welcome
        </span>
      </div>
      <div
        className="mt-2 text-justify whitespace-pre-wrap text-SubHeadline px-4"
        dangerouslySetInnerHTML={{ __html: welcomeText }}
      />
    </div>
  </div>
);

export default Component;
