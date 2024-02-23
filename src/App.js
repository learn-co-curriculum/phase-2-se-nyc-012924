import "./App.css";
import superheroes from "./superhero";
import SuperheroList from "./SuperheroList";
import NewSuperHero from "./NewSuperHero";
import MyTeam from "./MyTeam";
import Search from "./Search";
import React, { useState } from "react";

function App() {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const [selectedSuperheroes, setSelectedSuperheroes] = useState([]);

  const [superheroList, setSuperheroList] = useState(superheroes);

  function handleToggleTheme() {
    setIsDarkMode(!isDarkMode);
  }

  return (
    <div className={isDarkMode ? "App dark" : "App"}>
      <button onClick={handleToggleTheme} className="toggle-btn">
        Toggle theme
      </button>

      <h1 className="heading">SuperUniverse: Assemble & Conquer</h1>

      <Search />

      <SuperheroList
        onSuperHeroSelect={setSelectedSuperheroes}
        selectedSuperheroes={selectedSuperheroes}
        superheroes={superheroList}
      />

      <MyTeam selectedSuperheroes={selectedSuperheroes} />
      <NewSuperHero
        superheroList={superheroList}
        setSuperheroList={setSuperheroList}
      />
    </div>
  );
}

export default App;
