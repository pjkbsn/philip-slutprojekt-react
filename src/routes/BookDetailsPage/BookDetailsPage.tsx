import { useContext } from "react";
import { BookContext } from "../../data/BookProvider/BookProvider";
import { BookContextType } from "../../types";
import { useNavigate, useParams } from "react-router-dom";
import "./BookDetailsPage.scss";
import { Button } from "../../components/Button/Button";

export const BookDetailsPage = () => {
  const { data, setFavorites, favorites } = useContext(
    BookContext
  ) as BookContextType;
  const { key } = useParams();
  const navigate = useNavigate();

  const bookDetails = data.find((book) => book.key === key);

  const handleOnClick = () => {
    if (bookDetails) {
      const alreadyAddedToFavorites = favorites.some(
        (favorite) => favorite.key === bookDetails.key
      );

      if (!alreadyAddedToFavorites) {
        setFavorites({
          type: "ADD_FAVORITE",
          payload: {
            author_name: bookDetails.author_name,
            title: bookDetails.title,
            first_publish_year: bookDetails.first_publish_year,
            first_sentence: bookDetails.first_sentence,
            cover_i: bookDetails.cover_i,
            cover_edition_key: bookDetails.cover_edition_key,
            key: bookDetails.key,
          },
        });
      } else {
        console.log("Already Added");
      }
    }
  };

  const handleRemoveClick = (key: string) => {
    setFavorites({
      type: "REMOVE_FAVORITE",
      payload: key,
    });
    navigate("/favorites");
  };

  return (
    <div className="bookDetails">
      {bookDetails && (
        <>
          <div className="leftsideDetails">
            <img
              className="bookCover"
              src={`https://covers.openlibrary.org/b/id/${bookDetails.cover_i}-M.jpg`}
              alt=""
            />
            <h3>Add to Favorites?</h3>
            <div className="leftsideButtons">
              <Button buttonName="Add" handleClick={handleOnClick} />
              <Button
                buttonName="Remove"
                handleClick={() => handleRemoveClick(bookDetails.key)}
              />
            </div>
          </div>
          <div className="container">
            <div className="bookCoverInfo">
              <h1 className="bookTitleFlex">Title: {bookDetails.title}</h1>
              <h2>Published: {bookDetails.first_publish_year}</h2>
              <p>Author: {bookDetails.author_name}</p>
            </div>
            <div className="description">
              <p>First sentence: {bookDetails.first_sentence[0]}</p>
            </div>
          </div>
        </>
      )}
    </div>
  );
};
