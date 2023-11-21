import { Header } from "@components";
import { Hellohand, Arrowup } from "@images";

export const AdminDashboard = () => {
  return (
    <>
      <Header title="Dashboard" />
      <div className="bg-gray-white">
        <div className="mx-4 d-flex flex-column flex-start gap-3">
          <h5 className="mt-28 text-gray-900 fw-bold fs-23 d-flex gap-2 align-items-center">
            Hi, welcome back!
            <img src={Hellohand} alt={Hellohand} />
          </h5>
          <p className="fs-16 fw-500 text-gray-600 mt-0 pt-0">
            Here’s what is happening
          </p>
          <div className="rounded bg-white mt-28">
            <div className="row fw-500 fs-14 rounded-top border border-bottom-0">
              <div className="col-12 col-sm-6 d-flex flex-column gap-3 justify-content-center border-end px-110 h-180 ">
                <div>
                  <p className="text-gray-600">New Users</p>
                  <div className="d-flex align-items-center gap-3 mt-1">
                    <h4 className="fw-bold">1251</h4>
                    <span className="d-flex gap-1 fs-12 fw-500 text-success-500 bg-success-50">
                      <p>36%</p>
                      <img src={Arrowup} />
                    </span>
                  </div>
                </div>
                <p className="text-gray-600">Last 30 days</p>
              </div>
              <div className="col-12 col-sm-6 d-flex flex-column justify-content-center gap-3 fw-500 fs-14 px-110 h-180 border-top">
                <div>
                  <p className="text-gray-600">Total Users</p>
                  <div className="d-flex align-items-center gap-3 mt-1">
                    <h4 className="fw-bold">5621</h4>
                  </div>
                </div>
              </div>
            </div>

            <div className="row fw-500 fs-14 border rounded-bottom">
              <div className="col-12 col-sm-6 d-flex flex-column gap-3 justify-content-center border-end px-110 h-180 ">
                <div>
                  <p className="text-gray-600">Revoked Users</p>
                  <div className="d-flex align-items-center gap-3 mt-1">
                    <h4 className="fw-bold">5621</h4>
                  </div>
                </div>
              </div>
              <div className="col-12 col-sm-6 d-flex flex-column justify-content-center gap-3 fw-500 fs-14 px-110 h-180 border-top">
                <div>
                  <p className="text-gray-600">Active Users</p>
                  <div className="d-flex align-items-center gap-3 mt-1">
                    <h4 className="fw-bold">5621</h4>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
