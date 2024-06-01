import React, { useState } from "react";
import { FaAngleDown } from "react-icons/fa";
import { HiOutlineUsers } from "react-icons/hi";
import "./relationDD.css";

export default function RelationDD() {
  const [dropDownMenu, dropDownState] = useState(false);
  function handleDropDownChange() {
    dropDownState(!dropDownMenu);
  } //Upon calling this function the dropdown menu will be visible

  const [dropDownValue, dropDownValueState] = useState("");
  function handleDropDownValue(event) {
    dropDownValueState(event.target.value);
    const textField = document.getElementById("service");
    textField.setAttribute("value", event.target.value);
    dropDownState(!dropDownMenu); //This line will close the drop down menu
  } //This function will set the value of bookingdata.services based on the option you choose from the dropdown menu
  return (
    <div>
      <fieldset className="pop-form-drbdwn-inp ">
        <legend className="LegRelation">Relation</legend>
        <HiOutlineUsers className="user-rlt1" size={20} />
        <div className="rlt-bar1"></div>
        <input
          type="text"
          className="pop-inp"
          name="service"
          placeholder="Select Relation"
          id="service"
        />
        <button className="pop-form-drbdwn-btn" onClick={handleDropDownChange}>
          <FaAngleDown className="drbdwn-btn-icon" />
        </button>
      </fieldset>
      {dropDownMenu ? (
        <div className="drpdwn-menu">
          <button
            className="drpdwn-menu-ops"
            value="Father"
            onClick={handleDropDownValue}
          >
            Father
          </button>
          <button
            className="drpdwn-menu-ops"
            value="Mother"
            onClick={handleDropDownValue}
          >
            Mother
          </button>
          <button
            className="drpdwn-menu-ops"
            value="Wife"
            onClick={handleDropDownValue}
          >
            Wife
          </button>
          <button
            className="drpdwn-menu-ops"
            value="Husband"
            onClick={handleDropDownValue}
          >
            Husband
          </button>
          <button
            className="drpdwn-menu-ops"
            value="Son"
            onClick={handleDropDownValue}
          >
            Son
          </button>
          <button
            className="drpdwn-menu-ops"
            value="Daughter"
            onClick={handleDropDownValue}
          >
            Daughter
          </button>
        </div>
      ) : null}
    </div>
  );
}
