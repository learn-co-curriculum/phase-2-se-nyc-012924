import "./App.css";
import superheroes from "./superhero";
import SuperheroList from "./SuperheroList";

function App() {
  return (
    <div className="App">
      <div className="counter">
        <h1>0</h1>
        <button>Increment</button>
        <button>Decrement</button>
      </div>
      <button className="toggle-btn">Toggle theme</button>

      {/* <h1 className="heading">SuperUniverse: Assemble & Conquer</h1>
      <SuperheroList superheroes={superheroes} /> */}
    </div>
  );
}

export default App;
