import { useContext } from "react";
import { BookContext } from "../../data/BookProvider/BookProvider";
import { BookContextType } from "../../types";
import "./Favorites.scss";
import { DisplayBooks } from "../DisplayBooks/DisplayBooks";

export const Favorites = () => {
  const { favorites } = useContext(BookContext) as BookContextType;

  return (
    <>
      <h1 className="favoriteTitle">Your favorite books</h1>
      {favorites && <DisplayBooks data={favorites} />}
    </>
  );
};
