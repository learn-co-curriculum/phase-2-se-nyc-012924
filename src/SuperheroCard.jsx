import { useState } from "react";

function SuperheroCard({ superhero, onSuperHeroSelect, selectedSuperheroes }) {
  const [isSelected, setIsSelected] = useState(false);

  function handleSelect() {
    if (!isSelected) {
      let newSuperheroList = [...selectedSuperheroes, superhero.name];
      onSuperHeroSelect(newSuperheroList);
    } else {
      console.log("Unselecting");
      let filteredSuperheroes = selectedSuperheroes.filter(
        (hero) => superhero.name !== hero
      );
      onSuperHeroSelect(filteredSuperheroes);
    }
    setIsSelected(!isSelected);
  }
  return (
    <div
      style={{
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.2)), url(${superhero.image})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
      className={isSelected ? "superhero-card selected" : "superhero-card"}
    >
      {/* <img src={superhero.image} /> */}
      <h3>{superhero.name}</h3>
      <p>{superhero.group}</p>
      <p id="description">{superhero.description}</p>
      <button onClick={handleSelect}>
        {isSelected ? "Added ✅" : "Add to team"}
      </button>
    </div>
  );
}

export default SuperheroCard;
