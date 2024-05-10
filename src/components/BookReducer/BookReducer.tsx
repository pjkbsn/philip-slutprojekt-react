import { BookAction, BookType } from "../../types";

export const BookReducer = (state: BookType[], action: BookAction) => {
  switch (action.type) {
    case "ADD_FAVORITE":
      return [...state, action.payload];
    case "REMOVE_FAVORITE":
      return state.filter((book: BookType) => book.key !== action.payload);
  }
};
