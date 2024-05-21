import { ReactNode, createContext, useReducer, useState } from "react";
import { BookContextType } from "../../types";
import { BookReducer } from "../../components/BookReducer/BookReducer";

type BookProviderType = {
  children: ReactNode;
};

export const BookContext = createContext<BookContextType | undefined>(
  undefined
);

export const BookProvider: React.FC<BookProviderType> = ({ children }) => {
  const [searchResult, setSearchResult] = useState("");
  const [favorites, setFavorites] = useReducer(BookReducer, []);
  const [readList, setReadList] = useReducer(BookReducer, []);

  return (
    <BookContext.Provider
      value={{
        setSearchResult,
        searchResult,
        favorites,
        setFavorites,
        readList,
        setReadList,
      }}
    >
      {children}
    </BookContext.Provider>
  );
};
