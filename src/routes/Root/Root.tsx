import { Outlet, useLocation } from "react-router-dom";
import { NavBar } from "../../components/NavBar/NavBar";
import "./Root.scss";
import { FrontPage } from "../FrontPage/FrontPage";

export const Root = () => {
  const location = useLocation();
  return (
    <div className="Root">
      <NavBar />
      {location.pathname === "/" && <FrontPage />}
      <Outlet />
    </div>
  );
};
