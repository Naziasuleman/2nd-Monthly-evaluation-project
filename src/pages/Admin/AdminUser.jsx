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
          <table className="table table-hover">
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
                  <td className="data">
                    <div className="d-flex flex-column gap-2 align-items-start flex-lg-row justify-content-between align-items-lg-center ">
                      {admin.status ? (
                        <>
                          <div className="badge badge-active  bg-success-50">
                            Active
                          </div>
                        </>
                      ) : (
                        <div className="badge badge-inactive  bg-danger-50 ">
                          Inactive
                        </div>
                      )}

                      <div className="button-div gap-1 ">
                        <Button
                          text="Login as User"
                          type="button"
                          className="btn-sm btn-secondary px-1 fw-500"
                          disabled={false}
                        />
                        <Button
                          text="Revoke Access"
                          type="button"
                          className="btn-sm btn-secondary px-1 fw-500"
                          disabled={false}
                        />
                      </div>

                      <Dropdown
                        show={dropdownOpen === index}
                        onSelect={() => handleDropdownToggle(index)}
                      >
                        <Dropdown.Toggle
                          onClick={() => handleDropdownToggle(index)}
                          className="dropdown btn-secondary drop-btn px-1 py-1"
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
        <nav className="px-4">
          <ul className="pagination justify-content-end">
            <li className="page-item disabled">
              <a className="page-link" href="#" aria-disabled="true">
                Previous
              </a>
            </li>
            <li className="page-item active">
              <a className="page-link" href="#">
                1
              </a>
            </li>
            <li className="page-item">
              <a className="page-link" href="#">
                2
              </a>
            </li>
            <li className="page-item">
              <a className="page-link" href="#">
                3
              </a>
            </li>
            <li className="page-item">
              <a className="page-link" href="#">
                Next
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </>
  );
};
// d-none d-lg-block d-xl-none
