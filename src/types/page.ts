export type Page = {
  _id: string;
  creator:
    | {
        _id: string;
        username: string;
        name: string;
        imageUrlCached: string;
      }
    | string;
  createdAt: string;
  updatedAt: string;
  path: string;
  parent: string;
  liker: string[];
  commentCount: number;
  seenUsers: string[];
};

export type Pages = {
  pages: Array<Page>;
};
