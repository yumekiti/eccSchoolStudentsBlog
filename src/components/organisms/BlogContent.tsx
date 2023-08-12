import React from 'react';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';

import TagList from '../molecules/TagList';
import TagIcon from '../../assets/elements/TagIcon';

type Props = {
  id: string;
  user_id: string;
  user_image: string;
  created_at: string;
  updated_at: string;
  title: string;
  content: string;
};

const Component: React.FC<Props> = ({
  id,
  user_id,
  user_image,
  created_at,
  updated_at,
  title,
  content,
}) => (
  <div className="py-2">
    <div className="bg-Main p-6 md:px-16 rounded">
      <div className="flex items-center space-x-1">
        <img
          src={process.env.REACT_APP_API_URL + user_image}
          alt="user"
          className="w-8 h-8 rounded-full"
        />
        <div className="flex flex-col text-SubHeadline text-xs md:text-sm">
          <p className="px-1 w-fit font-bold tracking-wide">@{user_id}</p>
          <p className="px-1">
            {created_at}&nbsp;{updated_at}
          </p>
        </div>
      </div>
      <div className="mt-2">
        <h2 className="text-4xl font-bold text-Headline py-2">{title}</h2>
        <div className="flex flex-col">
          <div className="flex items-center">
            <div className="w-fit">
              <TagIcon />
            </div>
            <TagList id={id} />
          </div>
        </div>
      </div>
      <div className="markdown-body py-12">
        <ReactMarkdown
          remarkPlugins={[remarkGfm]}
          components={{
            h1: ({ node, ...props }) => (
              <h1 id={node.position?.start.line.toString()} {...props} />
            ),
            h2: ({ node, ...props }) => (
              <h2 id={node.position?.start.line.toString()} {...props} />
            ),
            h3: ({ node, ...props }) => (
              <h3 id={node.position?.start.line.toString()} {...props} />
            ),
            h4: ({ node, ...props }) => (
              <h4 id={node.position?.start.line.toString()} {...props} />
            ),
            h5: ({ node, ...props }) => (
              <h5 id={node.position?.start.line.toString()} {...props} />
            ),
            h6: ({ node, ...props }) => (
              <h6 id={node.position?.start.line.toString()} {...props} />
            ),
          }}
        >
          {content}
        </ReactMarkdown>
      </div>
    </div>
  </div>
);

export default Component;
