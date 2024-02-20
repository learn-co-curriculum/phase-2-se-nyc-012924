import "./App.css";
import SuperheroCard from "./SuperheroCard.jsx";

const superheroes = [
  {
    name: "Batman",
    image:
      "https://digitalheroes.com/cdn/shop/products/STL153767_1024x1024.jpg?v=1605814705",
    group: "DC Comics",
  },
  {
    name: "Superman",
    image: "https://upload.wikimedia.org/wikipedia/en/3/35/Supermanflying.png",
    group: "DC Comics",
  },
  {
    name: "Wonder Woman",
    image: "https://static.tvtropes.org/pmwiki/pub/images/ww_1.png",
    group: "DC Comics",
  },

  {
    name: "Ant Man",
    image:
      "https://static.wikia.nocookie.net/marveldatabase/images/6/66/Henry_Pym_%28Earth-616%29_from_Avengers_Origins_Ant-Man_%26_the_Wasp_Vol_1_1_001.jpg/revision/latest?cb=20140819221923",
    group: "Marvel",
  },

  {
    name: "Omni Man",
    image:
      "https://media.distractify.com/brand-img/xqcM5sjK-/0x0/omniman-1616790676506.jpg",
    group: "Marvel",
  },
];

function App() {
  const renderSuperheroes = superheroes.map((superheroObj) => {
    return (
      <SuperheroCard
        key={superheroObj.name}
        superhero={superheroObj}
        jerry={"Something"}
      />
    );
  });

  return (
    <div className="App">
      <h1>My Superhero App</h1>

      <div className="superhero-list">{renderSuperheroes}</div>
    </div>
  );
}

export default App;

// create a SuperheroList component which should be the child of app
// pass the superheroes list to the component as prop
// map over the list and render SuperheroCard
