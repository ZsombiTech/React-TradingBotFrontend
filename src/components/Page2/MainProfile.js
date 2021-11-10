import React, { Fragment } from "react";
import "../../Styling/MainProfile.css";
import creditcard from "../../Assets/creditcard.png";
import Select from "react-select";
export default function MainProfile() {
  return (
    <Fragment>
      <div className="mainbackground">
        <div className="topbar">
          <img className="mainprofiletopicon" src={creditcard} alt="House" />
          <h1 className="housetext">Profiles</h1>
        </div>
        <div className="maincontent">
          <div className="column1">
            <div class="select-wrapper">
              <select name="profiless" className="profilemaininput">
                <option value="profile#1">Profile#1</option>
                <option value="profile#2">Profile#2</option>
                <option value="profile#3">Profile#3</option>
                <option value="profile#4">Profile#4</option>
                <option value="profile#">Profile#5</option>
              </select>
            </div>

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
              type="text"
              className="profilemaininput3"
              placeholder="Credit card number"
            />
            <div className="oneline">
              <input
                type="text"
                className="profilemaininput4"
                placeholder="MM"
                maxLength="2"
                pattern="[0-9]|[0-9]"
                name="MM"
                inputmode="numeric"
              />
              <input
                type="text"
                className="profilemaininput4"
                placeholder="YYYY"
                maxLength="4"
                pattern="[0-9]|[0-9]|[0-9]|[0-9]"
                name="YYYY"
                inputmode="numeric"
              />
            </div>
            <input
              type="text"
              className="profilemaininput3"
              placeholder="CVV"
              maxLength="4"
              pattern="[0-9]|[0-9]|[0-9]|[0-9]"
              name="cvv"
              inputmode="numeric"
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
              type="text"
              className="profilemaininput5"
              placeholder="Zip code"
              name="zip"
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
