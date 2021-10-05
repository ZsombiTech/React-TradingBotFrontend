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
        <div className="maincontent">
          <div className="column1">
            <input
              type="text"
              className="profilemaininput"
              placeholder="Profile #1"
              disabled
            />
            <h1 className="information">Information</h1>
            <input
              type="text"
              className="profilemaininput3"
              placeholder="Profile name"
            />
            <input
              type="email"
              className="profilemaininput2"
              placeholder="Email address"
            />
            <input
              type="number"
              className="profilemaininput2"
              placeholder="Phone number"
            />
            <h1 className="information">Payment</h1>
            <input
              type="number"
              className="profilemaininput3"
              placeholder="Credit card number"
            />
            <div className="oneline">
              <input
                type="number"
                className="profilemaininput4"
                placeholder="MM"
              />
              <input
                type="number"
                className="profilemaininput4"
                placeholder="YYYY"
              />
            </div>
            <input
              type="number"
              className="profilemaininput3"
              placeholder="CVV"
            />
          </div>
          <div className="column2">
            <input
              type="submit"
              className="profilecreatenew"
              value="Create new"
            />
            <h1 className="information">Shipping information</h1>
            <input
              type="text"
              className="profilemaininput6"
              placeholder="First Name"
            />
            <input
              type="text"
              className="profilemaininput5"
              placeholder="Last Name"
            />
            <input
              type="text"
              className="profilemaininput5"
              placeholder="Country Code (e.g. DE)"
            />
            <input
              type="number"
              className="profilemaininput5"
              placeholder="Zip code"
            />
            <input
              type="number"
              className="profilemaininput5"
              placeholder="Phone number"
            />
            <input
              type="text"
              className="profilemaininput5"
              placeholder="City"
            />
            <input
              type="text"
              className="profilemaininput5"
              placeholder="Street"
            />
            <input
              type="text"
              className="profilemaininput5"
              placeholder="House number"
            />
          </div>
          <div className="column3">
            <input
              type="submit"
              className="profilesavechanges"
              value="Save changes"
            />
            <h1 className="information">Billing information</h1>
            <input
              type="text"
              className="profilemaininput6"
              placeholder="First Name"
            />
            <input
              type="text"
              className="profilemaininput5"
              placeholder="Last Name"
            />
            <input
              type="text"
              className="profilemaininput5"
              placeholder="Country Code (e.g. DE)"
            />
            <input
              type="number"
              className="profilemaininput5"
              placeholder="Zip code"
            />
            <input
              type="number"
              className="profilemaininput5"
              placeholder="Phone number"
            />
            <input
              type="text"
              className="profilemaininput5"
              placeholder="City"
            />
            <input
              type="text"
              className="profilemaininput5"
              placeholder="Street"
            />
            <input
              type="text"
              className="profilemaininput5"
              placeholder="House number"
            />
          </div>
        </div>
      </div>
    </Fragment>
  );
}

/*
 
          */
