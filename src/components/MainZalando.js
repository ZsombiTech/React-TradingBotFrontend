import React, { Fragment } from "react";
import zalando from "../Assets/zalando.png";
import "../Styling/MainZalando.css";
export default function MainZalando() {
  return (
    <Fragment>
      <div className="mainbackground">
        <div className="topbar">
          <img className="houseicon2" src={zalando} alt="House" />
          <div className="toggleswitch">
            <input type="checkbox" id="switch" className="checkbox" />
            <label for="switch" className="toggle"></label>
          </div>
        </div>
        <div className="maincontent">
          <div className="column1">
            <input
              type="submit"
              className="submitbutton"
              value="Save changes"
            />
            <h1 className="housetext2">Task settings</h1>
            <div className="oneline">
              <input
                type="text"
                className="profilemaininput42"
                placeholder="Mode"
              />
              <input
                type="text"
                className="profilemaininput42"
                placeholder="Profile"
              />
            </div>
            <div className="oneline2">
              <input
                type="number"
                className="profilemaininput42"
                placeholder="Select size"
              />
              <input
                type="text"
                className="profilemaininput42"
                placeholder="Payment method"
              />
            </div>
          </div>
          <div className="column2">
            <h1 className="housetext2">Preload (optional)</h1>
            <input
              type="text"
              className="profilemaininput423"
              placeholder="Preload link"
            />

            <div className="oneline2">
              <input
                type="number"
                className="profilemaininput42"
                placeholder="Region (e.g. DE)"
              />
              <input
                type="submit"
                className="submitbutton"
                value="Start preload"
              />
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
}
