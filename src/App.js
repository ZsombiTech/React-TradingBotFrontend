import "./App.css";
import Home from "./components/Page1/Home";
import moon from "./Assets/moon.png";
import Profiles from "./components/Page2/Profiles";
import Zalando from "./components/Page3/Zalando";
import Purchases from "./components/Page4/Purchases";
import Settings from "./components/Page5/Settings";
import Login from "./components/Page6/Login";
import Modules from "./components/Page7/Modules";
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
