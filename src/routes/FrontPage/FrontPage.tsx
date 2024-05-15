import { FrontPageDisplayer } from "../../components/FrontPageDisplayer/FrontPageDisplayer";
// import { ApiResponse } from "../../types";
// import { useFetch } from "../../useHooks/useFetch/useFetch";

export const FrontPage = () => {
  return (
    <>
      <FrontPageDisplayer type="sci-fi" genre="Sci-fi" />
      <FrontPageDisplayer type="love" genre="Love" />
      <FrontPageDisplayer type="adventure" genre="Adventure" />
    </>
  );
};
