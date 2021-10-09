import React, { Fragment } from "react";
import "../Styling/MainPurchases.css";
import house from "../Assets/house.png";
import PurchaseItem from "./PurchaseItem";

export default function MainPurchases() {
  return (
    <Fragment>
      <div className="mainbackground">
        <div className="topbar">
          <img className="houseicon" src={house} alt="House" />
          <h1 className="housetext">Purchases</h1>
        </div>
        <div className="maincontent">
          <div class="column41">
            <PurchaseItem />
            <PurchaseItem />
            <PurchaseItem />
            <PurchaseItem />
          </div>
          <div class="column42">
            <PurchaseItem />
            <PurchaseItem />
            <PurchaseItem />
            <PurchaseItem />
          </div>
        </div>
      </div>
    </Fragment>
  );
}
