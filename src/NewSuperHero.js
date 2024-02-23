import React from "react";

function NewSuperHero() {
  return (
    <div className="form-div">
      <form className="new-superhero-form">
        <h2>Add a new Superhero</h2>
        <input type="text" placeholder="Name" />
        <input type="text" placeholder="Group" />
        <input type="text" placeholder="Image" />
        <input type="submit" value="Add Superhero" />
      </form>
    </div>
  );
}

export default NewSuperHero;
