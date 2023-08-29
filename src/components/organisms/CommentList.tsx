import React, { useState } from 'react';
import useSWR from 'swr';
import { format } from 'date-fns';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';

import ContrastButton from '../atoms/ContrastButton';

import { Comment } from '../../types/comment';

type Props = {
  id: string;
};

const Component: React.FC<Props> = ({ id }) => {
  const [comments, setComments] = useState<Comment[][]>([]);
  const [commentCount, setCommentCount] = useState<number>(0);
  const [page, setPage] = useState<number>(0);

  // Fetch comments using SWR
  const { data, error } = useSWR(`/_api/comments.get?page_id=${id}`);

  if (error) return <div>Error</div>;
  if (!data) return <div>Loading...</div>;

  // Update comments if commentCount changes
  if (commentCount !== data.comments.length) {
    const newComments: Comment[][] = [];
    for (let i = 0; i < data.comments.length; i += 5) {
      newComments.push(data.comments.slice(i, i + 5));
    }
    setComments(newComments);
    setCommentCount(data.comments.length);
  }

  return (
    <div className="py-2">
      <div className="bg-Main p-6 md:px-16 rounded">
        <div className="text-Headline font-bold text-2xl">コメント</div>
        <div className="text-SubHeadline">
          {comments.length > 0 ? (
            <>
              {comments[page]
                .slice()
                .reverse()
                .map((comment) => (
                  <div className="border-b my-6" key={comment._id}>
                    <div className="flex justify-between items-center">
                      <span>
                        {format(
                          new Date(comment.createdAt),
                          'yyyy/MM/dd HH:mm',
                        )}
                      </span>
                      <p>id:&nbsp;{comment._id}</p>
                    </div>
                    <div className="markdown-body text-Headline py-6">
                      <ReactMarkdown remarkPlugins={[remarkGfm]}>
                        {comment.comment}
                      </ReactMarkdown>
                    </div>
                  </div>
                ))}
              <div className="flex justify-between my-4">
                {page === 0 ? (
                  <div></div>
                ) : (
                  <ContrastButton
                    text="次へ"
                    onClick={() => {
                      setPage(page - 1);
                    }}
                  />
                )}
                {page + 1 === comments.length ? (
                  <div></div>
                ) : (
                  <ContrastButton
                    text="前へ"
                    onClick={() => {
                      setPage(page + 1);
                    }}
                  />
                )}
              </div>
            </>
          ) : (
            <p className="text-Headline py-6">
              この記事にコメントはありません。
            </p>
          )}
        </div>
      </div>
    </div>
  );
};

export default Component;
