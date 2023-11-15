import { Logo, Hamburg } from "@images";
import { Link } from "react-router-dom";

export const MobileHeader = () => {
  return (
    <div className="border-bottom w-100 py-4 bg-white top-header d-block d-lg-none">
      <div className="container-fluid">
        <div className="d-flex align-items-center gap-3">
          <img
            src={Hamburg}
            className="cursor-pointer border py-2 px-12 rounded ml-16 cursor-pointer border py-2 px-6  rounded"
          />
          <Link to="/">
            <img src={Logo} alt="Logo" width={160} />
          </Link>
        </div>
      </div>
    </div>
  );
};
