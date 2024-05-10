export type BookType = {
  title: string;
  author_name: string;
  first_publish_year: number;
  first_sentence: string;
  cover_i: number;
  cover_edition_key: string;
  key: string;
};

export type WorkType = {
  title: string;
  key: string;
  subject: string[];
  cover_id: number;
};

export type AuthorType = {
  name: string;
};

export type DisplayBooksType = {
  data: BookType[] | WorkType[];
};

export type ApiResponse = {
  docs: BookType[];
  works: WorkType[];
};

export type BookContextType = {
  data: ApiResponse;
  loading: boolean;
  error: Error | null;
  setSearchResult: React.Dispatch<React.SetStateAction<string>>;
  favorites: BookType[];
  setFavorites: React.Dispatch<BookAction>;
};

export type BookAction =
  | { type: "ADD_FAVORITE"; payload: BookType }
  | { type: "REMOVE_FAVORITE"; payload: string };
