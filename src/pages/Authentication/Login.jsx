import { Hellohand } from "@images";
import { InputField } from "@components";
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
        <InputField label="Email" type="email" name="Email" required />
        <InputField label="Password" type="password" name="Password" required />

        <div className="d-flex align-items-center justify-content-between mb-4">
          <div className="fs-14">
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
          <Link to={`/forgot-password`} className="btn text-primary-500 btn-sm">
            Forgot Password
          </Link>
        </div>
      </form>
    </>
  );
};
