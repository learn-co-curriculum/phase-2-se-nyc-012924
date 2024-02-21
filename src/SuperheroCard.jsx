function SuperheroCard({ superhero, isDarkMode }) {
  // console.log(props);
  console.log(isDarkMode);
  return (
    <div className={isDarkMode ? "superhero-card dark" : "superhero-card"}>
      {/* <p>{jerry}</p> */}
      <h3>{superhero.name}</h3>
      <p
        style={{
          color: isDarkMode ? "Orange" : "",
        }}
      >
        {superhero.group}
      </p>
      <img src={superhero.image} />
    </div>
  );
}

export default SuperheroCard;
