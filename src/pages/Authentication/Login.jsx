import { Hellohand } from "@images";
import { InputField, Button } from "@components";
import { Link } from "react-router-dom";

export const Login = () => {
  return (
    <>
      <h4 className="mb-20 text-gray-900 fw-700 d-flex gap-2 align-items-center">
        Welcome to Pathsync
        <img src={Hellohand} alt={Hellohand} />
      </h4>
      <p className="text-gray-700 fs-14 mb-64">
        Please login in order to proceed with your account.
      </p>
      <form>
        <InputField
          label="Email"
          type="email"
          name="Email"
          defaultValue=""
          className="mb-12"
          disabled={false}
          required
        />
        <InputField
          label="Password"
          type="password"
          name="Password"
          defaultValue=""
          disabled={false}
          required
        />

        <div className="d-flex align-items-center justify-content-between mb-4">
          <div className="fs-14 d-flex gap-2">
            <input
              className="form-check-input"
              type="checkbox"
              value=""
              id="invalidCheck2"
              defaultValue=""
              disabled={false}
              required
            />
            <label className="form-check-label">
              <span>Remember Me</span>
            </label>
          </div>
          <Link to={`/forgot-password`}>
            <Button
              text="Forgot Password?"
              type="button"
              width="100%"
              className="btn-sm btn-tertiary btn-tertiary:active fs-14 w-100 "
              onClick={() => {
                // Add your logic for handling the button click here
                console.log("Button Clicked!");
              }}
            />
          </Link>
        </div>
        <Button
          text="Login"
          type="submit"
          width="100%"
          className="btn-lg btn-primary mt-12 w-100"
          onClick={() => {
            // Add your logic for handling the button click here
            console.log("Button Clicked!");
          }}
        />
      </form>
      <div className="text-center mt-4">
        <span className="text-gray-700 fs-16">Don&rsquo;t have any?</span>
        <Link to="/signup" className="fw-medium text-primary-500">
          {""} Create a free account
        </Link>
      </div>
    </>
  );
};
