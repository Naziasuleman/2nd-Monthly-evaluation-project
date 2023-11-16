import { Logo, Hamburg } from "@images";
import { Link } from "react-router-dom";

export const MobileHeader = () => {
  return (
    <div className="border-bottom w-100 py-4 bg-white d-block d-lg-none">
      <div className="container-fluid">
        <div className="d-flex align-items-center gap-3">
          <img
            src={Hamburg}
            className="cursor-pointer border py-2 px-12 rounded ml-16"
          />
          <Link to="/">
            <img src={Logo} alt="Logo" width={160} />
          </Link>
        </div>
      </div>
    </div>
  );
};
