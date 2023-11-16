// Header.js
import { NavLink } from "react-router-dom";
import "./style.scss";

export const Header = ({ title }) => {
  const renderTabs = () => {
    if (title === "Settings") {
      return (
        <div className="d-flex fs-16">
          <NavLink to="/settings/account" activeClassName="active-tab">
            <div className="px-12 py-12" id="tab">
              Account
            </div>
          </NavLink>
          <NavLink to="/settings/changepassword" activeClassName="active-tab">
            <div className="px-12 py-12" id="tab">
              Password
            </div>
          </NavLink>
        </div>
      );
    }
    return null;
  };
  const headerPadding = title === "Settings" ? "py-13" : "py-4";

  return (
    <header
      className={`text-gray-900 bg-white border-bottom border-1 px-4 ${headerPadding}`}
    >
      <div className="d-flex flex-column justify-content-between gap-1">
        <div>
          <h4 className="fs-28 fw-bold">{title}</h4>
        </div>
        {renderTabs()}
      </div>
    </header>
  );
};
