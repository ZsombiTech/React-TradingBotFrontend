import React, { Fragment } from "react";
import virag from "../Assets/luxicapng.png";
import profilepicture from "../Assets/Image 1.png";
import "../Styling/ProfileLine.css";
export default function ProfileLine() {
  return (
    <Fragment>
      <div className="main-background">
        <img
          src={profilepicture}
          alt="profilepicture"
          className="profilepicture"
        />
        <div className="main-texts">
          <div className="username">blockeed#0001</div>
          <div className="userstattext">(Monthly key)</div>
        </div>

        <img src={virag} alt="Flowers" className="flower-logo" />
        <div className="status-icon"></div>
        <div className="version-text">LuxicaScripts 1.0.0 (Latest)</div>
      </div>
    </Fragment>
  );
}
