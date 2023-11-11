import { InputField } from "@components";
export const ForgotPassword = () => {
  return (
    <>
      <h4 className="mb-20 text-gray-900 fw-700">Forgot Password?</h4>
      <p className="text-gray-700 fs-14 mb-52">
        Enter your email and we will provide you a link there to reset your
        password.
      </p>
      <form>
        <InputField label="Email" type="email" name="Email" required />
      </form>
    </>
  );
};
