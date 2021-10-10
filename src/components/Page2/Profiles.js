import React, { Fragment } from "react";
import Navbar from "../Navbar";
import ProfileLine from "../ProfileLine";
import MainProfile from "./MainProfile";
export default function Profiles() {
  return (
    <Fragment>
      <ProfileLine />
      <Navbar />
      <MainProfile />
    </Fragment>
  );
}
