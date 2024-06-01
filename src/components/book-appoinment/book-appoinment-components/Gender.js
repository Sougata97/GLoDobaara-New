import React from 'react';
import "./gender.css";

export default function Gender(props) {
  return (
    <fieldset className="div-gen">
      <legend align="left" className="legend-gen">Gender</legend>
      <input className="gen-place" value="male" type="radio" name={props.gender} id="rad1"/>
      <label className="gen-label" for="rad1">Male</label>
      <div className="gen-bar"></div>
      <input className="gen-place" value="female" type="radio" name={props.gender} id="rad2"/>
      <label className="gen-label" for="rad2">Female</label>
    </fieldset>
  )
}
