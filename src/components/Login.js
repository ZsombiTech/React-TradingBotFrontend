import React, { Fragment } from "react";
import "../Styling/Login.css";
import { Link } from "react-router-dom";
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
        <Link to="/home">
          <input type="submit" className="loginsubmitbutton" value="Login" />
        </Link>
      </div>
    </Fragment>
  );
}
