function SuperheroCard({ superhero, jerry }) {
  // console.log(props);
  return (
    <div className="superhero-card">
      <p>{jerry}</p>
      <h3>{superhero.name}</h3>
      <p>{superhero.group}</p>
      <img src={superhero.image} />
    </div>
  );
}

export default SuperheroCard;
