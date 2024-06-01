import React from 'react'
import nameImg from "../images/name-icon.png";
import dobImg from "../images/dob.png";


export default function Apt20person() {
  return (
    <>
      <div className="apt2person">
        <input type="checkbox" name="apt20person" id="" />
        <fieldset>
          <legend>Name</legend>
          <div className="apt20name">
            <img src={nameImg} alt="" />
            <input type="text" placeholder="Enter The Name" />
          </div>
        </fieldset>
        <fieldset>
          <legend>Gender</legend>
          <div className="apt20gender">
            <div className="apt20male">
              <input type="radio" name="gender" id="male" />
              <label htmlFor="male">MALE</label>
            </div>
            <div className="apt20fmale">
              <input type="radio" name="gender" id="fmale" />
              <label htmlFor="fmale">FEMALE</label>
            </div>
          </div>
        </fieldset>
        <fieldset>
          <legend>Gender</legend>
          <div className="apt20dob">
            <img src={dobImg} alt="" />
            <input type="date" name="dob" id="" placeholder="Select Date" />
          </div>
        </fieldset>
      </div>
    </>
  );
}
