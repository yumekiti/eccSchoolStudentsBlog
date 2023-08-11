export type Blog = {
  _id: string;
  lastUpdateUser: {
    imageUrlCached: string;
    username: string;
  };
  createdAt: string;
  updatedAt: string;
  path: string;
  revision: {
    body: string;
  };
};
