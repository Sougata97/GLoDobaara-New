import React from "react";
import { FaBirthdayCake, FaCalendarAlt } from "react-icons/fa";

import "./dob.css";

export default function DOB(props) {
  return (
    <fieldset className="div-dob">
      <legend align="left" className="legend-dob">Date Of Birth</legend>
      <FaBirthdayCake className="user-dob" size={35} />
      <div className="dob-bar"></div>
      <input className="dob-place" placeholder="Select Date" />
      <FaCalendarAlt className="dob-drop" size={35} />
    </fieldset>
  );
}
