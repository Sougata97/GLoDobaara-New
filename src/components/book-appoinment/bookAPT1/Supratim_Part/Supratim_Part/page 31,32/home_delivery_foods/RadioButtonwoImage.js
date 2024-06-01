import React from "react";
import "./radiobtn.css";
export default function RadioButtonwoImage(props) {
  return (
    <>
      <label className="hd-radioButton">
        <label>
          <div className="hd-name">
            <p>{props.title}</p>
          </div>
        </label>
        <input
          type="radio"
          className="hd-input-button"
          id={props.title}
          name="radio"
          value={props.value}
          onClick={props.onClick}
          checked={props.checked}
        />
      </label>
    </>
  );
}
