import React from 'react';

import BlogItem from '../molecules/BlogItem';

const Component: React.FC = () => (
  <>
    <BlogItem
      user_id="user_id"
      date="2021/01/01"
      title="ECCコンピュータ専門学校っていうコンピュータ学校なのに、学生用ブログ無いってよwwwしゃーないから作ってやったわwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwww"
      tags={['IoT', 'C++', 'C#', 'Java', 'Python', 'JavaScript', 'HTML', 'CSS']}
      likes={10}
    />
    <div className="py-2">
      <div className="flex items-center justify-center">
        <button className="bg-Main py-2 px-16 rounded text-Headline hover:bg-SubHeadline hover:bg-opacity-20 outline outline-1 outline-SubHeadline">
          もっと読む
        </button>
      </div>
    </div>
  </>
);

export default Component;
