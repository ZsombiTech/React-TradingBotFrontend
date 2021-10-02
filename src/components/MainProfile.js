import React, { Fragment } from "react";
import "../Styling/MainProfile.css";
import house from "../Assets/house.png";
export default function MainProfile() {
  return (
    <Fragment>
      <div className="mainbackground">
        <div className="topbar">
          <img className="houseicon" src={house} alt="House" />
          <h1 className="housetext">Profiles</h1>
        </div>
        <div className="maincontent"></div>
      </div>
    </Fragment>
  );
}
