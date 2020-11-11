import React from "react";
import { DogsType } from "../../../data/Dogs";
import Modal from "../Modal";
import SadDogGraphic from "../../../assets/graphics/undraw_walk_dreaming.svg";
import Button from "../../Button/Button";
import "./DeleteConfirmationModal.css";

type DeleteConfirmationModalProps = {
  dog: DogsType | undefined;
  show: boolean;
  onDelete: () => void;
  onClose: () => void;
};

function DeleteConfirmationModal(props: DeleteConfirmationModalProps) {
  const { dog, show, onDelete, onClose } = props;

  return (
    <Modal show={show} onClose={onClose}>
      <div className="delete-confirmation-modal__header">
        <img src={SadDogGraphic} alt="Sad dog" />
        <h2>Remove {dog?.name}?</h2>
        <p>This action cannot be reversed.</p>
      </div>

      <div className="delete-confirmation-modal__delete-button-container">
        <Button
          label="Confirm"
          className="delete-confirmation-modal__delete-button"
          onClick={onDelete}
        />
      </div>
    </Modal>
  );
}

export default DeleteConfirmationModal;
