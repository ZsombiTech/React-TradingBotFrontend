import React, { Fragment } from "react";
import Navbar from "./Navbar";
import ProfileLine from "./ProfileLine";
import MainHome from "./MainHome";
export default function Home() {
  return (
    <Fragment>
      <ProfileLine />
      <Navbar />
      <MainHome />
    </Fragment>
  );
}
