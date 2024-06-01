import "./radioButton.css";
import React, { useState } from "react";
import { FaGamepad } from "react-icons/fa";
import OthersInputField from "./inputfield";

export default function RadioButton(props) {
  return (
    <>
      <label className="radioButton" for={props.title}>
        <input
          type="radio"
          className="input-button"
          id={props.title}
          name="radio"
          value={props.value}
          onClick={props.onClick}
          checked={props.checked}
        />
        <label className="buttonlabel" for={props.title}>
          <div className="name">
            {/* pass a image source and it will be placed in the place of props.img*/}
            <img src={props.img} className="icon" />
            <p>{props.title}</p>
          </div>
        </label>
      </label>
    </>
  );
}
