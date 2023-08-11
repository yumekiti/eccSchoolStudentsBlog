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
          'ようこそ、ECCコンピュータ専門学校の技術ブログへ！\n\nこのブログは、学生が自由に記事を投稿できるようになっています。情報の保持、交流の場提供、新しい情報の発見を目指します。\n\n技術情報共有、疑問解決、仲間募集、どんなトピックも歓迎！\n\nみんなで学び合いましょう！🚀'
        }
      </div>
    </div>
  </div>
);

export default Component;
