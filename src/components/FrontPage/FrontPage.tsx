import { ApiResponse } from "../../types";
import { useFetch } from "../../useHooks/useFetch/useFetch";
import { DisplayBooks } from "../DisplayBooks/DisplayBooks";

export const FrontPage = () => {
  const { data, loading, error } = useFetch<ApiResponse>(
    "https://openlibrary.org/subjects/sci-fi.json?limit=25"
  );

  return (
    <>
      {data && <DisplayBooks data={data.works} />}
      <h1>Hej</h1>
    </>
  );
};

// Skaffa en array med olika genrer som displayar olika varje gång man kommer tillbaka till frontpage(random)
