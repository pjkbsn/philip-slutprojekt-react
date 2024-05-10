import { ReactNode, createContext, useReducer, useState } from "react";
import { useFetch } from "../../useHooks/useFetch/useFetch";
import { ApiResponse, BookContextType } from "../../types";
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

  const URL = `https://openlibrary.org/search.json?q=${searchResult}&fields=*,availability&limit=10`;
  const { data, loading, error } = useFetch<ApiResponse>(URL);

  return (
    <BookContext.Provider
      value={{
        data: data || { docs: [], works: [] }, // Add 'works' property to ensure 'data' is of type 'ApiResponse'
        loading,
        error: error as Error | null,
        setSearchResult,
        favorites,
        setFavorites,
      }}
    >
      {children}
    </BookContext.Provider>
  );
};
