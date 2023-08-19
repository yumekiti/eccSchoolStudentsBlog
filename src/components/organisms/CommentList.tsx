import React, { useState } from 'react';
import useSWR from 'swr';
import { format } from 'date-fns';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';

import { fetchInstance } from '../../libs/fetchInstance';

import ContrastButton from '../atoms/ContrastButton';

import { Comments } from '../../types/comment';

type Props = {
  id: string;
};

const Component: React.FC<Props> = ({ id }) => {
  const [comment, setComment] = useState('');
  const [comments, setComments] = useState<Comments>([]);
  const [commentCount, setCommentCount] = useState<number>(0);
  const { data, error } = useSWR(`/_api/comments.get?page_id=${id}`);

  if (error) return <div>Error</div>;
  if (!data) return <div>Loading...</div>;

  if (commentCount !== data.comments.length) {
    setComments(data.comments);
    setCommentCount(data.comments.length);
  }

  const handleComment = () => {
    const data = {
      access_token: process.env.REACT_APP_API_TOKEN,
      commentForm: {
        page_id: id,
        comment: comment,
      },
    };

    fetchInstance()
      .post('/_api/comments.add', data)
      .then((res) => {
        setComments([res.data.comment, ...comments]);
        setComment('');
      });
  };

  return (
    <div className="py-2">
      <div className="bg-Main p-6 md:px-16 rounded">
        <div className="text-Headline font-bold text-2xl">コメント</div>
        <div className="text-SubHeadline">
          {comments.length > 0 ? (
            comments
              .slice()
              .reverse()
              .map((comment, index) => (
                <div className="border-b my-6" key={index}>
                  <div className="flex justify-between items-center">
                    <span>
                      {format(new Date(comment.createdAt), 'yyyy/MM/dd HH:mm')}
                    </span>
                    <p>commnet:&nbsp;{++index}</p>
                  </div>
                  <div className="markdown-body text-Headline py-6">
                    <ReactMarkdown remarkPlugins={[remarkGfm]}>
                      {comment.comment}
                    </ReactMarkdown>
                  </div>
                </div>
              ))
          ) : (
            <p className="text-Headline py-6">
              この記事にコメントはありません。
            </p>
          )}
        </div>
        <div id="comment" className="flex flex-col">
          <textarea
            className="border border-SubHeadline rounded p-2"
            rows={5}
            placeholder="コメントを入力してください。"
            value={comment}
            onChange={(e) => setComment(e.target.value)}
          />
          <div className="flex justify-end mt-4">
            <ContrastButton text="コメントする" onClick={handleComment} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Component;
