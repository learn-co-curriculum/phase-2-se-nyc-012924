import "./App.css";
import superheroes from "./superhero";
import SuperheroList from "./SuperheroList";
import NewSuperHero from "./NewSuperHero";
import React, { useState } from "react";

function App() {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const [selectedSuperheroes, setSelectedSuperheroes] = useState([]);

  function handleToggleTheme() {
    setIsDarkMode(!isDarkMode);
  }

  return (
    <div className={isDarkMode ? "App dark" : "App"}>
      <button onClick={handleToggleTheme} className="toggle-btn">
        Toggle theme
      </button>

      <h1 className="heading">SuperUniverse: Assemble & Conquer</h1>
      {/* {
      Excercise:
      Refractor this to a component called MyTeam 
      -> pass the selectedSuperheroes as a prop
      } */}
      <div className="my-team">
        <h2>My team:</h2>
        {selectedSuperheroes.map((superhero) => (
          <p>{superhero}</p>
        ))}
      </div>

      <SuperheroList
        onSuperHeroSelect={setSelectedSuperheroes}
        selectedSuperheroes={selectedSuperheroes}
        superheroes={superheroes}
      />

      <NewSuperHero />
    </div>
  );
}

export default App;
