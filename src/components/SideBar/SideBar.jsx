import React from "react";
import { Link, NavLink } from "react-router-dom";
import {
  Logo,
  Hamburg,
  CollapseLogo,
  UserImage,
  FooterIcon,
  Plus,
} from "@images";
import { Button } from "@components";
import "../style.scss";
import { sidebarData, companiesData, settingsData } from "./SidebarData";

export const SideBar = () => {
  const [collapsed, setCollapsed] = React.useState(false);

  const toggleSidebar = () => {
    setCollapsed(!collapsed);
  };

  return (
    <div
      className={`overflow-auto text-gray-600 border-1 border-end min-vh-100 d-none d-lg-flex sidebar  ${
        collapsed ? "collapsed" : "expand"
      }`}
    >
      <div>
        <div
          className={`d-flex align-items-center justify-content-center mb-20 ${
            collapsed ? "" : "gap-2"
          }`}
        >
          <img
            src={Hamburg}
            className="ml-16 cursor-pointer border py-2 px-6  rounded"
            onClick={toggleSidebar}
          />
          <Link to="/">
            <img
              src={Logo}
              alt="Logo"
              className={`px-2 ${collapsed ? "d-none" : "d-inline"}`}
              width={160}
            />
          </Link>
          <Link to="/">
            <img
              src={CollapseLogo}
              alt="Logo"
              className={`px-2 ${collapsed ? "d-inline" : "d-none"}`}
              width={42}
              height={28}
            />
          </Link>
        </div>
        <Button
          text={`${collapsed ? "" : "Create Trip"}`}
          type="button"
          width="100%"
          iconSrc={Plus}
          className="btn-primary mt-12 w-100 mb-32"
          onClick={() => {
            console.log("Button Clicked!");
          }}
        />

        <div className="list-item d-flex flex-column gap-3 ls-2">
          <p
            className={`${
              collapsed ? "d-none" : "d-inline"
            } fs-12 fw-600 text-gray-500  ml-16`}
          >
            OVERVIEW
          </p>
          {sidebarData.map((item) => (
            <NavLink
              id="navlink"
              key={item.id}
              to={`/${item.text}`}
              className={`d-flex hover ${
                collapsed ? "justify-content-center" : "align-items-center"
              }`}
              activeClassName="sidebar-active"
            >
              <img src={item.icon} alt={item.text} />
              <span
                id="sidebar-active"
                className={`${collapsed ? "d-none" : "d-inline"} fs-16 fw-500`}
              >
                {item.text}
              </span>
            </NavLink>
          ))}
        </div>

        <div className="list-item d-flex flex-column gap-4 mt-20 ls-2">
          <p
            className={`${
              collapsed ? "d-none" : "d-inline"
            } fs-12 fw-600 text-gray-500  ml-16`}
          >
            ADD RESOURCES
          </p>
          {/* {companiesData.map((item) => (
            <NavLink
              id="navlink"
              key={item.id}
              to={`/${item.text}`} // Assuming you have a property like 'slug'
              className={`d-flex hover ${
                collapsed ? "justify-content-center" : "align-items-center"
              }`}
              activeClassName="sidebar-active"
            >
              <img src={item.icon} alt={item.text} />
              <span
                className={`${collapsed ? "d-none" : "d-inline"} fs-16 fw-500`}
              >
                {item.text}
              </span>
            </NavLink>
          ))} */}
          {companiesData.map((item) => (
            <NavLink
              id="navlink"
              key={item.id}
              to={`/${item.text}`}
              className={`d-flex hover ${
                collapsed ? "justify-content-center" : "align-items-center"
              }`}
              activeClassName="sidebar-active"
            >
              <img src={item.icon} alt={item.text} />
              <span
                id="sidebar-active"
                className={`${collapsed ? "d-none" : "d-inline"} fs-16 fw-500`}
              >
                {item.text}
              </span>
            </NavLink>
          ))}
        </div>
        <div className="list-item  d-flex flex-column gap-4 mt-20 ls-2">
          <p
            className={`${
              collapsed ? "d-none" : "d-inline"
            } fs-12 fw-600 text-gray-500  ml-16`}
          >
            USERS
          </p>
          {settingsData.map((item) => (
            <NavLink
              id="navlink"
              key={item.id}
              to={`/${item.text}`}
              className={`d-flex hover ${
                collapsed ? "justify-content-center" : "align-items-center"
              }`}
              activeClassName="sidebar-active"
            >
              <img src={item.icon} alt={item.text} />
              <span
                id="sidebar-active"
                className={`${collapsed ? "d-none" : "d-inline"} fs-16 fw-500`}
              >
                {item.text}
              </span>
            </NavLink>
          ))}
        </div>
      </div>
      <div className="d-flex gap-2 mt-32 ">
        <div>
          <img src={UserImage} width={48} height={44} />
          <p className={`${collapsed ? "d-none" : "d-inline"} fs-16 fw-500 `}>
            Adam Johnson
          </p>
        </div>
        <img src={FooterIcon} alt="Footericon" width={24} />
      </div>
    </div>
  );
};