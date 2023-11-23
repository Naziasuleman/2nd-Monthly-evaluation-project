import { Logo, Hamburg } from "@images";
import { useState } from "react";
import { Link } from "react-router-dom";
import { Button, SideBarOffcanvas } from "@components";

export const MobileHeader = () => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const toggleShow = () => setShow((s) => !s);
  return (
    <div className="border-bottom w-100 py-4 bg-white d-block d-lg-none">
      <div className="container-fluid">
        <div className="d-flex align-items-center gap-3">
          <Button
            className="btn-seconday cursor-pointer border px-2 py-2 ml-16 "
            iconSrc={Hamburg}
            onClick={toggleShow}
          />
          <SideBarOffcanvas show={show} handleClose={handleClose} />

          <Link to="/">
            <img src={Logo} alt="Logo" width={160} />
          </Link>
        </div>
      </div>
    </div>
  );
};
