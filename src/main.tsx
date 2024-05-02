import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { Root } from "./routes/Root/Root";
import { DisplayedBooks } from "./routes/DisplayedBooks/DisplayedBooks";
import { BookProvider } from "./data/BookProvider/BookProvider";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      {
        path: "/search/",
        element: <DisplayedBooks />,
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
