import { Back, UploadLogo, Search, Plus2 } from "@images";
import { Link, useNavigate } from "react-router-dom";
import { Button } from "@components";
import { InputField, ModalSuccess } from "@components";
import { useState, useEffect } from "react";

export const AddCompany = () => {
  const navigate = useNavigate();
  const [showAddressForm, setShowAddressForm] = useState(false);
  const [modalShow, setModalShow] = useState(false);

  const handleAddAddressClick = () => {
    setShowAddressForm(true);
  };
  useEffect(() => {
    if (modalShow) {
      const timeoutId = setTimeout(() => {
        setModalShow(false);
      }, 3000);

      return () => clearTimeout(timeoutId);
    }
  }, [modalShow]);

  const handleModalHide = () => {
    setModalShow(false);
    navigate("/companies");
  };
  const handleCancelClick = () => {
    setShowAddressForm(false);
  };
  return (
    <>
      <header className="text-gray-900 bg-white border-bottom border-1 px-4 py-4">
        <div className="d-flex flex-column justify-content-md-between gap-1">
          <div className="d-flex align-items-center gap-4">
            <Link to="/companies">
              <img src={Back} alt="back" />
            </Link>
            <h4 className="fs-28 fw-bold">Add Company</h4>
          </div>
        </div>
      </header>
      <div
        style={{
          marginRight: "24px",
        }}
        className="container-fluid "
      >
        <div>
          <div className="row px-4 py-4 gap-32 border border-top-0 border-start-0 border-end-0 border-bottom">
            <div className="col-12 col-lg-3 d-flex flex-column gap-2">
              <h5 className="text-gray-900 fw-600 fs-18">Company Details</h5>
              <p className="fs-14 text-gray-500 fw-400">
                Add company details to be used while creating trip
              </p>
            </div>
            <div className="col-12 col-lg-7  d-flex flex-column gap-3">
              <div className="d-flex flex-column flex-sm-row gap-12 align-items-center">
                <div>
                  <img src={UploadLogo} alt="alt" />
                </div>
                <div className="d-flex flex-column">
                  <Button
                    text="Upload Logo"
                    type="button"
                    className="btn-secondary btn-sm mt-12 "
                  />
                </div>
              </div>
              <div className="d-flex flex-column flex-sm-row align-items-sm-center gap-3">
                <InputField
                  label="Company Name"
                  type="text"
                  name="company name"
                  defaultValue=""
                  disabled={false}
                  labelFontSize="fs-14"
                  required
                />
                <InputField
                  label="Tax Registration Number"
                  type="text"
                  name="Tax number"
                  defaultValue=""
                  labelFontSize="fs-14"
                  disabled={false}
                />
              </div>
              <div className="d-flex flex-column flex-sm-row align-items-sm-center gap-3">
                <InputField
                  label="Email"
                  type="email"
                  name="email"
                  defaultValue=""
                  labelFontSize="fs-14"
                  disabled={false}
                />
                <InputField
                  label="Phone Number"
                  type="text"
                  name="Phone number"
                  defaultValue=""
                  labelFontSize="fs-14"
                  disabled={false}
                />
              </div>
              <div className="d-flex flex-column flex-sm-row align-items-sm-center gap-3 ">
                <InputField
                  label="Company Address"
                  type="text"
                  name="address"
                  defaultValue=""
                  disabled={false}
                  iconImage={Search}
                  labelFontSize="fs-14"
                  placeholder="Search locations"
                />
              </div>
            </div>
          </div>
          <div className="row px-4 py-4 d-flex gap-32 border border-top-0 border-start-0 border-end-0 border-bottom">
            <div className="col-12 col-lg-3 d-flex flex-column gap-2">
              <h5 className="text-gray-900 fw-600 fs-18">Billing Details</h5>
              <p className="fs-14 text-gray-500 fw-400">
                Choose a billing contact to recieve
              </p>
            </div>
            <div className="col-12 col-lg-7  d-flex flex-column gap-3">
              <div className="d-flex flex-column flex-sm-row align-items-sm-center gap-3">
                <InputField
                  label="Contact Name"
                  type="text"
                  name="contact name"
                  defaultValue=""
                  labelFontSize="fs-14"
                  disabled={false}
                />
                <InputField
                  label="Phone Number"
                  type="text"
                  name="phone number"
                  defaultValue=""
                  labelFontSize="fs-14"
                  disabled={false}
                />
              </div>

              <div className="d-flex flex-column flex-sm-row align-items-sm-center gap-3 ">
                <InputField
                  label="Billing Address"
                  type="text"
                  name="address"
                  defaultValue=""
                  disabled={false}
                  labelFontSize="fs-14"
                  placeholder="Search locations"
                />
              </div>
              <div className="d-flex flex-column flex-sm-row align-items-sm-center gap-2 w-100">
                <input
                  className="form-check-input"
                  type="checkbox"
                  value=""
                  id="invalidCheck2"
                  required
                />
                <label className="form-check-label">
                  <span>Same as company’s address </span>
                </label>
              </div>
            </div>
          </div>
          <div className="row px-4 py-4 d-flex gap-32 ">
            <div className="col-12 col-lg-3  d-flex flex-column gap-2">
              <h5 className="text-gray-900 fw-600 fs-18">Addresses</h5>
              <p className="fs-14 text-gray-500 fw-400">
                List down waypoints to be used while creating trip
              </p>
            </div>
            <div className="col-12 col-xl-7 ">
              {showAddressForm ? (
                // Render the address form when showAddressForm is true
                <div className="d-flex flex-column flex-sm-row align-items-sm-center  justify-content-center gap-2">
                  <InputField
                    label="Title"
                    type="text"
                    name="Title"
                    defaultValue=""
                    disabled={false}
                    labelFontSize="fs-14"
                  />
                  <InputField
                    label="Address"
                    type="text"
                    name="address"
                    defaultValue=""
                    disabled={false}
                    labelFontSize="fs-14"
                  />

                  <Button
                    text="Add "
                    type="button"
                    className="btn-sm btn-primary mt-28 "
                  />

                  <Button
                    text="Cancel"
                    type="button"
                    className="btn-sm btn-tertiary mt-28 "
                    onClick={handleCancelClick}
                  />
                </div>
              ) : (
                // Render the "Add Address" button when showAddressForm is false
                <div className="d-flex flex-column flex-sm-row align-items-sm-center gap-3">
                  <Button
                    text="Add Address"
                    type="button"
                    className="btn-secondary px-3 d-flex gap-1"
                    iconSrc={Plus2}
                    onClick={handleAddAddressClick}
                  />
                </div>
              )}
            </div>
          </div>
        </div>
        <div className="d-flex justify-content-end gap-1 mb-32">
          <Link to="/companies">
            <Button text="Cancel" type="button" className="btn-secondary " />
          </Link>

          <Button
            text="Add Company"
            type="button"
            className="btn-primary "
            onClick={() => {
              setModalShow(true);
            }}
          />

          <ModalSuccess show={modalShow} onHide={handleModalHide} />
        </div>
      </div>
    </>
  );
};
