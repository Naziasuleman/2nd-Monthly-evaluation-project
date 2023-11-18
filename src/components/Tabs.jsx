// Tabs.js
import { NavLink } from "react-router-dom";

export const Tabs = (title) => {
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
