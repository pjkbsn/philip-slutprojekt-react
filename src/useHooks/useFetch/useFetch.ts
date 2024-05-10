// import { useEffect, useState } from "react";
// import { BookType } from "../../types";

// export const useFetch = (URL: string) => {
//   const [data, setData] = useState<BookType[]>([]);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState<any>(null);

//   useEffect(() => {
//     const fetchBooks = async () => {
//       try {
//         setLoading(true);
//         const response = await fetch(URL);

//         if (!response.ok) {
//           throw new Error("Responsedata not OK");
//         }
//         const jsonData = await response.json();
//         setData(jsonData);
//         setLoading(false);
//       } catch (error) {
//         setError(error);
//         setLoading(false);
//       }
//     };

//     fetchBooks();
//   }, [URL]);

//   return { data, loading, error };
// };

import { useState, useEffect } from "react";

export const useFetch = <T>(
  url: string
): { data: T | null; loading: boolean; error: string | null } => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (!url) {
      setData(null);
      setLoading(false);
      return;
    }

    const fetchData = async () => {
      setLoading(true);
      setError(null);

      try {
        const response = await fetch(url);

        if (!response.ok) {
          throw new Error(
            `An error occurred while fetching the data: ${response.statusText}`
          );
        }

        const jsonData = await response.json();
        setData(jsonData);
      } catch (error: any) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [url]);
  return { data, loading, error };
};
