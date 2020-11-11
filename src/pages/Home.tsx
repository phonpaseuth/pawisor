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
import Filter from "../components/Filter/Filter";
import "./Home.css";

function Home() {
  const [data, setData] = useState<DogsType[]>(
    JSON.parse(localStorage.getItem("dogsData") || "[]")
  );
  const [showRegisterDogModal, setShowRegisterDogModal] = useState<boolean>(
    false
  );
  const [showEditDogModal, setShowEditDogModal] = useState<boolean>(false);
  const [
    showDeleteConfirmationModal,
    setShowDeleteConfirmationModal,
  ] = useState<boolean>(false);
  const [selectedDog, setSelectedDog] = useState<DogsType | undefined>(
    undefined
  );
  const [showSearchError, setShowSearchError] = useState<boolean>(false);
  const [sortOption, setSortOption] = useState<string>("Ascending");

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

  function handleSortOptionSelect(option: string) {
    if (option === "Ascending") {
      setSortOption("Ascending");
    } else {
      setSortOption("Descending");
    }
  }

  if (sortOption === "Ascending") {
    data.sort((a, b) => a.name.localeCompare(b.name));
  } else {
    data.sort((a, b) => b.name.localeCompare(a.name));
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
        <Filter sortOption={sortOption} onSelect={handleSortOptionSelect} />
        <Button
          className="home__add-a-dog-button"
          label="Register"
          onClick={() => setShowRegisterDogModal(true)}
        >
          <img src={PlusIcon} alt="plus" />
        </Button>
      </div>

      <div className="home__dogs-container">
        {data.map((d, key) => (
          <DogCard
            key={key + d.name}
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
