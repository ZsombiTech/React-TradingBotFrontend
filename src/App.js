import "./App.css";
import Home from "./components/Home";
import moon from "./Assets/moon.png";
import Profiles from "./components/Profiles";
import Zalando from "./components/Zalando";
import Purchases from "./components/Purchases";
import Settings from "./components/Settings";
import Login from "./components/Login";
import Modules from "./components/Modules";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
function App() {
  return (
    <Router>
      <div className="App">
        <img className="moon1" src={moon} alt="Moon picture" />
        <img className="moon2" src={moon} alt="Moon picture" />
        <Switch>
          <Route exact path="/">
            <Login />
          </Route>
          <Route path="/profiles">
            <Profiles />
          </Route>
          <Route path="/zalando">
            <Zalando />
          </Route>
          <Route path="/purchases">
            <Purchases />
          </Route>
          <Route path="/settings">
            <Settings />
          </Route>
          <Route path="/home">
            <Home />
          </Route>
          <Route path="/modules">
            <Modules />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
