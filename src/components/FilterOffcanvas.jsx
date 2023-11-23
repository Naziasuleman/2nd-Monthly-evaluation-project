// FilterOffcanvas.js
import Offcanvas from "react-bootstrap/Offcanvas";
import { Button, SelectField } from "@components";

export const FilterOffcanvas = ({ show, handleClose, handleApplyFilter }) => {
  return (
    <Offcanvas
      style={{ width: "$offcanvas-horizontal-width" }}
      placement="end"
      show={show}
      onHide={handleClose}
    >
      <Offcanvas.Header closeButton>
        <Offcanvas.Title className="fs-23 fw-bold">Filter(s)</Offcanvas.Title>
      </Offcanvas.Header>
      <Offcanvas.Body className="d-flex flex-column justify-content-between">
        <div>
          <h6>Status</h6>
          <div className="d-flex gap-2 mb-20">
            <div
              className="fs-12 fw-500 rounded-pill px-2 py-1 mt-6 border d-flex gap-2 align-items-center"
              style={{ width: "80px" }}
            >
              <div
                className="rounded-circle bg-success-500"
                style={{ width: "8px", height: "8px" }}
              ></div>
              <p className="text-gray-500"> Active</p>
            </div>
            <div
              className="fs-12 fw-500 rounded-pill px-2 py-1 mt-6 border d-flex gap-2 align-items-center"
              style={{ width: "80px" }}
            >
              <div
                className="rounded-circle bg-danger-500"
                style={{ width: "8px", height: "8px" }}
              ></div>
              <p className="text-gray-500">Inactive</p>
            </div>
          </div>
          <SelectField label="By Company Name(s)" />
        </div>
        <div className="d-flex gap-2 ">
          <Button
            text="Reset Filter"
            type="button"
            className="btn-seconday w-30 w-100 "
          />
          <Button
            text="Apply Filter"
            type="button"
            className="btn-primary w-30 w-100 "
            onClick={handleApplyFilter}
          />
        </div>
      </Offcanvas.Body>
    </Offcanvas>
  );
};
