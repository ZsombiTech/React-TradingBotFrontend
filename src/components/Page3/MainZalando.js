import React, { Fragment } from "react";
import zalando from "../../Assets/zalandopng.png";
import Select from "react-select";
import "../../Styling/MainZalando.css";

const list = [
  { label: "Apple", value: 1 },
  { label: "Facebook", value: 2 },
  { label: "Netflix", value: 3 },
  { label: "Tesla", value: 4 },
  { label: "Amazon", value: 5 },
  { label: "Alphabet", value: 6 },
];

export default function MainZalando() {
  const customStyles2 = {
    option: (provided, state) => ({
      ...provided,
      borderBottom: "1px dotted pink",
      color: state.isSelected ? "red" : "blue",
      padding: 20,
    }),
    control: () => ({
      // none of react-select's styles are passed to <Control />
      width: 200,
    }),
    singleValue: (provided, state) => {
      const opacity = state.isDisabled ? 0.5 : 1;
      const transition = "opacity 300ms";

      return { ...provided, opacity, transition };
    },
  };
  const customStyles = {
    option: (provided, state) => ({
      ...provided,
      color: "#b4b4b4",
      padding: "1vw",
      fontSize: "1vw",
      fontFamily: "Roboto",
      fontWeight: "100",
      backgroundColor: "#101423",
    }),
    menu: () => ({
      borderRadius: "1vw",
      marginLeft: "4vw",
    }),
    placeholder: () => ({
      marginTop: "-0.4vw",
      marginLeft: "-0.3vw",
      marginBottom: "0.8vw",
    }),
    multiValue: () => ({
      display: "flex",
      width: "15vw",
      height: "2vw",
      marginLeft: "0.5vw",
      color: "#b4b4b4",
      marginBottom: "0.5vw",
      marginTop: "0.7vw",
    }),
    multiValueLabel: () => ({
      color: "#b4b4b4",
      fontFamily: "Roboto",
      fontWeight: "100",
    }),
    multiValueRemove: () => ({
      marginLeft: "1vw",
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
      width: "14vw",
      marginTop: "1.2vw",
      marginLeft: "4vw",
      marginRight: "-3vw",
      fontFamily: "Roboto",
      fontWeight: "100",
      fontSize: "1vw",
      paddingLeft: "1.2vw",
      color: "#7a7a7a",
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
            <input type="checkbox" id="switch" className="checkbox" />
            <label for="switch" className="toggle"></label>
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
              <input
                type="text"
                className="profilemaininput42"
                placeholder="Mode"
              />
              <input
                type="text"
                className="profilemaininput42"
                placeholder="Profile"
              />
            </div>
            <div className="oneline2">
              <Select
                styles={customStyles}
                options={list}
                components={{
                  DropdownIndicator: () => null,
                  IndicatorSeparator: () => null,
                  ClearIndicator: () => null,
                }}
                isSearchable={false}
                isMulti
              />
              <input
                type="text"
                className="profilemaininput42"
                placeholder="Payment method"
              />
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
