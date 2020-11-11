import React from "react";
import { DogsType } from "../../data/Dogs";
import CircleFilledIcon from "../../assets/icons/circle-filled.svg";
import DeleteIcon from "../../assets/icons/delete.svg";
import EditIcon from "../../assets/icons/edit.svg";
import "./DogCard.css";

type DogCardProps = {
  dog: DogsType;
  onEdit: (dogToEdit: DogsType) => void;
  onDelete: (dogToDelete: DogsType) => void;
};

function DogCard(props: DogCardProps) {
  const { dog, onEdit, onDelete } = props;

  // Stop triggering card click when the delete button is clicked
  function handleDeleteClick(e: any) {
    e.stopPropagation();
    onDelete(dog);
  }

  return (
    <div className="dog-card" onClick={() => onEdit(dog)}>
      <div className="dog-card__actions-container">
        <img src={DeleteIcon} alt="Delete" onClick={handleDeleteClick} />
      </div>
      <div className="dog-card__name">{dog.name}</div>
      <div className="dog-card__info">
        <span className="dog-card__breed">{dog.breed}</span>
        <img
          src={CircleFilledIcon}
          width={4}
          height={4}
          alt="circle filled icon"
        />
        <span className="dog-card__size">{dog.size}</span>
        <img
          src={CircleFilledIcon}
          width={4}
          height={4}
          alt="circle filled icon"
        />
        <span className="dog-card__owner">{dog.owner}</span>
      </div>
      <hr />
      <div className="dog-card__description">{dog.description}</div>
    </div>
  );
}

export default DogCard;
