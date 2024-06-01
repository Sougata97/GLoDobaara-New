import React from "react";
import { HiOutlineUser } from "react-icons/hi";

import "./InputField.css";

export default function inputfield() {
  return (
    <fieldset className="outer">
      <legend align="left">Name</legend>
      <HiOutlineUser className="ic" size={20}/>
      <div className="bar"></div>
      <input className="ipt" placeholder="Enter The Name" />
    </fieldset>
  );
}
