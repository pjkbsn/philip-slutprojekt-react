import { DisplayBooksType } from "../../types";
import "./DisplayBooks.scss";

// import { useContext } from "react";
// import { BookContext } from "../../data/BookProvider/BookProvider";
// import { BookContextType } from "../../types";

import { NavLink } from "react-router-dom";

export const DisplayBooks = ({ data }: DisplayBooksType) => {
  // const { data, loading, error } = useContext(BookContext) as BookContextType;
  // console.log(data);

  // if (loading) {
  //   return (
  //     <div className="DisplayBooks">
  //       <p>..Loading</p>
  //     </div>
  //   );
  // }
  // if (error) {
  //   return (
  //     <div className="DisplayBooks">
  //       <p>Error: {error.toString()}</p>
  //     </div>
  //   );
  // }
  // if (data) {

  return (
    <div className="DisplayBooks">
      <div className="displayContainer">
        {data &&
          data.map((book, index) => (
            <div key={index} className="bookInfoContainer">
              {book.cover_i ? (
                <img
                  className="bookCover"
                  src={`https://covers.openlibrary.org/b/id/${book.cover_i}-M.jpg`}
                  alt="Book Cover"
                />
              ) : (
                <p>No cover available</p>
              )}
              <div className="titleContainer">
                <h3>{book.title}</h3>
                <p>{book.author_name}</p>
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
  // }
};
