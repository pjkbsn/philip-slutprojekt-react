import { Outlet } from "react-router-dom";
import { NavBar } from "../../components/NavBar/NavBar";
import "./Root.scss";
// import { RatingComponent } from "../../components/Rating";
// import { Books } from "../../data/fetchAPI";

export const Root = () => {
  return (
    <div className="Root">
      <NavBar />
      {/* <RatingComponent /> */}
      {/* <Books /> */}
      <Outlet />
    </div>
  );
};
