import React from "react";
import { SlLocationPin } from "react-icons/sl";

import "./location.css";

export default function LocationField(props) {
  return (
    <fieldset className="outerLo">
      <legend align="left">{props.locate}</legend>
      <SlLocationPin className="icLo" size={20}/>
      <div className="barLo"></div>
      <input className="iptLo" placeholder={props.place} />
    </fieldset>
  );
}