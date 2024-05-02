import { ReactNode, createContext, useState } from "react";
import { useFetch } from "../../useHooks/useFetch/useFetch";
import { BookType } from "../../types";

export type BookContextType = {
  data: BookType[];
  loading: boolean;
  error: Error | null;
  setSearchResult: React.Dispatch<React.SetStateAction<string>>;
};

type BookProviderType = {
  children: ReactNode;
};

export const BookContext = createContext<BookContextType | undefined>(
  undefined
);

export const BookProvider: React.FC<BookProviderType> = ({ children }) => {
  const [searchResult, setSearchResult] = useState("");

  const { data, loading, error } = useFetch(searchResult);

  return (
    <BookContext.Provider value={{ data, loading, error, setSearchResult }}>
      {children}
    </BookContext.Provider>
  );
};
