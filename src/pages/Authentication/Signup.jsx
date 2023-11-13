// Signup.jsx
import { InputField, Button } from "@components";
import { Link } from "react-router-dom";
import { Hellohand } from "@images";

export const Signup = () => {
  return (
    <>
      <h4 className="mb-12 fw-700 text-gray-900 d-flex gap-2 align-items-center">
        Hi, Nice to Meet You! <img src={Hellohand} alt={Hellohand} />
      </h4>
      <p className="text-gray-700 fs-14 mb-52">
        Please enter the following information to create an account.
      </p>
      <form>
        <InputField label="Full Name" type="text" name="Full Name" required />
        <InputField label="Email" type="email" name="Email" required />
        <InputField label="Phone Number" type="text" name="Phone Number" />
        <InputField label="Password" type="password" name="Password" required />
        <InputField
          label="Confirm Password"
          type="password"
          name="Confirm Password"
          required
        />
        <div className="mb-4 fs-14">
          <input
            className="form-check-input"
            type="checkbox"
            value=""
            id="invalidCheck2"
            required
          />
          <label className="form-check-label ">
            <span>
              I agree to the{" "}
              <a href="/termsconditions" target="_blank">
                terms and conditions
              </a>
            </span>
          </label>
        </div>
        <Button
          text="Sign Up"
          type="submit"
          width="100%"
          className="btn-primary mt-12 w-100"
          onClick={() => {
            // Add your logic for handling the button click here
            console.log("Button Clicked!");
          }}
        />
      </form>
      <div className="text-center mt-4">
        <span className="text-gray-700 fs-16">Already have an account?</span>
        <Link to="/login" className="fw-medium ">
          {""} Login here
        </Link>
      </div>
    </>
  );
};
