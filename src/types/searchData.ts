import { Page } from './page';

export type SearchData = {
  data: Page;
  meta: {
    bookmarkCount: number;
    elasticSearchResult: {
      highlightedPath: string;
      snippet: string;
    };
  };
};
