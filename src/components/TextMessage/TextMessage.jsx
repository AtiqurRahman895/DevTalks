import { Outlet } from "react-router";
import SideNav from "./SideNav/SideNav";

const TextMessage = () => {
  return (
    <div className="flex">
      <SideNav />

      <div className="flex-1">
        <Outlet />
      </div>
    </div>
  );
};

export default TextMessage;
