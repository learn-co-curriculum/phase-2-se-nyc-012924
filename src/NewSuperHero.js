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
    // setSuperheroList([...superheroList, newSuperhero]);
    fetch("http://localhost:4000/superheroes", {
      method: "POST",
      headers: {
        "content-type": "Application/json",
      },
      body: JSON.stringify(newSuperhero),
    })
      .then((res) => res.json())
      .then((data) => setSuperheroList([...superheroList, data]));
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
    </div>
  );
}

export default NewSuperHero;
