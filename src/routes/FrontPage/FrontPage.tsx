import { FrontPageDisplayer } from "../../components/FrontPageDisplayer/FrontPageDisplayer";

export const FrontPage = () => {
  return (
    <>
      <FrontPageDisplayer type="sci-fi" genre="Sci-fi" />
      <FrontPageDisplayer type="love" genre="Love" />
      <FrontPageDisplayer type="adventure" genre="Adventure" />
    </>
  );
};
