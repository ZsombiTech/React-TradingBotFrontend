import "./App.css";
import Home from "./components/Home";
import moon from "./Assets/moon.png";
function App() {
  return (
    <div className="App">
      <img className="moon1" src={moon} alt="Moon picture" />
      <img className="moon2" src={moon} alt="Moon picture" />
      <Home />
    </div>
  );
}

export default App;
