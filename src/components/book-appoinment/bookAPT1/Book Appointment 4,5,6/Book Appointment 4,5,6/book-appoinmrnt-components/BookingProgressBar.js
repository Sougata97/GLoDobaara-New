import React from "react";
import "./bookingProgressBar.css";
export default function BookingProgressBar(props) {
  //Every time you use this progress bar you have to pass in a string value which will indicate the progress of this bar
  return (
    <div className="main-div">
      <p class="text1">{props.title}</p>
      <br></br>
      <p class="text2">{props.subtitle}</p>
      <br />
      <div class="button-main-div">
        <button
          class="button-div"
          style={
            props.value === "1"
              ? { "background-color": "#c71d6d" }
              : { "background-color": "#d9d9d9" }
          }
        ></button>
        <button
          class="button-div"
          style={
            props.value === "2"
              ? { "background-color": "#c71d6d" }
              : { "background-color": "#d9d9d9" }
          }
        ></button>
        <button
          class="button-div"
          style={
            props.value === "3"
              ? { "background-color": "#c71d6d" }
              : { "background-color": "#d9d9d9" }
          }
        ></button>
        <button
          class="button-div"
          style={
            props.value === "4"
              ? { "background-color": "#c71d6d" }
              : { "background-color": "#d9d9d9" }
          }
        ></button>
        <button
          class="active-button-div"
          style={
            props.value === "5"
              ? { "background-color": "#c71d6d" }
              : { "background-color": "#d9d9d9" }
          }
        ></button>
        <button
          class="button-div"
          style={
            props.value === "6"
              ? { "background-color": "#c71d6d" }
              : { "background-color": "#d9d9d9" }
          }
        ></button>
      </div>
    </div>
  );
}
