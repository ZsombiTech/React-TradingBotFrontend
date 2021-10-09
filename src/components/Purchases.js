import React, { Fragment } from "react";
import MainPurchases from "./MainPurchases";
import Navbar from "./Navbar";
import ProfileLine from "./ProfileLine";

export default function Purchases() {
  return (
    <Fragment>
      <ProfileLine />
      <Navbar />
      <MainPurchases />
    </Fragment>
  );
}
