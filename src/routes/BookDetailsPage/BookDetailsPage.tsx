import { useContext, useEffect, useState } from "react";
import { BookContext } from "../../data/BookProvider/BookProvider";
import { /*  ApiResponse, */ BookContextType, WorkType } from "../../types";
import { useParams } from "react-router-dom";
import "./BookDetailsPage.scss";
import { Button } from "../../components/Button/Button";
import { useFetch } from "../../useHooks/useFetch/useFetch";
import { RatingComponent } from "../../components/Rating/DisplayRating";

export const BookDetailsPage = () => {
  const [reviewValue, setReviewValue] = useState("");
  const [pagesNumber, setPagesNumber] = useState<number>(0);
  const [authorData, setAuthorData] = useState<any[]>([]);
  const [ratingValue, setRatingValue] = useState<number | null>(2);
  const { setFavorites, favorites, readList, setReadList } = useContext(
    BookContext
  ) as BookContextType;
  const { key } = useParams();

  const { data } = useFetch<WorkType>(`https://openlibrary.org${key}.json`);
  console.log(data);
  console.log("Pages", pagesNumber);

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
            // author_name: data.author_name,
            title: data.title,
            // first_publish_year: data.first_publish_year,
            // first_sentence: data.first_sentence,
            cover_i: data.covers[0],
            // cover_edition_key: data.cover_edition_key,
            key: data.key,
            // review: reviewValue,
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
              {alreadyAddedToFavorites ? (
                <Button
                  buttonName="Remove from favorites"
                  handleClick={() => handleRemoveClick(data.key)}
                />
              ) : (
                <Button
                  buttonName="Add to favorites"
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
                    buttonName="Add review"
                    handleClick={handleOnReadClick}
                  />

                  <Button
                    buttonName="Remove from read"
                    handleClick={() => handleRemoveReadClick(data.key)}
                  />
                </div>
              ) : (
                <Button
                  buttonName="Add to read"
                  handleClick={handleOnReadClick}
                />
              )}
            </div>
          </div>
          <div className="container">
            <div className="bookCoverInfo">
              <h1 className="bookTitleFlex">Title: {data.title}</h1>
              {authorData.map((author) => (
                <>
                  <p>{author.name}</p>
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
