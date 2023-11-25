// FilterOffcanvas.js
import Offcanvas from "react-bootstrap/Offcanvas";
import { Button } from "@components";
import { sidebarData, companiesData, settingsData } from "./SidebarData";
import { Link, NavLink } from "react-router-dom";
import { Logo, UserImage, FooterIcon, Plus } from "@images";

export const SideBarOffcanvas = ({ show, handleClose, handleApplyFilter }) => {
  return (
    <Offcanvas
      style={{ width: "320px" }}
      placement="start"
      show={show}
      onHide={handleClose}
    >
      <Offcanvas.Header closeButton>
        <Offcanvas.Title className="fs-23 fw-bold">
          <Link to="/">
            <img src={Logo} alt="Logo" className="px-2" width={160} />
          </Link>
        </Offcanvas.Title>
      </Offcanvas.Header>
      <Offcanvas.Body className="d-flex flex-column justify-content-between">
        <div>
          <Button
            text="Create Trip"
            type="button"
            iconSrc={Plus}
            className="btn-primary mt-12 w-100 mb-32 "
          />
          <div className="list-item d-flex flex-column gap-3 ls-2">
            {sidebarData.map((item) => (
              <NavLink
                id="navlink"
                key={item.id}
                to={item.link}
                className="d-flex hover "
                activeclassname="sidebar-active"
                onClick={handleClose}
              >
                <img src={item.icon} alt={item.text} />
                <span id="sidebar-active" className="px-4 fs-16 fw-500">
                  {item.text}
                </span>
              </NavLink>
            ))}
          </div>
          <div className="list-item d-flex flex-column gap-4 mt-12  ls-2">
            {companiesData.map((item) => (
              <NavLink
                id="navlink"
                key={item.id}
                to={item.link}
                className="hover "
                activeclassname="sidebar-active"
                onClick={handleClose}
              >
                <img src={item.icon} alt={item.text} />
                <span id="sidebar-active" className="px-4 fs-16 fw-500">
                  {item.text}
                </span>
              </NavLink>
            ))}
          </div>
          <div className="list-item d-flex flex-column gap-4 ls-2 mt-12 ">
            {settingsData.map((item) => (
              <NavLink
                id="navlink"
                key={item.id}
                to={item.link}
                className="hover "
                activeclassname="sidebar-active"
                onClick={handleClose}
              >
                <img src={item.icon} alt={item.text} />
                <span id="sidebar-active" className="px-4 fs-16 fw-500">
                  {item.text}
                </span>
              </NavLink>
            ))}
          </div>
        </div>
        <div className="d-flex justify-content-between gap-4 mt-32 ">
          <div className="d-flex gap-4 align-items-center">
            <img src={UserImage} width={48} height={44} />
            <p className="d-inline fs-16 fw-500">Adam Johnson</p>
          </div>
          <img src={FooterIcon} alt="Footericon" width={24} />
        </div>
      </Offcanvas.Body>
    </Offcanvas>
  );
};
