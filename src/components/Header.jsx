// Header.js
import "./components.scss";
import { Search, Filter } from "@images";
import { Button, InputField } from "@components";
import { Tabs } from "./Tabs"; // Import the renderTabs function
import { Link } from "react-router-dom";

export const Header = ({ title }) => {
  const headerPadding = title === "Settings" ? "py-13" : "py-4";

  return (
    <header
      className={`text-gray-900 bg-white border-bottom border-1 px-4 ${headerPadding}`}
    >
      <div className="d-flex flex-column justify-content-md-between gap-1">
        <div className="d-flex align-items-center justify-content-between">
          <h4 className="fs-28 fw-bold">{title}</h4>
          {(title === "Companies" || title === "Users") && (
            <div className="d-flex flex-sm-column-reverse flex-md-row align-items-center j gap-3">
              <div className="d-md-block d-none">
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
                    className="btn-primary w-30 d-flex gap-1 mt-20"
                    iconSrc={Plus}
                  />
                </Link>
              )}
              {title === "Users" && (
                <Button
                  text="Filter"
                  type="button"
                  className="btn-seconday w-30 d-flex flex-row-reverse gap-1 mt-20"
                  iconSrc={Filter}
                />
              )}
            </div>
          )}
        </div>
        {title === "Companies" ||
          (title === "Users" && (
            <div className="mt-12 d-md-none d-block">
              <InputField
                type="text"
                iconImage={Search}
                placeholder="Search here"
              />
            </div>
          ))}
        {Tabs(title)} {/* Pass the 'title' prop to renderTabs */}
      </div>
    </header>
  );
};
