import { SideBar, MobileHeader } from "@components";
import { Outlet } from "react-router-dom";

export const AdminLayout = () => {
  return (
    <>
      <MobileHeader />
      <div className="d-flex h-100">
        <SideBar />
        <div className={`flex-grow-1 main-content w-100 bg-white`}>
          <div>
            <Outlet />
          </div>
        </div>
      </div>
    </>
  );
};
