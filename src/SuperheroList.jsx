import React from "react";
import SuperheroCard from "./SuperheroCard";

function SuperheroList({
  superheroes,
  isDarkMode,
  onSuperHeroSelect,
  selectedSuperheroes,
}) {
  return (
    <div className="superhero-list">
      {superheroes.map((superhero, index) => {
        return (
          <SuperheroCard
            isDarkMode={isDarkMode}
            key={index}
            superhero={superhero}
            onSuperHeroSelect={onSuperHeroSelect}
            selectedSuperheroes={selectedSuperheroes}
          />
        );
      })}
    </div>
  );
}

export default SuperheroList;
