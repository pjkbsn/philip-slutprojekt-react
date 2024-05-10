import { useContext } from "react";
import { DisplayBooks } from "../../components/DisplayBooks/DisplayBooks";
import { BookContext } from "../../data/BookProvider/BookProvider";
import { BookContextType } from "../../types";
import "./DisplayedBooks.scss";

export const DisplayedBooks = () => {
  const { data, loading, error } = useContext(BookContext) as BookContextType;

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
        <DisplayBooks data={data} />
      </>
    );
  }
};
