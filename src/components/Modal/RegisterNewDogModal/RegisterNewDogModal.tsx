import React, { useEffect, useState } from "react";
import clsx from "clsx";
import Modal from "../Modal";
import { DogsType } from "../../../data/Dogs";
import CautiousDogGraphic from "../../../assets/graphics/undraw_cautious_dog.svg";
import EditProfileGraphic from "../../../assets/graphics/undraw_loading.svg";
import "./RegisterNewDogModal.css";

type RegisterNewDogModalType = {
  show: boolean;
  onClose: () => void;
  registerNewDog?: (newDog: DogsType) => void;
  dog?: DogsType;
  updateCurrentDog?: (newDog: DogsType) => void;
};

function RegisterNewDogModal(props: RegisterNewDogModalType) {
  const { show, onClose, registerNewDog, dog, updateCurrentDog } = props;
  const [name, setName] = useState<string>("");
  const [breed, setBreed] = useState<string>("");
  const [owner, setOwner] = useState<string>("");
  const [size, setSize] = useState<string>("XS");
  const [description, setDescription] = useState<string>("");

  // For editing functionality
  useEffect(() => {
    function setDogAttributes() {
      setName(dog!.name);
      setBreed(dog!.breed);
      setOwner(dog!.owner);
      setSize(dog!.size);
      setDescription(dog!.description);
    }

    if (dog) {
      setDogAttributes();
    }
  }, [dog]);

  function handleOnSubmit(e: any) {
    e.preventDefault();
    // Register new dog for register
    if (registerNewDog) {
      const newDog: DogsType = {
        name: name,
        breed: breed,
        owner: owner,
        size: size,
        description: description,
      };
      registerNewDog(newDog);
    }

    // Update the dog's profile if updating function is pass
    if (updateCurrentDog) {
      const newDog: DogsType = {
        name: name,
        breed: breed,
        owner: owner,
        size: size,
        description: description,
      };
      updateCurrentDog(newDog);
    }

    handleClose();
  }

  function handleClose() {
    setName("");
    setBreed("");
    setOwner("");
    setSize("XS");
    setDescription("");
    onClose();
  }

  function shouldDisableButton() {
    if (
      name.length !== 0 &&
      breed.length !== 0 &&
      owner.length !== 0 &&
      size.length !== 0 &&
      description.length !== 0
    ) {
      return false;
    }

    return true;
  }

  return (
    <Modal show={show} onClose={handleClose}>
      <div className="register-new-dog-modal__header">
        {dog ? (
          <>
            <img src={EditProfileGraphic} alt="Dog loading" />
            <h2>Meet {dog.name}</h2>
            <p>Wrong info? Make changes and click the update button below.</p>
          </>
        ) : (
          <>
            <img src={CautiousDogGraphic} alt="Cautious dog" />
            <h2>Register an advisor</h2>
            <p>We're always looking to add new members to our team!</p>
            <p>Fill out the information below and click register.</p>
          </>
        )}
      </div>

      <form
        className="register-new-dog-modal__form"
        onSubmit={(e) => handleOnSubmit(e)}
      >
        <label className="register-new-dog-modal__label">
          <span>Name</span>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </label>
        <label className="register-new-dog-modal__label">
          <span>Breed</span>
          <input
            type="text"
            value={breed}
            onChange={(e) => setBreed(e.target.value)}
          />
        </label>
        <label className="register-new-dog-modal__label">
          <span>Owner</span>
          <input
            type="text"
            value={owner}
            onChange={(e) => setOwner(e.target.value)}
          />
        </label>
        <label className="register-new-dog-modal__label">
          <span>Size</span>
          <select value={size} onChange={(e) => setSize(e.target.value)}>
            <option value="XS">XS</option>
            <option value="SM">SM</option>
            <option value="MD">MD</option>
            <option value="LG">LG</option>
            <option value="XL">XL</option>
          </select>
        </label>
        <label className="register-new-dog-modal__label">
          <span>Description</span>
          <textarea
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
        </label>
        <input
          className={clsx("register-new-dog-modal__submit-button", {
            "register-new-dog-modal__submit-button--active": !shouldDisableButton(),
          })}
          type="submit"
          value={dog ? "Update" : "Register"}
          disabled={shouldDisableButton()}
        />
      </form>
    </Modal>
  );
}

export default RegisterNewDogModal;
