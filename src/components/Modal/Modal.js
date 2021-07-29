import React from "react";
import styles from "./Modal.module.css";

class Modal extends React.Component {
  componentDidMount() {
    document.addEventListener("keydown", this.onEsc);
  }

  componentWillUnmount() {
    document.removeEventListener("keydown", this.onEsc);
  }

  onEsc = (e) => {
    if (e.code === "Escape") {
      e.preventDefault();
      this.props.closeModal();
    }
  };

  render() {
    const { images, imgId, closeModal } = this.props;
    const imageId = images.find((image) => {
      return +image.id === +imgId;
    });
    return (
      <div className={styles.Overlay} onClick={closeModal}>
        <div className={styles.Modal}>
          <img
            className={styles.ModalImage}
            src={imageId.largeImageURL}
            alt=""
          />
        </div>
      </div>
    );
  }
}

export default Modal;
