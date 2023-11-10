import { Hellohand } from "@images";

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
    </>
  );
};
