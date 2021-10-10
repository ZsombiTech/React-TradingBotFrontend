import React, { Fragment } from "react";
import { Link } from "react-router-dom";
import "../Styling/Navbar.css";
import house from "../Assets/house.png";
import shoespng from "../Assets/shoespng.png";
import bag from "../Assets/bag.png";
import creditcard from "../Assets/creditcard.png";
import settings from "../Assets/settings.png";

export default function Navbar() {
  return (
    <Fragment>
      <div className="navbar">
        <div className="homeiconbox">
          <Link to="/home">
            <img className="homeicon" src={house} alt="Home" />
          </Link>
        </div>
        <div className="fileiconbox">
          <Link to="/profiles">
            <img className="crediticon" src={creditcard} alt="Creditcard" />
          </Link>
        </div>
        <div className="runningiconbox">
          <Link to="/modules">
            <img className="shoes" src={shoespng} alt="Shoes" />
          </Link>
        </div>
        <div className="bagiconbox">
          <Link to="/purchases">
            <img className="bagicon" src={bag} alt="Bag" />
          </Link>
        </div>
        <div className="settingsiconbox">
          <Link to="/settings">
            <img className="settingsicon" src={settings} alt="Settings" />
          </Link>
        </div>
      </div>
    </Fragment>
  );
}
