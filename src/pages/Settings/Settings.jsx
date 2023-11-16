import { Outlet } from "react-router-dom";
import { Header } from "@components";
export const Settings = () => {
  return (
    <>
      <Header title="Settings" />
      <Outlet />
    </>
  );
};
