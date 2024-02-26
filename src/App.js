import "./App.css";
import SuperheroList from "./SuperheroList";
import NewSuperHero from "./NewSuperHero";
import MyTeam from "./MyTeam";
import Search from "./Search";
import React, { useState, useEffect } from "react";

function App() {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const [selectedSuperheroes, setSelectedSuperheroes] = useState([]);

  const [superheroList, setSuperheroList] = useState([]);

  function handleToggleTheme() {
    setIsDarkMode(!isDarkMode);
  }

  useEffect(() => {
    fetch("http://localhost:4000/superheroes")
      .then((res) => res.json())
      .then((data) => setSuperheroList(data));
  }, []);

  // [] => it will only run once after the rendering of the application
  // no dependency => keep running if there's a slight change in the DOM
  // [state] => it will run once the state is updated

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
