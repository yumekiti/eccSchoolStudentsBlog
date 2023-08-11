import React from 'react';
import useSWR from 'swr';

import BlogContent from '../molecules/BlogContent';

import { Blog } from '../../types/blog';

type Props = {
  id: string | undefined;
};

const Component: React.FC<Props> = ({ id }) => {
  const [content, setContent] = React.useState<Blog>();
  const { data, error } = useSWR(`_api/v3/page?pageId=${id}`);

  if (error) return <div>Error</div>;

  if (data && !content) setContent(data.page);

  return (
    <div className="py-2">
      {content && (
        <BlogContent
          id={content._id}
          user_id={content.lastUpdateUser.username}
          user_image={content.lastUpdateUser.imageUrlCached}
          created_at={content.createdAt}
          updated_at={content.updatedAt}
          title={content.path.split('_')[1]}
          content={content.revision.body}
        />
      )}
    </div>
  );
};

export default Component;
