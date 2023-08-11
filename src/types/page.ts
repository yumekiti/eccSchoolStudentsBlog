export type Page = {
  _id: string;
  path: string;
  createdAt: string;
  liker: Array<string>;
  lastUpdateUser: {
    imageUrlCached: string;
    username: string;
  };
};

export type Pages = Array<Page>;
