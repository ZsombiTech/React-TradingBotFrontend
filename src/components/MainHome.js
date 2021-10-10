import React, { Fragment } from "react";
import { Link } from "react-router-dom";
import "../Styling/MainHome.css";
import house from "../Assets/house.png";
import zalando from "../Assets/zalandopng.png";
export default function MainHome() {
  return (
    <Fragment>
      <div className="mainbackground">
        <div className="topbar">
          <img className="houseicon" src={house} alt="House" />
          <h1 className="housetext">Home</h1>
        </div>
        <div className="maincontent">
          <div className="firstcolumn">
            <div className="changelog">Changelog</div>
            <p className="updatetext">Update 1.0.0</p>
            <div className="log1">
              <p className="log1text">- New graphical user interface</p>
              <p className="log1text2">- Zalando improvements</p>
              <p className="log1text3">- Profile tab fixes</p>
            </div>
            <p className="updatetext">Update 0.2.245</p>

            <div className="log1">
              <p className="log1text">- Snipes ATC fixes</p>
              <p className="log1text2">- Solebox Checkout page fixes</p>
              <p className="log1text3">- Size selector added</p>
            </div>
          </div>
          <div className="secondcolumn">
            <div className="changelog">Information</div>
            <div className="informationbuttons">
              <div className="greenbutton">
                <h1 className="greentext">245</h1>
                <h2 className="greentext2">Checkouts</h2>
              </div>
              <Link to="/zalando" className="maintextslink">
                <div className="purplebutton">
                  <img className="purpleimg" src={zalando} alt="zalando" />
                  <h1 className="purpletext">FAV MODULE</h1>
                </div>
              </Link>

              <div className="bluebutton">
                <h1 className="bluetext">€15812</h1>
                <h2 className="bluetext2">MONEY SPENT</h2>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
}
