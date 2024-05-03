export type BookType = {
  title: string;
  author_name: string;
  first_publish_year: number;
  first_sentence: string;
  cover_i: number;
};

// export type MonsterContextType = {
//   currentBook: BookType[];
//   dispatch: React.Dispatch<MonsterAction>;
// };

// export type MonsterAction =
//   | { type: "VIEW_BOOKS"; payload: BookType }
//   | { type: "ADD_BOOKS"; payload: string };
