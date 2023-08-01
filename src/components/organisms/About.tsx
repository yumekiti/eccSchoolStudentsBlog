import React from 'react';

import WelcomeIcon from '../../assets/elements/WelcomeIcon';

const Component: React.FC = () => (
  <div className="py-2">
    <div className="bg-Main p-4 rounded">
      <div className="py-2 flex items-center space-x-2 justify-center">
        <WelcomeIcon />
        <span className="text-xl font-bold text-center text-Headline">
          Welcome
        </span>
      </div>
      <div className="mt-2 text-justify whitespace-pre-wrap text-SubHeadline px-4">
        {
          'ようこそ、コンピュータ専門学校の技術ブログへ！\n\n学生の情報資産を残すことを目標に、最新の情報技術を共有します。'
        }
      </div>
    </div>
  </div>
);

export default Component;
