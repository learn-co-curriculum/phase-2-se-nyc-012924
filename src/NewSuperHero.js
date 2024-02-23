import React, { useState } from "react";

function NewSuperHero({ superheroList, setSuperheroList }) {
  const [name, setName] = useState("");
  const [group, setGroup] = useState("");
  const [image, setImage] = useState("");

  const [error, setError] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    console.log("Form submitted!");
    let newSuperhero = { name, group, image };
    console.log(newSuperhero);

    if (name.length >= 3 && group.length >= 2) {
      setSuperheroList([...superheroList, newSuperhero]);
      setError("");
    } else {
      setError(
        "Name must be 3 characters and group must be at least 2 characters"
      );
    }
  }

  function handleName(e) {
    setName(e.target.value);
  }

  return (
    <div className="form-div">
      <form onSubmit={handleSubmit} className="new-superhero-form">
        <h2>Add a new Superhero</h2>
        <input
          onChange={handleName}
          type="text"
          placeholder="Name"
          value={name}
          required
        />
        <input
          onChange={(e) => {
            setGroup(e.target.value);
          }}
          type="text"
          placeholder="Group"
          value={group}
          required
        />
        <input
          onChange={(e) => {
            setImage(e.target.value);
          }}
          type="text"
          placeholder="Image"
          value={image}
          required
        />
        <input type="submit" value="Add Superhero" />
      </form>

      <p>{error}</p>
    </div>
  );
}

export default NewSuperHero;
