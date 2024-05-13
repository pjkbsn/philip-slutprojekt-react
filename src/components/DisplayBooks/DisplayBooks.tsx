import { BookType, DisplayBooksType } from "../../types";
import "./DisplayBooks.scss";

import { NavLink } from "react-router-dom";

export const DisplayBooks = ({ data }: DisplayBooksType) => {
  console.log(data);

  return (
    <div className="DisplayBooks">
      <div className="displayContainer">
        {data &&
          data.map((book, index) => (
            <div key={index} className="bookInfoContainer">
              {book.cover_i === undefined && book.cover_id === undefined && (
                <p>No cover available</p>
              )}
              {book.cover_i !== undefined && (
                <img
                  className="bookCover"
                  src={`https://covers.openlibrary.org/b/id/${book.cover_i}-M.jpg`}
                  alt="Book Cover"
                />
              )}
              {book.cover_id !== undefined && (
                <img
                  className="bookCover"
                  src={`https://covers.openlibrary.org/b/id/${book.cover_id}-M.jpg`}
                  alt="Book Cover"
                />
              )}
              <div className="titleContainer">
                <h3>{book.title}</h3>
              </div>
              <NavLink to={`/book/${encodeURIComponent(book.key)}`}>
                Details
              </NavLink>
            </div>
          ))}
      </div>
    </div>
  );
};
