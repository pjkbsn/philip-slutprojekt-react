import { useEffect, useState } from "react";
import { BookType } from "../../types";

export const useFetch = (API_SEARCH: string) => {
  const [data, setData] = useState<BookType[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<any>(null);

  const URL = `https://openlibrary.org/search.json?q=${API_SEARCH}&fields=*,availability&limit=10`;

  useEffect(() => {
    const fetchBooks = async () => {
      try {
        setLoading(true);
        const response = await fetch(URL);

        if (!response.ok) {
          throw new Error("Responsedata not OK");
        }
        const jsonData = await response.json();
        setData(jsonData.docs);
        setLoading(false);
      } catch (error) {
        setError(error);
        setLoading(false);
      }
    };

    fetchBooks();
  }, [URL]);

  return { data, loading, error };
};
