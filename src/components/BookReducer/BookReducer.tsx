import { BookAction, BookType } from "../../types";

export const BookReducer = (state: BookType[], action: BookAction) => {
  switch (action.type) {
    case "ADD_FAVORITE":
      return [...state, action.payload];
    case "REMOVE_FAVORITE":
      return state.filter((book: BookType) => book.key !== action.payload);
    case "ADD_READ":
      return [...state, action.payload];
    case "REMOVE_READ":
      return state.filter((book: BookType) => book.key !== action.payload);
    case "UPDATE_REVIEW":
      return state.map((book: BookType) =>
        book.key === action.payload.key
          ? {
              ...book,
              review: action.payload.review,
              rating: action.payload.rating,
              pages: action.payload.pages,
            }
          : book
      );
  }
};
