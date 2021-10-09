import React, { Fragment } from "react";
import "../Styling/PurchaseItem.css";
import zalandologo from "../Assets/zalandopng.png";
export default function PurchaseItem() {
  return (
    <Fragment>
      <div className="fullsor">
        <img src={zalandologo} alt={zalandologo} className="zalandologo" />
        <p className="purchasename">Nike Dunk Low…</p>
        <p className="purchasemethod">PayPal</p>
        <p className="purchaseamount">EU 44</p>
      </div>
    </Fragment>
  );
}
