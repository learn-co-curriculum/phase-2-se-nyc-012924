function SuperheroCard({ superhero, isDarkMode }) {
  // console.log(props);
  console.log(isDarkMode);
  return (
    <div className="superhero-card">
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
      <button>Add to Team</button>
    </div>
  );
}

export default SuperheroCard;
