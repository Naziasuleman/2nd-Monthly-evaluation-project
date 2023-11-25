import { Logo, Hamburg } from "@images";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { showsidebarcanvas } from "../redux/sidebarSlice";
import { Button, SideBarOffcanvas } from "@components";

export const MobileHeader = () => {
  const dispatch = useDispatch();
  const opensidebar = useSelector((state) => state.status.opensidebar);

  const handleToggleSidebar = () => {
    dispatch(showsidebarcanvas());
  };
  return (
    <div className="border-bottom w-100 py-4 bg-white d-block d-lg-none">
      <div className="container-fluid">
        <div className="d-flex align-items-center gap-3">
          <Button
            className="btn-seconday cursor-pointer border px-2 py-2 ml-16 "
            iconSrc={Hamburg}
            onClick={handleToggleSidebar}
          />
          <SideBarOffcanvas
            show={opensidebar}
            handleClose={handleToggleSidebar}
          />

          <Link to="/">
            <img src={Logo} alt="Logo" width={160} />
          </Link>
        </div>
      </div>
    </div>
  );
};
