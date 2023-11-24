import { InputField, Button } from "@components";
export const Password = () => {
  return (
    <>
      <div className="container-xl ">
        <div className="card-body">
          <h5 className="text-gray-900 fw-bold mb-28 px-4 mt-5">Password</h5>
          <form>
            <div className="d-flex gap-4 px-4">
              <div className="w-100 mw-460 d-flex flex-column gap-2">
                <InputField
                  label="Current Password"
                  type="Password"
                  name="Password"
                  defaultValue=""
                  disabled={false}
                  labelFontSize="fs-14"
                  required
                />
                <InputField
                  label="New Password"
                  type="Password"
                  name="Password"
                  defaultValue=""
                  disabled={false}
                  labelFontSize="fs-14"
                  required
                />
                <InputField
                  label="Confirm New Password"
                  type="Password"
                  name="Password"
                  defaultValue=""
                  disabled={false}
                  labelFontSize="fs-14"
                  required
                />

                <div>
                  <Button
                    text="Change Password"
                    type="submit"
                    className="btn-sm btn-primary mt-12 fw-600"
                    onClick={() => {
                      // Add your logic for handling the button click here
                      console.log("Button Clicked!");
                    }}
                    disabled={true}
                  />
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};
