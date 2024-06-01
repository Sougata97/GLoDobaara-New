import React from 'react';
import "./genderradio1.css";

export default function genderRadio() {
  return (
    <div class="GenRad1">
      <input className="inputrad1" type="radio" value="option3" name="MyRadio1" id="Male1"/>
      <label className="labelRad1" for="Male1">Male</label>
      <input className="inputrad1" type="radio" value="option4" name="MyRadio1" id="Female1"/>
      <label className="labelRad1" for="Female1">Female</label>
    </div>
  )
}
