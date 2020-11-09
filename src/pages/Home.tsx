import React, { useState } from "react";
import Dogs, { DogsType } from "../data/Dogs";
import DogCard from "../components/DogCard/DogCard";
import Container from "../components/Container/Container";
import Hero from "../components/Hero/Hero";
import Button from "../components/Button/Button";
import "./Home.css";

function Home() {
  let [data, setData] = useState<DogsType[]>(Dogs);

  return (
    <Container>
      <Hero />
      <h2>Meet our fluffy friends</h2>
      <Button label="Add a friend" />
      <div className="home__dogs-container">
        {data
          .sort((a, b) => a.name.localeCompare(b.name))
          .map((d) => (
            <DogCard dog={d} />
          ))}
      </div>
    </Container>
  );
}

export default Home;
