import { Success } from "@images";
import Modal from "react-bootstrap/Modal";

export const ModalSuccess = (props) => {
  return (
    <Modal {...props} style={{ width: "$modal-sm" }} centered>
      <Modal.Header className="d-flex gap-12 justify-content-start">
        <img src={Success} style={{ width: "30px", height: "30px" }} />
        <p className="fs-18 fw-600">Company Added</p>
      </Modal.Header>
      <Modal.Body className="mb-28">
        <p className="fs-14 fw-400 text-gray-600 ml-16 ">
          A new company ‘ABC Company’ has been added successfully.
        </p>
      </Modal.Body>
    </Modal>
  );
};
