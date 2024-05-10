import { ReactNode, createContext, useReducer, useState } from "react";
import { useFetch } from "../../useHooks/useFetch/useFetch";
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

  const { data, loading, error } = useFetch(searchResult);

  return (
    <BookContext.Provider
      value={{
        data,
        loading,
        error,
        setSearchResult,
        favorites,
        setFavorites,
      }}
    >
      {children}
    </BookContext.Provider>
  );
};
