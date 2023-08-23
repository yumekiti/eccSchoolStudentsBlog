import React, { useState } from 'react';
import useSWR from 'swr';
import { format } from 'date-fns';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';

import { fetchInstance } from '../../libs/fetchInstance';

import ContrastButton from '../atoms/ContrastButton';

import { Comment } from '../../types/comment';

type Props = {
  id: string;
};

const Component: React.FC<Props> = ({ id }) => {
  // State for handling comments and user input
  const [comment, setComment] = useState('');
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

  // Add a new comment
  const handleComment = () => {
    const requestData = {
      access_token: process.env.REACT_APP_API_TOKEN,
      commentForm: {
        page_id: id,
        comment: comment,
      },
    };

    fetchInstance()
      .post('/_api/comments.add', requestData)
      .then((res) => {
        if (comments.length === 0) {
          setComments([[res.data.comment]]);
          setComment('');
          setPage(0);
          return;
        } else {
          setComments([
            [res.data.comment, ...comments[0]],
            ...comments.slice(1),
          ]);
        }
        setComment('');
        setPage(0);
      })
      .catch((error) => {
        console.error('Error adding comment:', error);
      });
  };

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
                    text="前へ"
                    onClick={() => {
                      setPage(page - 1);
                    }}
                  />
                )}
                {page + 1 === comments.length ? (
                  <div></div>
                ) : (
                  <ContrastButton
                    text="次へ"
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
