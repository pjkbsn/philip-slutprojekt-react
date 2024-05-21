import { useContext, useState } from "react";
import "./SearchField.scss";
import { Button } from "../Button/Button";
// import { useFetch } from "../../useHooks/useFetch/useFetch";
import { useNavigate } from "react-router-dom";
import { BookContext } from "../../data/BookProvider/BookProvider";
import { BookContextType } from "../../types";
import { GiArchiveResearch } from "react-icons/gi";

export const SearchField = () => {
  const [result, setResult] = useState("");
  const { setSearchResult } = useContext(BookContext) as BookContextType;
  const navigate = useNavigate();

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setResult(event.target.value);
  };
  const handleOnClick = () => {
    navigate("/search/");
    setSearchResult(result);
  };
  return (
    <div className="SearchField">
      <input
        className="SearchFieldInput"
        type="text"
        placeholder="Search title.."
        onChange={handleChange}
      />
      <Button
        style="searchButton"
        handleClick={handleOnClick}
        buttonName={<GiArchiveResearch className="searchIcon" />}
      />
    </div>
  );
};
