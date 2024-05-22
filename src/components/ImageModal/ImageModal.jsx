import Modal from "react-modal";
Modal.setAppElement("#root");

import css from "./ImageModal.module.css";

const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
    padding: "0",
  },
  overlay: {
    position: "fixed",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: "#0b0b0bd2",
  },
};

export default function ImageModal({ image, closeModal, modalIsOpen }) {
  return (
    <div>
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        style={customStyles}
        // contentLabel="Example Modal"
      >
        <img src={image.urls.regular} alt={image.alt_description} />
        <ul className={css.list}>
          <li>{image.description}</li>
          <li>Likes: {image.likes}</li>
          <li>User: {image.user.username}</li>
        </ul>
      </Modal>
    </div>
  );
}
