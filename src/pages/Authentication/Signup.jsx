import InputField from "@components/FormFields/InputField";
import { Hellohand } from "@images";

// import PhoneInput from "react-phone-number-input";
// import "react-phone-number-input/style.css";

export const Signup = () => {
  return (
    <>
      <h4 className="mb-12 text-gray-900 fw-700 d-flex gap-2 align-items-center">
        Hi, Nice to Meet You! <img src={Hellohand} alt={Hellohand} />
      </h4>
      <p className="text-gray-700 fs-14 mb-52">
        Please enter the following information to create an account.
      </p>
      <InputField />
    </>
  );
};
