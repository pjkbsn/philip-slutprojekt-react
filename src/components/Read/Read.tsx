import { useContext } from "react";
import { BookContext } from "../../data/BookProvider/BookProvider";
import { BookContextType } from "../../types";
import { DisplayBooks } from "../DisplayBooks/DisplayBooks";
import "./Read.scss";

export const Read = () => {
  const { readList } = useContext(BookContext) as BookContextType;
  const totalBooksRead = readList.length;
  const totalPages = readList.reduce(
    (accumulator, currentValue) => accumulator + (currentValue.pages || 0),
    0
  );
  return (
    <>
      <h1 className="readText">Books read: {totalBooksRead}</h1>

      {totalPages > 0 && (
        <h1 className="readText">Total pages: {totalPages}</h1>
      )}

      {readList && <DisplayBooks data={readList} />}
    </>
  );
};
