import { useContext, useEffect, useState } from "react";
import { BookContext } from "../../data/BookProvider/BookProvider";
import { AuthorType, BookContextType, WorkType } from "../../types";
import { useParams } from "react-router-dom";
import "./BookDetailsPage.scss";
import { Button } from "../../components/Button/Button";
import { useFetch } from "../../useHooks/useFetch/useFetch";
import { RatingComponent } from "../../components/Rating/DisplayRating";
import { IoIosHeartEmpty, IoMdHeart } from "react-icons/io";

export const BookDetailsPage = () => {
  const [reviewValue, setReviewValue] = useState("");
  const [pagesNumber, setPagesNumber] = useState<number>(0);
  const [authorData, setAuthorData] = useState<AuthorType[]>([]);
  const [ratingValue, setRatingValue] = useState<number | null>(2);
  const { setFavorites, favorites, readList, setReadList } = useContext(
    BookContext
  ) as BookContextType;
  const { key } = useParams();

  const { data } = useFetch<WorkType>(`https://openlibrary.org${key}.json`);

  useEffect(() => {
    if (data) {
      const fetchAuthorData = async () => {
        const authorData = data.authors.map((author) =>
          fetch(`https://openlibrary.org${author.author.key}.json`).then(
            (response) => response.json()
          )
        );
        const authorResult = await Promise.all(authorData);
        setAuthorData(authorResult);
      };
      fetchAuthorData();
    }
  }, [data]);

  const alreadyAddedToFavorites = favorites.some(
    (favorite) => favorite.key === key
  );
  const handleOnClick = () => {
    if (data) {
      if (!alreadyAddedToFavorites) {
        setFavorites({
          type: "ADD_FAVORITE",
          payload: {
            title: data.title,
            cover_i: data.covers[0],
            key: data.key,
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
  };

  const alreadyAddedToRead = readList.some((read) => read.key === key);
  const handleOnReadClick = () => {
    if (data) {
      if (!alreadyAddedToRead) {
        setReadList({
          type: "ADD_READ",
          payload: {
            title: data.title,
            cover_i: data.covers[0],
            key: data.key,
          },
        });
      } else {
        setReadList({
          type: "UPDATE_REVIEW",
          payload: {
            key: data.key,
            review: reviewValue,
            rating: ratingValue,
            pages: pagesNumber,
          },
        });
      }
    }
  };

  const handleRemoveReadClick = (key: string) => {
    setReadList({
      type: "REMOVE_FAVORITE",
      payload: key,
    });
  };

  return (
    <>
      {data && (
        <div className="bookDetails">
          <div className="leftsideDetails">
            {data.covers ? (
              <img
                className="bookCover"
                src={`https://covers.openlibrary.org/b/id/${data.covers[0]}-M.jpg`}
                alt=""
              />
            ) : (
              <img
                className="CoverImg"
                src="/assets/img/No-Image-Placeholder.svg"
                alt="No cover available"
              />
            )}
            <div className="leftsideButtons">
              <h2>Favorite</h2>
              {alreadyAddedToFavorites ? (
                <Button
                  style="filledFavorite"
                  buttonName={<IoMdHeart className="filledHeart" />}
                  handleClick={() => handleRemoveClick(data.key)}
                />
              ) : (
                <Button
                  style="emptyFavorite"
                  buttonName={<IoIosHeartEmpty className="emptyHeart" />}
                  handleClick={handleOnClick}
                />
              )}
            </div>
            <div className="reviewContainer">
              {alreadyAddedToRead ? (
                <h2>Add a review</h2>
              ) : (
                <h2>Have you read this Book?</h2>
              )}

              {alreadyAddedToRead && (
                <>
                  <textarea
                    name=""
                    id=""
                    value={reviewValue}
                    placeholder="Write your review.."
                    onChange={(e) => setReviewValue(e.target.value)}
                  />

                  <p>How many pages was the book?</p>
                  <input
                    type="number"
                    value={pagesNumber}
                    onChange={(e) => setPagesNumber(parseInt(e.target.value))}
                  />

                  <RatingComponent
                    ratingValue={ratingValue}
                    setRatingValue={setRatingValue}
                  />
                </>
              )}
              {alreadyAddedToRead ? (
                <div className="reviewButtons">
                  <Button
                    style="placeholder"
                    buttonName="Add review"
                    handleClick={handleOnReadClick}
                  />

                  <Button
                    style="placeholder"
                    buttonName="Remove from read"
                    handleClick={() => handleRemoveReadClick(data.key)}
                  />
                </div>
              ) : (
                <Button
                  style="placeholder"
                  buttonName="Add to read"
                  handleClick={handleOnReadClick}
                />
              )}
            </div>
          </div>
          <div className="container">
            <div className="bookCoverInfo">
              <h1 className="bookTitleFlex">Title: {data.title}</h1>
              {authorData.map((author, index) => (
                <>
                  <p key={index}>{author.name}</p>
                  <p>{author.birth_date}</p>
                </>
              ))}
            </div>
            <div className="descriptionContainer">
              {data.description && (
                <p className="description">
                  {typeof data.description === "string"
                    ? data.description
                    : data.description.value}
                </p>
              )}
              {!data.description && <p>No description available</p>}
            </div>
          </div>
        </div>
      )}
    </>
  );
};
