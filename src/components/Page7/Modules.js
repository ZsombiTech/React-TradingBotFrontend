import React, { Fragment } from "react";
import Navbar from "../Navbar";
import ProfileLine from "../ProfileLine";
import MainModules from "./MainModules";
export default function Modules() {
  return (
    <Fragment>
      <ProfileLine />
      <Navbar />
      <MainModules />
    </Fragment>
  );
}
