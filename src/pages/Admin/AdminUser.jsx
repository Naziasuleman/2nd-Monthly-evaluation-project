import { Header } from "@components";
import { useState } from "react";
import { AdminUserData } from "./AdminUserData";
import { Email, Phone } from "@images";
import { Button } from "@components";
import Dropdown from "react-bootstrap/Dropdown";
export const AdminUser = () => {
  const [dropdownOpen, setDropdownOpen] = useState(null);

  const handleDropdownToggle = (index) => {
    if (dropdownOpen === index) {
      setDropdownOpen(null);
    } else {
      setDropdownOpen(index);
    }
  };
  return (
    <>
      <Header title="Users" />

      <div className="container-xl">
        <div
          className="rounded table-div border"
          style={{
            margin: "24px",
          }}
        >
          <table className="table table-2">
            <thead>
              <tr>
                <th>User Name</th>
                <th>Contact</th>
                <th>Created At</th>
                <th>Status</th>
              </tr>
            </thead>
            <tbody>
              {AdminUserData.map((admin, index) => (
                <tr key={index}>
                  <td className="d-flex gap-2 align-items-center border-0">
                    <img
                      src={admin.profile}
                      alt="Company Avatar"
                      className="rounded-circle"
                    />
                    <div className="d-flex flex-column gap-1">
                      <p className="company-name">{admin.userName}</p>
                      <div className="badge badge-primary d-lg-none d-flex-inline fs-12 fw-500 bg-success-50">
                        {admin.status}
                      </div>
                    </div>
                  </td>
                  <td className="data ">
                    <div className="d-flex gap-2 align-items-center">
                      <img src={Email} alt="Email Icon" />
                      <p>{admin.email}</p>
                    </div>
                    <div className="d-flex gap-2 align-items-center">
                      <img src={Phone} alt="Phone Icon" />
                      <p>{admin.phone}</p>
                    </div>
                  </td>
                  <td className="data ">{admin.createdAt}</td>
                  <td>
                    <div className="d-flex justify-content-between align-items-center ">
                      <div className="badge d-lg-block d-none fs-12 fw-500 bg-success-50">
                        {admin.status}
                      </div>

                      <div className="data button-div gap-2">
                        <Button
                          text="Login as User"
                          type="button"
                          className="btn-seconday px-1 "
                          disabled={false}
                        />
                        <Button
                          text="Revoke Access"
                          type="button"
                          className="btn-seconday px-1"
                          disabled={false}
                        />
                      </div>

                      <Dropdown
                        show={dropdownOpen === index}
                        onSelect={() => handleDropdownToggle(index)}
                      >
                        <Dropdown.Toggle
                          onClick={() => handleDropdownToggle(index)}
                          className="dropdown btn-seconday drop-btn px-2 py-1"
                        ></Dropdown.Toggle>

                        <Dropdown.Menu>
                          <Dropdown.Item className="py-2 ">
                            Login as User
                          </Dropdown.Item>
                          <Dropdown.Item className="py-2 ">
                            Revoke Access
                          </Dropdown.Item>
                        </Dropdown.Menu>
                      </Dropdown>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
};
// d-none d-lg-block d-xl-none
