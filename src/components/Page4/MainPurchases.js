import React, { Fragment } from "react";
import "../../Styling/MainPurchases.css";
import creditcard from "../../Assets/creditcard.png";
import PurchaseItem from "./PurchaseItem";

export default function MainPurchases() {
  return (
    <Fragment>
      <div className="mainbackground">
        <div className="topbar">
          <img className="mainpurchasestopicon" src={creditcard} alt="House" />
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
