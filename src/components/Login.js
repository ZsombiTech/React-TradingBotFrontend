import React, { Fragment } from "react";
import "../Styling/Login.css";
import flower from "../Assets/luxicapng.png";
export default function Login() {
  return (
    <Fragment>
      <div className="logincontainer">
        <img src={flower} alt="flower" className="loginflowerlogo" />
        <h1 className="loginwelcometext">Welcome back! You need to log in.</h1>
        <input
          type="text"
          className="loginlicensekey"
          placeholder="License key..."
        />
        <input type="submit" className="loginsubmitbutton" value="Login" />
      </div>
    </Fragment>
  );
}
