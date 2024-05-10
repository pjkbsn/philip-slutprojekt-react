import { Outlet } from "react-router-dom";
import { NavBar } from "../../components/NavBar/NavBar";
import "./Root.scss";

export const Root = () => {
  return (
    <div className="Root">
      <NavBar />

      <Outlet />
    </div>
  );
};
