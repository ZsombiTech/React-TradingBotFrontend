import React, { Fragment, useState } from "react";
import zalando from "../../Assets/zalandopng.png";
import Select from "react-select";
import "../../Styling/MainZalando.css";

const listMode = [
  { label: "Random1", value: 1 },
  { label: "Random2", value: 2 },
  { label: "Random3", value: 3 },
];
const listProfile = [
  { label: "Random12", value: 1 },
  { label: "Random22", value: 2 },
  { label: "Random32", value: 3 },
];
const listSize = [
  { label: "Small", value: 1 },
  { label: "Medium", value: 2 },
  { label: "Large", value: 3 },
  { label: "XLarge", value: 4 },
  { label: "XLL Large", value: 5 },
];
const listPayment = [
  { label: "Bank Card", value: 1 },
  { label: "PayPal", value: 2 },
  { label: "Bitcoin", value: 3 },
];

export default function MainZalando() {
  const [toggleon, setToggleon] = useState(true);
  const toggling = () => {
    if (toggleon) {
      setToggleon(false);
    } else {
      setToggleon(true);
    }
  };
  const customStyles = {
    option: (provided, state) => ({
      ...provided,
      color: "#b4b4b4",
      padding: "1vw",
      fontSize: "1vw",
      fontFamily: "Roboto",
      fontWeight: "300",
      backgroundColor: "#101423",
    }),
    menu: () => ({
      marginLeft: "4vw",
      width: "12vw",
    }),
    dropdownIndicator: () => ({
      display: "none",
      padding: 0,
      marginRight: "0.5vw",
    }),
    placeholder: () => ({
      fontFamily: "Roboto",
      fontWeight: "300",
      marginTop: "-0.4vw",
      marginLeft: "-0.3vw",
      marginBottom: "0.8vw",
    }),
    multiValue: () => ({
      lineHeight: "1vw",
      display: "flex",
      flexDirection: "row",
      fontSize: "0.8vw",
      marginLeft: "0.3vw",
    }),
    multiValueLabel: () => ({
      lineHeight: "1vw",
      color: "#b4b4b4",
      fontFamily: "Roboto",
      fontWeight: "300",
    }),
    multiValueRemove: () => ({
      marginLeft: "0.1vw",
      marginTop: "0.1vw",
    }),
    control: () => ({
      display: "flex",
      flexDirection: "row",
      flexWrap: "wrap",
      backgroundColor: "#101423",
      border: "0.1vw solid #8e44ad",
      borderRadius: "1vw",
      lineHeight: "1vw",
      maxHeight: "20vw",
      width: "12vw",
      marginTop: "1.5vw",
      marginLeft: "4vw",
      fontFamily: "Roboto",
      fontWeight: "300",
      fontSize: "1vw",
      paddingLeft: "1.2vw",
      color: "#7a7a7a",
      minHeight: "3vw",
    }),

    singleValue: (provided, state) => {
      const opacity = state.isDisabled ? 0.5 : 1;
      const transition = "opacity 300ms";

      return { ...provided, opacity, transition };
    },
  };

  return (
    <Fragment>
      <div className="mainbackground">
        <div className="topbar">
          <img className="mainzalandotopicon" src={zalando} alt="House" />
          <div className="toggleswitch">
            <input
              type="checkbox"
              id="switch"
              className="checkbox"
              onChange={toggling}
            />
            <label
              for="switch"
              className={toggleon ? "toggle" : "toggle2"}
            ></label>
          </div>
        </div>
        <div className="maincontent">
          <div className="column13">
            <input
              type="submit"
              className="submitbutton"
              value="Save changes"
            />
            <h1 className="housetext2">Task settings</h1>
            <div className="oneline">
              <div class="select-wrapper41">
                <select
                  name="profiless"
                  className="profilemaininput41"
                  required
                >
                  <option value="" disabled selected>
                    Mode
                  </option>
                  <option value="profile#2">Profile#2</option>
                  <option value="profile#3">Profile#3</option>
                  <option value="profile#4">Profile#4</option>
                  <option value="profile#5">Profile#5</option>
                </select>
              </div>
              <div class="select-wrapper411">
                <select
                  name="profiless"
                  className="profilemaininput411"
                  required
                >
                  <option value="" disabled selected>
                    Profile
                  </option>
                  <option value="profile#2">Profile#2</option>
                  <option value="profile#3">Profile#3</option>
                  <option value="profile#4">Profile#4</option>
                  <option value="profile#5">Profile#5</option>
                </select>
              </div>
            </div>
            <div className="oneline2">
              <div class="select-wrapper41">
                <Select
                  placeholder={"Select size"}
                  styles={customStyles}
                  options={listSize}
                  components={{
                    IndicatorSeparator: () => null,
                    ClearIndicator: () => null,
                  }}
                  isSearchable={false}
                  className="basic-multi-select"
                  classNamePrefix="select"
                  isMulti
                />
              </div>
              <div class="select-wrapper411">
                <select
                  name="profiless"
                  className="profilemaininput411"
                  required
                >
                  <option value="" disabled selected>
                    Payment method
                  </option>
                  <option value="profile#2">Paypal</option>
                  <option value="profile#3">BankCard</option>
                  <option value="profile#4">BTC</option>
                  <option value="profile#5">LOL</option>
                </select>
              </div>
            </div>
          </div>
          <div className="column23">
            <h1 className="housetext2">Preload (optional)</h1>
            <input
              type="text"
              className="profilemaininput423"
              placeholder="Preload link"
            />

            <div className="oneline2">
              <input
                type="text"
                className="profilemaininput42"
                placeholder="Region (e.g. DE)"
              />
              <input
                type="submit"
                className="submitbutton"
                value="Start preload"
              />
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
}
