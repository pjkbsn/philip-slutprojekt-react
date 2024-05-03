import { useContext } from "react";
import "./DisplayBooks.scss";
import {
  BookContext,
  BookContextType,
} from "../../data/BookProvider/BookProvider";

export const DisplayBooks = () => {
  const { data, loading, error } = useContext(BookContext) as BookContextType;
  console.log(data);

  if (loading) {
    return <p>..Loading</p>;
  }
  if (error) {
    return <p>Error: {error.toString()}</p>;
  }
  if (data) {
    return (
      <ul>
        {data.map((book, index) => (
          <li key={index}>
            <h2>{book.title}</h2>
            <p>Author: {book.author_name}</p>
            {book.cover_i ? (
              <img
                src={`https://covers.openlibrary.org/b/id/${book.cover_i}-M.jpg`}
                alt="Book Cover"
              />
            ) : (
              <p>No cover available</p>
            )}
          </li>
        ))}
      </ul>
    );
  }

  // return (
  //   <div className="DisplayBooks">
  //     <h1>DisplayBooks</h1>
  //   </div>
  // );
};
