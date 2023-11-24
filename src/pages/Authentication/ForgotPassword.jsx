// ForgotPassword.jsx
import { InputField, Button } from "@components";
import { Link } from "react-router-dom";

export const ForgotPassword = () => {
  return (
    <>
      <h4 className="mb-20 text-gray-900 fw-700">Forgot Password?</h4>
      <p className="text-gray-700 fs-14 mb-52">
        Enter your email, and we will provide you a link there to reset your
        password.
      </p>
      <form>
        <InputField
          label="Email"
          type="email"
          name="Email"
          defaultValue=""
          disabled={false}
          required
        />
        <Button
          text="Send Email"
          type="submit"
          width="100%"
          className="btn-lg btn-primary mt-12 w-100"
          onClick={() => {
            // Add your logic for handling the button click here
            console.log("Button Clicked!");
          }}
        />
      </form>
      <Link to="/login">
        <Button
          text="Back to Login"
          type="button"
          width="100%"
          className="btn-lg btn-tertiary btn-tertiary:active mt-20 w-100 "
          onClick={() => {
            // Add your logic for handling the button click here
            console.log("Button Clicked!");
          }}
        />
      </Link>
    </>
  );
};

export default ForgotPassword;
