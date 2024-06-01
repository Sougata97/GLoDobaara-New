import React from 'react';
import "./genderradio2.css";

export default function genderRadio() {
  return (
    <div class="GenRad">
      <input className="inputrad2" type="radio" value="option5" name="MyRadio3" id="Male2"/>
      <label className="labelRad2" for="Male2">Male</label>
      <input className="inputrad2" type="radio" value="option6" name="MyRadio3" id="Female2"/>
      <label className="labelRad2" for="Female2">Female</label>
    </div>
  )
}
