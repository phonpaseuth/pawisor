import React, { useState } from "react";
import Dogs, { DogsType } from "../data/Dogs";
import DogCard from "../components/DogCard/DogCard";
import Container from "../components/Container/Container";
import RegisterNewDogModal from "../components/Modal/RegisterNewDogModal/RegisterNewDogModal";
import DeleteConfirmationModal from "../components/Modal/DeleteConfirmationModal/DeleteConfirmationModal";
import Button from "../components/Button/Button";
import Hero from "../components/Hero/Hero";
import SearchBar from "../components/SearchBar/SearchBar";
import PlusIcon from "../assets/icons/plus.svg";
import "./Home.css";

function Home() {
  let [data, setData] = useState<DogsType[]>(
    JSON.parse(localStorage.getItem("dogsData") || "[]")
  );
  let [showRegisterDogModal, setShowRegisterDogModal] = useState<boolean>(
    false
  );
  let [showEditDogModal, setShowEditDogModal] = useState<boolean>(false);
  let [showDeleteConfirmationModal, setShowDeleteConfirmationModal] = useState<
    boolean
  >(false);
  let [selectedDog, setSelectedDog] = useState<DogsType | undefined>(undefined);
  let [showSearchError, setShowSearchError] = useState<boolean>(false);

  // Save data to local storage on first run
  if (data.length === 0) {
    setData(Dogs);
    localStorage.setItem("dogsData", JSON.stringify(Dogs));
  }

  function handleRegisterNewDog(newDog: DogsType) {
    const updatedData = data.concat(newDog);
    setData(updatedData);
    localStorage.setItem("dogsData", JSON.stringify(updatedData));
  }

  function selectDogToEdit(dogToEdit: DogsType) {
    setSelectedDog(dogToEdit);
    setShowEditDogModal(true);
  }

  function handleEditDog(newDog: DogsType) {
    const realData: DogsType[] = JSON.parse(
      localStorage.getItem("dogsData") || "[]"
    );
    const index = realData.findIndex(
      (d) =>
        d.name === selectedDog?.name &&
        d.breed === selectedDog.breed &&
        d.owner === selectedDog.owner &&
        d.size === selectedDog.size &&
        d.description === selectedDog.description
    );

    realData[index].name = newDog.name;
    realData[index].breed = newDog.breed;
    realData[index].owner = newDog.owner;
    realData[index].size = newDog.size;
    realData[index].description = newDog.description;

    localStorage.setItem("dogsData", JSON.stringify(realData));
    setData(realData);
  }

  function selectDogToDelete(dogToDelete: DogsType) {
    setShowDeleteConfirmationModal(true);
    setSelectedDog(dogToDelete);
  }

  function handleDeleteDog() {
    const realData: DogsType[] = JSON.parse(
      localStorage.getItem("dogsData") || "[]"
    );
    const index = realData.findIndex(
      (d) =>
        d.name === selectedDog?.name &&
        d.breed === selectedDog.breed &&
        d.owner === selectedDog.owner &&
        d.size === selectedDog.size &&
        d.description === selectedDog.description
    );
    realData.splice(index, 1);
    localStorage.setItem("dogsData", JSON.stringify(realData));
    setData(realData);
    setShowSearchError(false);
    setShowDeleteConfirmationModal(false);
  }

  function handleSearchDog(searchedText: string) {
    if (searchedText === "") {
      setData(JSON.parse(localStorage.getItem("dogsData") || "[]"));
      setShowSearchError(false);
    } else {
      const result = data.filter((d) => d.name.toLowerCase() === searchedText);

      if (result.length !== 0) {
        setData(result);
        setShowSearchError(false);
      } else {
        setShowSearchError(true);
      }
    }
  }

  // Remove alert message when a user starts typing
  function removeSearchFailMessageOnTyping() {
    setShowSearchError(false);
  }

  function handleRegisterModalClose() {
    setSelectedDog(undefined);
    setShowRegisterDogModal(false);
  }

  function handleEditModalClose() {
    setSelectedDog(undefined);
    setShowEditDogModal(false);
  }

  function handleDeletedConfirmationModalClose() {
    setSelectedDog(undefined);
    setShowDeleteConfirmationModal(false);
  }

  // Disable body scrolling with active modals
  if (showRegisterDogModal || showEditDogModal || showDeleteConfirmationModal) {
    document.body.style.overflow = "hidden";
  } else {
    document.body.style.overflow = "auto";
  }

  return (
    <Container className="home">
      <Hero />
      <h2 className="home__title">Meet our fluffy advisors</h2>

      <div className="home__action-bar-container">
        <SearchBar
          onSearch={handleSearchDog}
          showError={showSearchError}
          removeError={removeSearchFailMessageOnTyping}
        />
        <Button
          className="home__add-a-dog-button"
          label="Register"
          onClick={() => setShowRegisterDogModal(true)}
        >
          <img src={PlusIcon} alt="plus" />
        </Button>
      </div>

      <div className="home__dogs-container">
        {data
          .sort((a, b) => a.name.localeCompare(b.name))
          .map((d, key) => (
            <DogCard
              key={key}
              dog={d}
              onEdit={selectDogToEdit}
              onDelete={selectDogToDelete}
            />
          ))}
      </div>

      <RegisterNewDogModal
        show={showRegisterDogModal}
        onClose={handleRegisterModalClose}
        registerNewDog={handleRegisterNewDog}
      />

      <RegisterNewDogModal
        show={showEditDogModal}
        onClose={handleEditModalClose}
        dog={selectedDog}
        updateCurrentDog={handleEditDog}
      />

      <DeleteConfirmationModal
        dog={selectedDog}
        show={showDeleteConfirmationModal}
        onDelete={handleDeleteDog}
        onClose={handleDeletedConfirmationModalClose}
      />
    </Container>
  );
}

export default Home;
