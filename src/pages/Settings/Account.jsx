import { useState } from "react";
import { InputField, Button } from "@components";
import { Avatars } from "@images";
export const Account = () => {
  const [showDeleteButton, setShowDeleteButton] = useState(false);

  const handleUploadButtonClick = () => {
    setShowDeleteButton(true);
    // You can perform other actions related to the "Upload Image" button click here
    console.log("Upload Image Button Clicked!");
  };

  const handleDeleteButtonClick = () => {
    setShowDeleteButton(false);
    // You can perform other actions related to the "Delete" button click here
    console.log("Delete Button Clicked!");
  };
  return (
    <>
      <div className="card-body px-4 ">
        <h5 className="text-gray-900 fw-bold mb-28 mt-5">Settings</h5>
        <form>
          <div className="d-flex gap-4 flex-sm-row flex-column">
            <div className="text-center ">
              <div className="">
                <img src={Avatars} alt="alt" />
              </div>
              <div className="d-flex flex-column">
                <Button
                  text="Upload Image"
                  type="button"
                  className="btn-sm btn-secondary mt-12  px-2"
                  onClick={handleUploadButtonClick}
                />
                {showDeleteButton && (
                  <Button
                    text="Delete"
                    type="button"
                    // width={20}
                    className="btn-sm btn-tertiary mt-12 px-2"
                    onClick={handleDeleteButtonClick}
                  />
                )}
              </div>
            </div>
            <div className="w-100 mw-460 d-flex flex-column gap-2">
              <InputField
                label="Full Name"
                type="text"
                name="Full Name"
                defaultValue="Dustin Miller"
                disabled={false}
                labelFontSize="fs-14"
                required
              />
              <InputField
                label="Email"
                type="email"
                name="Email"
                defaultValue="dustin@gmail.com"
                disabled={true}
                labelFontSize="fs-14"
                required
              />
              <InputField
                label="Phone Number"
                type="text"
                name="Phone Number"
                defaultValue="111-222-333"
                disabled={false}
                labelFontSize="fs-14"
              />

              <div className="w-30">
                <Button
                  text="Save Changes"
                  type="submit"
                  className="btn-sm btn-primary mt-12 fw-600"
                  disabled={true}
                  onClick={() => {
                    // Add your logic for handling the button click here
                    console.log("Button Clicked!");
                  }}
                />
              </div>
            </div>
          </div>
        </form>
      </div>
    </>
  );
};
