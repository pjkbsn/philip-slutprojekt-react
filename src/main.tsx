import React from "react";
import ReactDOM from "react-dom/client";
import "./global.scss";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { Root } from "./routes/Root/Root";
import { DisplayedBooks } from "./routes/DisplayedBooks/DisplayedBooks";
import { BookProvider } from "./data/BookProvider/BookProvider";
import { FavoritesPage } from "./routes/FavoritesPage/FavoritesPage";
import { BookDetailsPage } from "./routes/BookDetailsPage/BookDetailsPage";
import { ReadPage } from "./routes/ReadPage/ReadPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      {
        path: "/search/",
        element: <DisplayedBooks />,
      },
      {
        path: "/favorites/",
        element: <FavoritesPage />,
      },
      {
        path: "/book/:key",
        element: <BookDetailsPage />,
      },
      {
        path: "/read/",
        element: <ReadPage />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <BookProvider>
      <RouterProvider router={router} />
    </BookProvider>
  </React.StrictMode>
);
