import { useState } from "react";
import Modal from "react-overlays/Modal";

const PopUp = () => {
  const [showModal, setShowModal] = useState(false);

  const handleClose = () => setShowModal(false);

  const handleSuccess = () => {
    console.log("Success");
  };

  const renderBackdrop = (props) => <div className="backdrop" {...props} />;
  return (
    <div>
      <div>
        <button
          className="input"
          type="button"
          onClick={() => setShowModal(true)}
        >
          Open Modal
        </button>
      </div>
      <Modal
        className="modal button"
        show={showModal}
        onHide={handleClose}
        renderBackdrop={renderBackdrop}
      >
        <div>
          <div className="modal-header">
            <div className="modal-title">Congratulations 🎉🎉</div>
            <div>
              <span className="close-button" onClick={handleClose}>
                x
              </span>
            </div>
          </div>
          <div className="modal-desc">
            <p>You won the guess game champ</p>
          </div>
          <div className="modal-footer">
            <button className="secondary-button" onClick={handleClose}>
              Close
            </button>
            <button className="primary-button" onClick={handleSuccess}>
              Start Game
            </button>
          </div>
        </div>
      </Modal>
    </div>
  );
};

export default PopUp;
