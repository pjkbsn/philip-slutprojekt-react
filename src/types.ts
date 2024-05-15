export type BookType = {
  title: string;
  // author_name: string;
  // first_publish_year: number;
  // first_sentence: string;
  cover_i?: number;
  cover_id?: number;
  // cover_edition_key: string;
  key: string;
  review?: string;
  rating?: any;
  pages?: number;
  search?: string;
};

type Author = {
  author: { key: string };
};

export type WorkType = {
  title: string;
  key: string;
  subject: string[];
  covers: number[];
  authors: Author[];
  cover_id?: number;
  cover_i?: number;
  review?: string;
  rating?: any;
  pages?: number;
  description: string | { type: string; value: string };
};

export type DisplayBooksType = {
  data: BookType[] | WorkType[];
  search?: string;
};

export type AuthorType = {
  name: string;
};

export type ApiResponse = {
  docs: BookType[];
  works: WorkType[];
};

export type BookContextType = {
  // data: ApiResponse;
  // loading: boolean;
  // error: Error | null;
  setSearchResult: React.Dispatch<React.SetStateAction<string>>;
  searchResult: string;
  favorites: BookType[];
  setFavorites: React.Dispatch<BookAction>;
  readList: BookType[];
  setReadList: React.Dispatch<BookAction>;
};

export type BookAction =
  | { type: "ADD_FAVORITE"; payload: BookType }
  | { type: "REMOVE_FAVORITE"; payload: string }
  | { type: "ADD_READ"; payload: BookType }
  | { type: "REMOVE_READ"; payload: string }
  | {
      type: "UPDATE_REVIEW";
      payload: {
        key: string;
        review: string;
        rating: any;
        pages: number;
      };
    };
