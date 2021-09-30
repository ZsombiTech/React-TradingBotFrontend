import React, { Fragment } from "react";
import virag from "../Assets/virag.jpg";
import "../Styling/ProfileLine.css";
export default function ProfileLine() {
  return (
    <Fragment>
      <div className="main-background">
        <div className="profile-picture"></div>
        <div className="username">blockeed#0001</div>
        <img src={virag} alt="Flowers" className="flower-logo" />
        <div className="status-icon"></div>
        <div className="version-text">LuxicaScripts 1.0.0 (Latest)</div>
      </div>
    </Fragment>
  );
}
