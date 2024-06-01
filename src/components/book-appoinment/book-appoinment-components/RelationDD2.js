import React, { useState } from "react";
import { FaAngleDown } from "react-icons/fa";
import { HiOutlineUsers } from "react-icons/hi";
import "./relationDD2.css";

export default function RelationDD2() {
  const [dropDownMenu1, dropDownState2] = useState(false);
  function handleDropDownChange1() {
    dropDownState2(!dropDownMenu1);
  } //Upon calling this function the dropdown menu will be visible

  const [dropDownValue1, dropDownValue1State2] = useState("");
  function handledropDownValue1(event) {
    dropDownValue1State2(event.target.value1);
    const textField1 = document.getElementById("service1");
    textField1.setAttribute("value2", event.target.value1);
    dropDownState2(!dropDownMenu1);
  }
  return (
    <div>
      <fieldset className="pop-form-drbdwn-inp1">
        <legend className="LegRelation1">Relation</legend>
        <HiOutlineUsers className="user-rlt11" size={20} />
        <div className="rlt-bar11"></div>
        <input
          type="text"
          className="pop-inp1"
          name="service1"
          placeholder="Select Relation"
          id="service1"
        />
        <button
          className="pop-form-drbdwn-btn1"
          onClick={handleDropDownChange1}
        >
          <FaAngleDown className="drbdwn-btn-icon1" />
        </button>
      </fieldset>
      {dropDownMenu1 ? (
        <div className="drpdwn-menu1">
          <button
            className="drpdwn-menu-ops1"
            value2="Father"
            onClick={handledropDownValue1}
          >
            Father
          </button>
          <button
            className="drpdwn-menu-ops1"
            value2="Mother"
            onClick={handledropDownValue1}
          >
            Mother
          </button>
          <button
            className="drpdwn-menu-ops1"
            value2="Wife"
            onClick={handledropDownValue1}
          >
            Wife
          </button>
          <button
            className="drpdwn-menu-ops1"
            value2="Husband"
            onClick={handledropDownValue1}
          >
            Husband
          </button>
          <button
            className="drpdwn-menu-ops1"
            value2="Son"
            onClick={handledropDownValue1}
          >
            Son
          </button>
          <button
            className="drpdwn-menu-ops1"
            value2="Daughter"
            onClick={handledropDownValue1}
          >
            Daughter
          </button>
        </div>
      ) : null}
    </div>
  );
}
