import React, { Fragment, useState } from "react";
import { Link } from "react-router-dom";
import "../../Styling/Module.css";
import flower from "../../Assets/zalandopng.png";
import settings2 from "../../Assets/settings2.png";
export default function Module(props) {
  const [toggleon, setToggleon] = useState(true);
  const toggling = () => {
    if (toggleon) {
      setToggleon(false);
    } else {
      setToggleon(true);
    }
  };
  return (
    <Fragment>
      <div className="modulecontainer">
        <img src={flower} alt="moduleflower" className="moduleflower" />
        <div className="oneline22">
          <div className="toggleswitch22">
            <input
              type="checkbox"
              id={`switch ${props.szamlalo}`}
              className="checkbox22"
              onChange={toggling}
            />
            <label
              for={`switch ${props.szamlalo}`}
              className={toggleon ? "toggle22" : "toggle23"}
            ></label>
          </div>
          <Link to="/zalando">
            <img src={settings2} alt="settings" className="moduleflower22" />
          </Link>
        </div>
      </div>
    </Fragment>
  );
}
