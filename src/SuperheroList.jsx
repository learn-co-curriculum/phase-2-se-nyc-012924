import React from "react";
import SuperheroCard from "./SuperheroCard";

function SuperheroList({ superheroes, isDarkMode }) {
  return (
    <div className="superhero-list">
      {superheroes.map((superhero, index) => {
        return (
          <SuperheroCard
            isDarkMode={isDarkMode}
            key={index}
            superhero={superhero}
          />
        );
      })}
    </div>
  );
}

export default SuperheroList;
