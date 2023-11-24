// Companies.js
import { useState } from "react";
import { CompanyAvatar, Email, Phone, Edit, Delete, View } from "@images";
import { CompanyData } from "./CompanyData";
import { Link } from "react-router-dom";
import { ViewCompanyOffcanvas, Button, ModalDelete, Header } from "@components";

export const Companies = () => {
  const [show, setShow] = useState(false);
  const [modalShow, setModalShow] = useState(false);

  const handleClose = () => setShow(false);
  const toggleShow = () => setShow((s) => !s);
  const handleModalHide = () => {
    setModalShow(false);
  };
  return (
    <>
      <Header title="Companies" />
      <div className="container-xl">
        <div
          className="rounded table-div border"
          style={{
            margin: "24px",
          }}
        >
          <table className="table table-hover border-0">
            <thead>
              <tr>
                <th>Company Name</th>
                <th>Contact</th>
                <th>Tax registration number</th>
              </tr>
            </thead>
            <tbody>
              {CompanyData.map((company, index) => (
                <tr key={index} className="border-bottom">
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
                    <div className="d-flex align-items-center justify-content-between gap-12">
                      <p className="d-lg-block d-none">
                        {company.taxRegistration}
                      </p>
                      <div className="d-flex gap-12">
                        <Link to="/editcompany">
                          <Button
                            type="button"
                            className=" btn-tertiary btn-tertiary:active cursor-pointer px-0 border-none"
                            iconSrc={Edit}
                          />
                        </Link>

                        <Button
                          iconSrc={Delete}
                          type="button"
                          className="btn-tertiary btn-tertiary:active fs-14  px-0"
                          onClick={() => {
                            setModalShow(true);
                          }}
                        />
                        <ModalDelete
                          show={modalShow}
                          onHide={handleModalHide}
                        />
                        <Button
                          type="button"
                          className=" btn-tertiary btn-tertiary:active cursor-pointer px-0 border-none"
                          iconSrc={View}
                          onClick={toggleShow}
                        />

                        <ViewCompanyOffcanvas
                          show={show}
                          handleClose={handleClose}
                        />
                      </div>
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
