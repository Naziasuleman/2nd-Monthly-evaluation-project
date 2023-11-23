// FilterOffcanvas.js
import Offcanvas from "react-bootstrap/Offcanvas";
import { UploadLogo, Email, Phone, Edit } from "@images";
import { Button } from "@components";
import { NavLink } from "react-router-dom";

export const ViewCompanyOffcanvas = ({ show, handleClose }) => {
  return (
    <Offcanvas
      style={{ width: "480px" }}
      placement="end"
      show={show}
      onHide={handleClose}
    >
      <Offcanvas.Header closeButton>
        <div className="row justify-content-between">
          <div className="d-flex gap-3 col-8">
            <img src={UploadLogo} alt="alt" />

            <div>
              <h5 className="fs-23 fw-bold">ABC Company</h5>
              <div className="d-flex gap-2 align-items-center fs-14 fw-400">
                <img src={Email} alt="Email Icon" />
                <p>dustin.wilson@example.com</p>
              </div>
              <div className="d-flex gap-2 align-items-center">
                <img src={Phone} alt="Phone Icon" />
                <p>123-45-1485</p>
              </div>
            </div>
          </div>
          <div className="col-3">
            <NavLink to="/editcompany">
              <Button
                text="Edit"
                type="button"
                className="btn-seconday d-flex gap-1 py-1 px-3 "
                iconSrc={Edit}
              />
            </NavLink>
          </div>
        </div>
      </Offcanvas.Header>
      <Offcanvas.Body className="d-flex flex-column justify-content-start gap-4">
        <div style={{ height: "1px" }} className="bg-gray-200 w-100" />
        <div className="bg-gray-white ">
          <div className="py-12 px-2">
            <p className="fs-14 text-gray-500">Tax Registration Number</p>
            <p className="text-gray-900 fw-500 fs-16">123-45-8475</p>
          </div>
        </div>
        <div style={{ height: "1px" }} className="bg-gray-200 w-100" />

        <p className="fs-16 text-gray-900 fw-600">Billing Contact</p>
        <div className="row">
          <div className="col">
            <p className="fs-14 text-gray-500">Contact Name </p>
            <p className="text-gray-900 fw-400 fs-16">Eva James</p>
          </div>
          <div className="col">
            <p className="fs-14 text-gray-500">Phone Number </p>
            <p className="text-gray-900 fw-400 fs-16">(405) 555-0128</p>
          </div>
        </div>
        <div>
          <p className="fs-14 text-gray-500">Billing Address </p>
          <p className="text-gray-900 fw-400 fs-16">
            Time Out, Hirschengraben 13, 6003, Luzern, CHE
          </p>
        </div>
        <div style={{ height: "1px" }} className="bg-gray-200 w-100" />
        <p className="fs-16 text-gray-900 fw-600">Address</p>
        <div className="row">
          <div className="col">
            <p className="fs-14 text-gray-500">Office </p>
            <p className="text-gray-900 fw-400 fs-16">
              4 Novella Block, Eichmannview
            </p>
          </div>
          <div className="col">
            <p className="fs-14 text-gray-500">Home </p>
            <p className="text-gray-900 fw-400 fs-16">
              Time Out, Hirschengraben 13, 6003, Luzern, CHE
            </p>
          </div>
        </div>
      </Offcanvas.Body>
    </Offcanvas>
  );
};
