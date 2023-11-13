import { Link } from "react-router-dom";
import { Logo, Key1, Key2 } from "@images";
import { InputField, Button } from "@components";

export const AdminLogin = () => {
  return (
    <div className="col-12 d-flex align-items-center justify-content-center order-1 order-lg-2 py-4 min-vh-100 bg-gray-50">
      <div className="w-100">
        <div className="card bg-gray-50 mw-396 mx-auto">
          <div className="card-body">
            <Link to="/">
              <img
                src={Logo}
                alt="logo"
                className="d-block mx-auto mb-80"
                width="173px"
              />
            </Link>
            <h3 className="text-center mb-20 text-gray-900 fw-700">
              Admin Panel Login
            </h3>
            <p className="text-gray-700 fs-14 text-center mb-64">
              Please login in order to proceed.
            </p>
            <form>
              <InputField label="Email" type="email" name="Email" required />
              <InputField
                label="Password"
                type="password"
                name="Password"
                required
              />

              <div className="d-flex align-items-center justify-content-between mb-4">
                <div className="fs-14 d-flex ">
                  <input
                    className="form-check-input"
                    type="checkbox"
                    value=""
                    id="invalidCheck2"
                    required
                  />
                  <label className="form-check-label">
                    <span>Remember Me</span>
                  </label>
                </div>
                <Link
                  to={`/forgot-password`}
                  className="btn text-primary-500 btn-sm "
                >
                  Forgot Password?
                </Link>
              </div>
              <Button
                text="Login"
                type="submit"
                width="100%"
                className="btn-primary mt-12 w-100"
                onClick={() => {
                  // Add your logic for handling the button click here
                  console.log("Button Clicked!");
                }}
              />
            </form>
          </div>
        </div>
        <div className="d-flex justify-content-between mt-86">
          <img
            src={Key1}
            alt="keys"
            className="d-block mx-auto "
            width="173px"
            height="97px"
          />
          <img
            src={Key2}
            alt="keys"
            className="d-block mx-auto "
            width="173px"
            height="97px"
          />
        </div>
      </div>
    </div>
  );
};
