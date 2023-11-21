// Companies.js
import { Header } from "@components";
import { CompanyAvatar, Email, Phone, Edit, Delete, View } from "@images";
import { CompanyData } from "./CompanyData";
import { Link } from "react-router-dom";

export const Companies = () => {
  return (
    <>
      <Header title="Companies" />
      <div
        className="rounded table-div border"
        style={{
          margin: "24px",
        }}
      >
        <table className="table ">
          <thead>
            <tr>
              <th>Company Name</th>
              <th>Contact</th>
              <th>Tax registration number</th>
            </tr>
          </thead>
          <tbody>
            {CompanyData.map((company, index) => (
              <tr key={index}>
                <td className="d-flex gap-3 align-items-center border-0">
                  <img src={CompanyAvatar} alt="Company Avatar" />
                  <div className="d-flex flex-column border-0">
                    <p className="company-name">{company.companyName}</p>
                    <p className="d-lg-none d-inline-flex">
                      Tax Registration:
                      <span className="company-name">
                        {company.taxRegistration}
                      </span>
                    </p>
                  </div>
                </td>
                <td className="data">
                  <div className="d-flex gap-2 align-items-center">
                    <img src={Email} alt="Email Icon" />
                    <p>{company.email}</p>
                  </div>
                  <div className="d-flex gap-2 align-items-center">
                    <img src={Phone} alt="Phone Icon" />
                    <p>{company.phone}</p>
                  </div>
                </td>
                <td className="data">
                  <div className="d-flex justify-content-between gap-12">
                    <p className="d-lg-block d-none">
                      {company.taxRegistration}
                    </p>
                    <div className="d-flex gap-12">
                      <Link to="/editcompany">
                        <img src={Edit} alt="Edit Icon" />
                      </Link>
                      <img src={Delete} alt="Delete Icon" />
                      <img src={View} alt="View Icon" />
                    </div>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
};
