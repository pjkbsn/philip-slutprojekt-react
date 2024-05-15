import { useContext } from "react";
import { DisplayBooks } from "../../components/DisplayBooks/DisplayBooks";
import { BookContext } from "../../data/BookProvider/BookProvider";
import { ApiResponse, BookContextType } from "../../types";
import "./DisplayedBooks.scss";
import { useFetch } from "../../useHooks/useFetch/useFetch";

export const DisplayedBooks = () => {
  const { searchResult } = useContext(BookContext) as BookContextType;

  const { data, loading, error } = useFetch<ApiResponse>(
    `https://openlibrary.org/search.json?q=${searchResult}&fields=*,availability&limit=10`
  );

  console.log(data);

  if (loading) {
    return (
      <div className="DisplayBooks">
        <p>..Loading</p>
      </div>
    );
  }

  if (error) {
    return (
      <div className="DisplayBooks">
        <p>Error: {error.toString()}</p>
      </div>
    );
  }
  if (data) {
    return (
      <>
        <DisplayBooks data={data.docs} search={searchResult} />
      </>
    );
  }
};
