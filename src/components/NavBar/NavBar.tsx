import "./NavBar.scss";
import { SearchField } from "../SearchField/SearchField";

export const NavBar = () => {
  return (
    <>
      <div className="NavBar">
        <div>Search Bar</div>
        <SearchField />
      </div>
    </>
  );
};
