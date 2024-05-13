import { ApiResponse } from "../../types";
import { useFetch } from "../../useHooks/useFetch/useFetch";
import { DisplayBooks } from "../DisplayBooks/DisplayBooks";

export const FrontPageDisplayer = ({ type, genre }: any) => {
  const { data, loading, error } = useFetch<ApiResponse>(
    `https://openlibrary.org/subjects/${type}.json?limit=5`
  );

  return (
    <>
      <h1>{genre}</h1>
      {data && <DisplayBooks data={data.works} />}
    </>
  );
};

// Skaffa en array med olika genrer som displayar olika varje gång man kommer tillbaka till frontpage(random)

// Skapa en FrontPage route och skicka med olika props hit för att displaya flera genrer.
