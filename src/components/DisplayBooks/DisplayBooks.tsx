import { DisplayBooksType } from "../../types";
import { RatingDisplay } from "../Rating/DisplayRating";
import "./DisplayBooks.scss";

import { NavLink } from "react-router-dom";

export const DisplayBooks = ({ data, search }: DisplayBooksType) => {
  return (
    <>
      {search ? <h1 className="SearchInput">{search.toUpperCase()}</h1> : ""}
      <div className="DisplayBooks">
        <div className="displayContainer">
          {data &&
            data.map((book, index) => (
              <>
                <div key={index} className="bookInfoContainer">
                  {book.cover_i === undefined &&
                    book.cover_id === undefined && (
                      <img
                        className="CoverImg"
                        src="/assets/img/No-Image-Placeholder.svg"
                        alt="No cover available"
                      />
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
                  {book.review && (
                    <div className="reviewSection">
                      <h3 className="reviewTitle">Your Review</h3>
                      <div className="reviewText">
                        <p>{book.review}</p>
                      </div>
                    </div>
                  )}
                  {book.pages ? <p>Pages: {book.pages}</p> : ""}
                  {book.rating && <RatingDisplay ratingValue={book.rating} />}
                </div>
              </>
            ))}
        </div>
      </div>
    </>
  );
};
