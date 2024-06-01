import React from "react";
import "./othersInputField.css";

export default function OthersInputField(props) {
  return (
    <fieldset className="others-div">
      <legend align="left">Others</legend>
      <input className="input-field" placeholder="Comments"></input>
    </fieldset>
  );
}
