import "./radioButton.css";
import React from "react";

export default function RadioButton(props) {
  return (
    <>
      <label className="radioButton" for={props.title}>
        <input
          type="radio"
          className="rdb-input-button"
          id={props.title}
          name="radio"
          value={props.value}
          onClick={props.onClick}
          checked={props.checked}
        />
        <label className="buttonlabel" for={props.title}>
          <div className="rdb-name">
            {/* pass a image source and it will be placed in the place of props.img*/}
            <img src={props.img} className="rdb-icon" />
            <p>{props.title}</p>
          </div>
        </label>
      </label>
    </>
  );
}
