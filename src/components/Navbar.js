import React, { Fragment } from "react";
import "../Styling/Navbar.css";
import house from "../Assets/house.png";

export default function Navbar() {
  return (
    <Fragment>
      <div className="navbar">
        <div className="homeiconbox">
          <img className="homeicon" src={house} alt="Home" />
        </div>
        <div className="fileiconbox">
          <img className="homeicon" src={house} alt="Home" />
        </div>
        <div className="runningiconbox">
          <img className="homeicon" src={house} alt="Home" />
        </div>
        <div className="bagiconbox">
          <img className="homeicon" src={house} alt="Home" />
        </div>
        <div className="settingsiconbox">
          <img className="homeicon" src={house} alt="Home" />
        </div>
      </div>
    </Fragment>
  );
}
