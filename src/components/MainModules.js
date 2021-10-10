import React, { Fragment } from "react";
import "../Styling/MainModules.css";
import shoes from "../Assets/shoespng.png";
import Module from "./Module";
export default function MainModules() {
  const szamlalo = 0;
  return (
    <Fragment>
      <div className="mainbackground">
        <div className="topbar">
          <img className="mainmodulestopicon" src={shoes} alt="House" />
          <h1 className="housetext">Modules</h1>
        </div>
        <div className="maincontent">
          <div className="column19">
            <Module szamlalo={szamlalo} />
            <Module szamlalo={szamlalo + 1} />
          </div>
          <div className="column29">
            <Module szamlalo={szamlalo + 2} />
            <Module szamlalo={szamlalo + 3} />
          </div>
          <div className="column39">
            <Module szamlalo={szamlalo + 4} />
            <Module szamlalo={szamlalo + 5} />
          </div>
          <div className="column49">
            <Module szamlalo={szamlalo + 6} />
            <Module szamlalo={szamlalo + 7} />
          </div>
        </div>
      </div>
    </Fragment>
  );
}
