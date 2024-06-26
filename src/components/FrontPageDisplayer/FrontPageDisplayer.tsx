import { ApiResponse } from "../../types";
import { useFetch } from "../../useHooks/useFetch/useFetch";
import { DisplayBooks } from "../DisplayBooks/DisplayBooks";
import "./FrontPageDisplayer.scss";

type FrontPageProps = {
  type: string;
  genre: string;
};

export const FrontPageDisplayer = ({ type, genre }: FrontPageProps) => {
  const { data, error, loading } = useFetch<ApiResponse>(
    `https://openlibrary.org/subjects/${type}.json?limit=5`
  );

  if (loading) {
    return (
      <div className="DisplayBooks">
        <p>..Loading</p>
      </div>
    );
  }

  if (error) {
    return (
      <div className="DisplayBooks">
        <p>Error: {error.toString()}</p>
      </div>
    );
  }

  if (data) {
    return (
      <>
        <h1 className="FrontPageGenre">{genre}</h1>
        {data && <DisplayBooks data={data.works} />}
      </>
    );
  }
};
