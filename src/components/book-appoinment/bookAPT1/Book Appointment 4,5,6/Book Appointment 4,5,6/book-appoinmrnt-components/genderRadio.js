import React from 'react';
import "./genderradio.css";

export default function genderRadio() {
  return (
    <div class="GenRad">
      <input className="inputrad" type="radio" value="option1" name="MyRadio" id="Male"/>
      <label className="labelRad" for="Male">Male</label>
      <input className="inputrad" type="radio" value="option2" name="MyRadio" id="Female"/>
      <label className="labelRad" for="Female">Female</label>
    </div>
  )
}
