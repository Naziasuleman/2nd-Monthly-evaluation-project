import { Link, Outlet } from "react-router-dom";
import { Logo, Carousel1, Carousel2, Carousel3 } from "@images";
import Carousel from "react-bootstrap/Carousel";
import "./style.scss";

export const AuthLayout = () => {
  return (
    <div className="container-xl">
      <div className="row align-items-center">
        <div className="col-12 col-lg-6 d-flex align-items-center justify-content-center justify-content-lg-start py-4 min-vh-100">
          <div className="mw-396 w-100">
            <Link to="/" className="d-inline-block mb-40 text-start mb-lg-40">
              <img
                src={Logo}
                className="img-fluid"
                alt="Logo"
                width="146"
                height={17}
              />
            </Link>
            <div className="card bg-transparent">
              <div className="card-body px-0">
                <Outlet />
              </div>
            </div>
          </div>
        </div>
        <div className="col-12 col-lg-6 d-none d-lg-block">
          <div className="bg-gray-100  rounded-3 px-60 py-36">
            <Carousel
              variant="dark"
              controls={false}
              indicators={true}
              interval={3000}
            >
              <Carousel.Item>
                <img
                  src={Carousel1}
                  alt={Carousel1}
                  className="img-fluid d-block mx-auto"
                />
                <div className=" text-center mw-357 mx-auto">
                  <h5 className="mb-3 mt-36 fw-700 ">Create New Trip</h5>
                  <p className="text-gray-500 fs-14 pb-80">
                    Create a new trip in just few easy steps. You can go back
                    easily to edit information too.
                  </p>
                </div>
              </Carousel.Item>
              <Carousel.Item>
                <img
                  src={Carousel2}
                  alt={Carousel2}
                  className="img-fluid d-block mx-auto"
                />
                <div className=" text-center mw-357 mx-auto">
                  <h5 className=" mb-3 mt-36 fw-700">
                    Different Calendar Views
                  </h5>
                  <p className="text-gray-500 fs-14 pb-80">
                    The monthly, weekly and daily calendar views let you easily
                    catch up on every trip.
                  </p>
                </div>
              </Carousel.Item>
              <Carousel.Item>
                <img
                  src={Carousel3}
                  alt={Carousel3}
                  className="img-fluid d-block mx-auto"
                />
                <div className="text-center mw-357 mx-auto ">
                  <h5 className="mb-3 mt-36 fw-700 ">Tasks To be Completed</h5>
                  <p className="text-gray-500 fs-14 pb-80">
                    Any important information related to a trip that you
                    didn&rsquo;t complete will be turned into a task. Any
                  </p>
                </div>
              </Carousel.Item>
            </Carousel>
          </div>
        </div>
      </div>
    </div>
  );
};
