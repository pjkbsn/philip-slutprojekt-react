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

  // const URL = `https://openlibrary.org/search.json?q=${searchResult}&fields=*,availability&limit=10`;
  // const { data, loading, error } = useFetch<ApiResponse>(searchResult);

  return (
    <BookContext.Provider
      value={{
        // data: data || { docs: [], works: [] },
        // loading,
        // error: error as Error | null,
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
