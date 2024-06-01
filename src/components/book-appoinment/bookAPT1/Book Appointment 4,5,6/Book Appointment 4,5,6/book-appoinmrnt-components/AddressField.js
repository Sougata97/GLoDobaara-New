import React from "react";
import { SlLocationPin } from "react-icons/sl";

import "./address.css";

export default function inputfield(props) {
  return (
    <fieldset className="outerAd">
      <legend align="left">{props.place}</legend>
      <SlLocationPin className="icAd" size={20}/>
      <div className="barAd"></div>
      <input className="iptAd" placeholder="Enter The Apartment No, Name / Flat / Premises Details" />
    </fieldset>
  );
}
