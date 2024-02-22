import { useState } from "react";

function SuperheroCard({
  superhero,
  isDarkMode,
  onSuperHeroSelect,
  selectedSuperheroes,
}) {
  const [isSelected, setIsSelected] = useState(false);

  function handleSelect() {
    if (!isSelected) {
      let newSuperheroList = [superhero.name, ...selectedSuperheroes];
      onSuperHeroSelect(newSuperheroList);
    } else {
      console.log("Unselecting");

      let filteredSuperheroes = selectedSuperheroes.filter(
        (hero) => superhero.name !== hero
      );

      console.log(filteredSuperheroes);
      onSuperHeroSelect(filteredSuperheroes);
    }
    setIsSelected(!isSelected);
  }
  // console.log(props);
  // console.log(isDarkMode);
  return (
    <div className={isSelected ? "superhero-card selected" : "superhero-card"}>
      {/* <p>{jerry}</p> */}
      <img src={superhero.image} />
      <h3>{superhero.name}</h3>
      <p
        style={{
          color: isDarkMode ? "Orange" : "",
        }}
      >
        {superhero.group}
      </p>
      <button onClick={handleSelect}>
        {isSelected ? "Added ✅" : "Add to team"}
      </button>
    </div>
  );
}

export default SuperheroCard;
