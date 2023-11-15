import { SideBar, Header, MobileHeader } from "@components";
import { Outlet } from "react-router-dom";

export const UserLayout = () => {
  return (
    <>
      <MobileHeader />
      <div className="d-flex h-100">
        <SideBar />
        <div className={`flex-grow-1 main-content w-100`}>
          <Header title="Dashboard" />
          <div>
            <Outlet />
          </div>
        </div>
      </div>
    </>
  );
};
