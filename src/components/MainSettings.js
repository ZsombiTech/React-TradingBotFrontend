import React, { Fragment } from "react";
import "../Styling/MainSettings.css";
import virag from "../Assets/luxicapng.png";
export default function MainSettings() {
  return (
    <Fragment>
      <div className="mainbackground">
        <div className="topbar">
          <img className="houseicon" src={virag} alt="House" />
          <h1 className="housetext">SETTINGS</h1>
        </div>
        <div className="maincontent34">
          <div className="discordtitle">
            <img src={virag} alt="discord" className="discordlogo" />
            <h1 className="settingspagediscordtext">Discord success webhook</h1>
          </div>
          <input
            type="text"
            className="discordwebhookinput"
            placeholder="Insert your discord success webhook here..."
          />
          <input
            type="submit"
            className="discordwebhooksubmit"
            value="Test webhook"
          />
        </div>
      </div>
    </Fragment>
  );
}
