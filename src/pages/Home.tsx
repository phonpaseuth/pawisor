import React, { useState } from "react";
import Dogs, { DogsType } from "../data/Dogs";
import DogCard from "../components/DogCard/DogCard";
import Container from "../components/Container/Container";
import RegisterNewDogModal from "../components/Modal/RegisterNewDogModal/RegisterNewDogModal";
import DeleteConfirmationModal from "../components/Modal/DeleteConfirmationModal/DeleteConfirmationModal";
import Button from "../components/Button/Button";
import Hero from "../components/Hero/Hero";
import "./Home.css";

function Home() {
  let [data, setData] = useState<DogsType[]>(
    JSON.parse(localStorage.getItem("dogsData") || "[]")
  );
  let [showRegisterDogModal, setShowRegisterDogModal] = useState<boolean>(
    false
  );
  let [showDeleteConfirmationModal, setShowDeleteConfirmationModal] = useState<
    boolean
  >(false);
  let [selectedDog, setSelectedDog] = useState<DogsType | undefined>(undefined);

  // Save data to local storage on first run
  if (data.length === 0) {
    console.log("Saving to local storage");
    setData(Dogs);
    localStorage.setItem("dogsData", JSON.stringify(Dogs));
  }

  function handleRegisterNewDog(newDog: DogsType) {
    const updatedData = data.concat(newDog);
    setData(updatedData);
    localStorage.setItem("dogsData", JSON.stringify(updatedData));
  }

  function selectDogToDelete(dogToDelete: DogsType) {
    setShowDeleteConfirmationModal(true);
    setSelectedDog(dogToDelete);
  }

  function handleDeleteDog() {
    const index = data.findIndex(
      (d) =>
        d.name === selectedDog?.name &&
        d.breed === selectedDog.breed &&
        d.owner === selectedDog.owner &&
        d.size === selectedDog.size &&
        d.description === selectedDog.description
    );
    data.splice(index, 1);
    localStorage.setItem("dogsData", JSON.stringify(data));
    setShowDeleteConfirmationModal(false);
  }

  return (
    <Container className="home">
      <Hero />
      <h2 className="home__title">Meet our most trusted advisors</h2>
      <Button
        label="Recommend an advisor"
        onClick={() => setShowRegisterDogModal(true)}
      />

      <div className="home__dogs-container">
        {data
          .sort((a, b) => a.name.localeCompare(b.name))
          .map((d, key) => (
            <DogCard key={key} dog={d} onDelete={selectDogToDelete} />
          ))}
      </div>

      <RegisterNewDogModal
        show={showRegisterDogModal}
        onClose={() => setShowRegisterDogModal(false)}
        registerNewDog={handleRegisterNewDog}
      />

      <DeleteConfirmationModal
        dog={selectedDog}
        show={showDeleteConfirmationModal}
        onDelete={handleDeleteDog}
        onClose={() => setShowDeleteConfirmationModal(false)}
      />
    </Container>
  );
}

export default Home;
