import PropTypes from "prop-types";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";

const ModalDone = ({
  showDone,
  handleDoneClose,
  handleDoneConfirm,
  modalDoneHead,
  modalDoneBody,
}) => {
  return (
    <>
      <Modal show={showDone} onHide={handleDoneClose}>
        <Modal.Header closeButton>
          <Modal.Title>{modalDoneHead}</Modal.Title>
        </Modal.Header>
        <Modal.Body>{modalDoneBody}</Modal.Body>
        <Modal.Footer>
          <Button variant="primary" onClick={handleDoneConfirm}>
            OK
          </Button>
          <Button variant="secondary" onClick={handleDoneClose}>
            Cancel
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

ModalDone.propTypes = {
  showDone: PropTypes.bool,
  handleDoneClose: PropTypes.func,
  handleDoneConfirm: PropTypes.func,
  modalDoneHead: PropTypes.string,
  modalDoneBody: PropTypes.string,
};

export default ModalDone;
