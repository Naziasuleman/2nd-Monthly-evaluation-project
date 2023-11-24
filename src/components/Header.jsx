// Header.js
import "./components.scss";
import { Search, Filter, Plus } from "@images";
import { Button, InputField, FilterOffcanvas } from "@components";
import { useState } from "react";
import { Tabs } from "./Tabs";
import { Link } from "react-router-dom";

export const Header = ({ title }) => {
  const headerPadding = title === "Settings" ? "py-13" : "py-4";
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const toggleShow = () => setShow((s) => !s);

  return (
    <header
      className={`text-gray-900 bg-white border-bottom border-1 px-4 ${headerPadding}`}
    >
      <div className="d-flex flex-column justify-content-md-between gap-1">
        <div className="d-flex align-items-center justify-content-between">
          <h4 className="fs-28 fw-bold">{title}</h4>
          {(title === "Companies" || title === "Users") && (
            <div className="d-flex flex-sm-column-reverse flex-md-row align-items-center gap-3">
              <div className="d-md-block d-none mb-2">
                <InputField
                  type="text"
                  iconImage={Search}
                  placeholder="Search here"
                />
              </div>
              {title === "Companies" && (
                <Link to="/addcompany">
                  <Button
                    text="Add New"
                    type="button"
                    className="btn-primary w-100 d-flex gap-2 "
                    iconSrc={Plus}
                  />
                </Link>
              )}
              {title === "Users" && (
                <>
                  <Button
                    text="Filter"
                    type="button"
                    className="btn btn-secondary d-flex flex-row-reverse gap-2 fw-500"
                    iconSrc={Filter}
                    onClick={toggleShow}
                  />
                  <FilterOffcanvas show={show} handleClose={handleClose} />
                </>
              )}
            </div>
          )}
        </div>
        {(title === "Companies" || title === "Users") && (
          <div className="mt-12 d-md-none d-block">
            <InputField
              type="text"
              iconImage={Search}
              placeholder="Search here"
            />
          </div>
        )}
        {Tabs(title)} {/* Pass the 'title' prop to renderTabs */}
      </div>
    </header>
  );
};
