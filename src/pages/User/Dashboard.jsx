import { Header } from "@components";
import { LoudSpeaker } from "@images";

export const Dashboard = () => {
  return (
    <>
      <Header title="Dashboard" />
      <div className="container-xl">
        <div
          className="d-flex align-items-center justify-content-center mw-407 flex-column mx-auto text-center"
          style={{ minHeight: "80vh" }}
        >
          <img
            src={LoudSpeaker}
            alt={LoudSpeaker}
            className="mb-2 d-block mx-auto"
          />
          <h5 className="fw-bold mb-2">Get Staretd!</h5>
          <p className="fs-14 text-gray-500">
            Create trips and manage your tasks. View them on your dashboard
            along with other some significant stats.
          </p>
        </div>
      </div>
    </>
  );
};
