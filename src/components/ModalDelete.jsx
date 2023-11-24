import { Deleteicon } from "@images";
import Modal from "react-bootstrap/Modal";
import { Button } from "@components";

export const ModalDelete = (props) => {
  const { onHide } = props;
  return (
    <Modal {...props} style={{ width: "$modal-sm" }} centered>
      <Modal.Header className="d-flex gap-12 justify-content-start">
        <img src={Deleteicon} style={{ width: "30px", height: "30px" }} />
        <p className="fs-18 fw-600">Delete Company</p>
      </Modal.Header>
      <Modal.Body className="mb-28">
        <p className="fs-14 fw-400 text-gray-600 ml-16 ">
          Are you sure you want to delete this company from your list?
        </p>
      </Modal.Body>
      <Modal.Footer className="mb-20 d-flex justify-content-end mx-4">
        <Button
          text="Cancel"
          type="button"
          className="btn-secondary"
          onClick={onHide}
        />
        <Button
          text="Delete"
          type="button"
          className="btn-primary bg-danger-500"
        />
      </Modal.Footer>
    </Modal>
  );
};
