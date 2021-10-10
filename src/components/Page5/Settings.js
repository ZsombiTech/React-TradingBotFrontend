import React, { Fragment } from "react";
import Navbar from "../Navbar";
import ProfileLine from "../ProfileLine";
import MainSettings from "./MainSettings";

export default function Settings() {
  return (
    <Fragment>
      <ProfileLine />
      <Navbar />
      <MainSettings />
    </Fragment>
  );
}
