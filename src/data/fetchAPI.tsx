// import { useEffect, useState } from "react";

// type ApiProp = {
//   API_SEARCH: string;
// };

// export const Books = ({ API_SEARCH }: ApiProp) => {
//   const [allBooks, setAllBooks] = useState([]);

//   useEffect(() => {
//     const fetchBooks = async () => {
//       const url = `https://openlibrary.org/search.json?q=${API_SEARCH}`;
//       const response = await fetch(url);
//       const data = await response.json();
//       setAllBooks(data);
//     };
//     fetchBooks();
//   }, []);

//   console.log(allBooks);

//   return (
//     <>
//       <h1>GET THE API</h1>
//     </>
//   );
// };
