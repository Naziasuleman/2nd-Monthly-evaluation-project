// Header.js
import "./components.scss";
import { Search, Plus } from "@images";
import { Button, InputField } from "@components";
import { Tabs } from "./Tabs"; // Import the renderTabs function

export const Header = ({ title }) => {
  const headerPadding = title === "Settings" ? "py-13" : "py-4";

  return (
    <header
      className={`text-gray-900 bg-white border-bottom border-1 px-4 ${headerPadding}`}
    >
      <div className="d-flex flex-column justify-content-md-between gap-1">
        <div className="d-flex align-items-center justify-content-md-between">
          <h4 className="fs-28 fw-bold">{title}</h4>
          {title === "Companies" && (
            <div className="d-none d-md-flex  align-items-center gap-3 ">
              {/* <div className="input-group" style={{ height: "44px" }}> */}
              {/* <span className="input-group-text bg-white border border-end-0 text-gray-900">
                  <img src={Search} alt="icon" className="icon-image" />
                </span> */}
              {/* <input
                  type="text"
                  className="form-control border border-start-0"
                  name="search"
                /> */}
              <InputField
                type="text"
                iconImage={Search}
                placeholder="Search here"
                className="d-none "
              />

              <Button
                text="Add New"
                type="button"
                className="btn-primary w-45 d-flex gap-1"
                iconSrc={Plus}
              />
            </div>
          )}
        </div>
        {Tabs(title)} {/* Pass the 'title' prop to renderTabs */}
      </div>
    </header>
  );
};
