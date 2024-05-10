import { useContext, useState } from "react";
import "./SearchField.scss";
import { Button } from "../Button/Button";
// import { useFetch } from "../../useHooks/useFetch/useFetch";
import { useNavigate } from "react-router-dom";
import { BookContext } from "../../data/BookProvider/BookProvider";
import { BookContextType } from "../../types";

export const SearchField = () => {
  const [result, setResult] = useState("");
  const { setSearchResult } = useContext(BookContext) as BookContextType;
  const navigate = useNavigate();

  // const { data, loading, error } = useFetch(search);

  const handleChange = (event: any) => {
    setResult(event.target.value);
  };
  const handleOnClick = () => {
    navigate("/search/");
    setSearchResult(result);
  };
  return (
    <div className="SearchField">
      <input className="SearchFieldInput" type="text" onChange={handleChange} />
      <Button handleClick={handleOnClick} buttonName="Hej" />
    </div>
  );
};
