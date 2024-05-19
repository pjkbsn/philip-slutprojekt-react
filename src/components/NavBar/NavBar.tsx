import "./NavBar.scss";
import { SearchField } from "../SearchField/SearchField";
import { NavLink } from "react-router-dom";
import { BsBookmarkHeartFill } from "react-icons/bs";
import { FaReadme } from "react-icons/fa";

// import { MyListbox } from "../ListBox/ListBox";

export const NavBar = () => {
  return (
    <>
      <div className="NavBar">
        <div className="leftsideNavbar">
          <SearchField />
        </div>
        <div className="middleNavbar">
          <NavLink to="/favorites/" className="navBarLink">
            <BsBookmarkHeartFill />
          </NavLink>
          <NavLink to="/" className="navBarLink">
            Home
          </NavLink>
          <NavLink to="/read/" className="navBarLink">
            <FaReadme />
          </NavLink>
        </div>
        <div className="rightsideNavbar"></div>
      </div>
    </>
  );
};
