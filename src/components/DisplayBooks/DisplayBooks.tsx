import { BookType, DisplayBooksType } from "../../types";
import "./DisplayBooks.scss";

import { NavLink } from "react-router-dom";

export const DisplayBooks = ({ data }: DisplayBooksType) => {
  console.log(data);

  // const isBookType = (obj: any): obj is BookType => {
  //   return (obj as BookType).cover_i !== undefined;
  // };
  return (
    <div className="DisplayBooks">
      <div className="displayContainer">
        {data &&
          data.map((book, index) => (
            <div key={index} className="bookInfoContainer">
              {book.cover_id ? (
                <img
                  className="bookCover"
                  src={`https://covers.openlibrary.org/b/id/${book.cover_id}-M.jpg`}
                  alt="Book Cover"
                />
              ) : (
                <p>No cover available</p>
              )}
              <div className="titleContainer">
                <h3>{book.title}</h3>
                {/* <p>{book.author_name[0]}</p> */}
              </div>
              {/* <NavLink to={`/book${book.key}`}>Details</NavLink> */}
              <NavLink to={`/book/${encodeURIComponent(book.key)}`}>
                Details
              </NavLink>
            </div>
          ))}
      </div>
    </div>
  );
};
