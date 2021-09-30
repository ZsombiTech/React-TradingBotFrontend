import React, { Fragment } from "react";

export default function Navbar() {
  return (
    <Fragment>
      <div className="navbar">
        <div className="home-icon-box"></div>
        <div className="file-icon-box"></div>
        <div className="running-icon-box"></div>
        <div className="bag-icon-box"></div>
        <div className="settings-icon-box"></div>
      </div>
    </Fragment>
  );
}
