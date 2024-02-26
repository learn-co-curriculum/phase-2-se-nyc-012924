import React from "react";

function MyTeam({ selectedSuperheroes }) {
  return (
    <div>
      <h2>My team:</h2>
      <div className="my-team">
        {selectedSuperheroes.map((superhero) => (
          <p key={superhero.name}>{superhero}</p>
        ))}
      </div>
    </div>
  );
}

export default MyTeam;
