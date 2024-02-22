import "./App.css";
import superheroes from "./superhero";
import SuperheroList from "./SuperheroList";

import React, { useState } from "react";

function App() {
  //     variable  function
  const [count, setCount] = useState(0);
  const [isDarkMode, setIsDarkMode] = useState(false);

  const [selectedSuperheroes, setSelectedSuperheroes] = useState([]);

  // const selectedSuperheroes = ["Spiderman", "Ironman"];
  // let count = 10;

  function handleClick() {
    console.log("Button clicked!!");
    setCount(count + 1);
    console.log(count);
  }

  function handleDecrement() {
    if (count <= 0) {
      setCount(0);
      alert("Can't be negative");
    } else {
      setCount(count - 1);
    }
  }

  function handleToggleTheme() {
    setIsDarkMode(!isDarkMode);
    // setSelectedSuperheroes([...selectedSuperheroes, "Ironman"]);
  }

  return (
    <div className={isDarkMode ? "App dark" : "App"}>
      {/* <div className="counter">
        <h1>{count}</h1>
        <button onClick={handleClick}>Increment</button>
        <button onClick={handleDecrement}>Decrement</button>
      </div> */}
      <button onClick={handleToggleTheme} className="toggle-btn">
        Toggle theme
      </button>

      <h1 className="heading">SuperUniverse: Assemble & Conquer</h1>

      <div className="my-team">
        <h2>My team:</h2>
        {selectedSuperheroes.map((superhero) => (
          <p>{superhero}</p>
        ))}
      </div>

      <SuperheroList
        onSuperHeroSelect={setSelectedSuperheroes}
        selectedSuperheroes={selectedSuperheroes}
        isDarkMode={isDarkMode}
        superheroes={superheroes}
      />
    </div>
  );
}

export default App;
