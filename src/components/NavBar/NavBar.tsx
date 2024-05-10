import "./NavBar.scss";
import { SearchField } from "../SearchField/SearchField";
import { NavLink } from "react-router-dom";
// import { MyListbox } from "../ListBox/ListBox";

export const NavBar = () => {
  return (
    <>
      <div className="NavBar">
        <div className="leftsideNavbar">
          <NavLink to="/" className="navBarLink">
            Home
          </NavLink>
          {/* <div className="listBox">
            <MyListbox />
          </div> */}
          <SearchField />
        </div>
        <div className="rightsideNavbar">
          <NavLink to="/favorites/" className="navBarLink">
            Favorites
          </NavLink>
          <NavLink to="/read/" className="navBarLink">
            Read
          </NavLink>
          <NavLink to="/categories" className="navBarLink">
            Categories
          </NavLink>
        </div>
      </div>
    </>
  );
};
