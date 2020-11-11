import React from "react";
import XIcon from "../../assets/icons/cancel.svg";
import clsx from "clsx";
import "./Modal.css";

type ModalType = {
  show: boolean;
  onClose: () => void;
  className?: string;
  children?: any;
};

function Modal(props: ModalType) {
  const { show, onClose, className, children } = props;

  // Disable body scrolling when a modal is opened
  if (show) {
    document.body.style.overflow = "hidden";
  } else {
    document.body.style.overflow = "auto";
  }

  if (!show) {
    return null;
  }

  return (
    <div className={clsx("modal", className)}>
      <div className="modal__content">
        <button onClick={onClose} className="modal__cancel-button">
          <img src={XIcon} alt="cancel modal icon" />
        </button>
        {children}
      </div>
    </div>
  );
}

export default Modal;
