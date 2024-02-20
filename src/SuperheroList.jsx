import React from "react";
import SuperheroCard from "./SuperheroCard";

function SuperheroList({ superheroes }) {
  return (
    <div className="superhero-list">
      {superheroes.map((superhero, index) => {
        return <SuperheroCard key={index} superhero={superhero} />;
      })}
    </div>
  );
}

export default SuperheroList;
