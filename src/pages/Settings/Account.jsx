import { InputField, Button } from "@components";
export const Account = () => {
  return (
    <>
      <div className="container-xl ">
        <div className="card-body">
          <h5 className="text-gray-900 fw-bold mb-28 px-4 mt-5">Settings</h5>
          <form>
            <div className="d-flex gap-4">
              <div className="text-center"></div>
              <div className="w-100 mw-460">
                <InputField
                  label="Full Name"
                  type="text"
                  name="Full Name"
                  defaultValue="Dustin Miller"
                  disabled={false}
                  required
                />
                <InputField
                  label="Email"
                  type="email"
                  name="Email"
                  defaultValue="dustin@gmail.com"
                  disabled={true}
                  required
                />
                <InputField
                  label="Phone Number"
                  type="text"
                  name="Phone Number"
                  defaultValue="111-222-333"
                  disabled={false}
                />

                <Button
                  text="Save Changes"
                  type="submit"
                  width={20}
                  className="btn-primary mt-12"
                  disabled={true}
                  onClick={() => {
                    // Add your logic for handling the button click here
                    console.log("Button Clicked!");
                  }}
                />
              </div>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};
