import React from "react";
import WeekDays from "../WeekDays";
import "./drpdwn.css"; 

export default function Dropdwn(props) {
  return (
    <>
      <div className="hd-pop-fh">
        <fieldset>
          <legend className="hd-ld-name">{props.titleyfh}</legend>
          <div className="hd-ld-scrollview">
            <div className="hd-weekday">
              <WeekDays name="Monday" />
              <WeekDays name="Tuesday" />
              <WeekDays name="Wednesday" />
            </div>
            <div className="hd-weekday">
              <WeekDays name="Thrusday" />
              <WeekDays name="Friday" />
              <WeekDays name="Saturday" />
            </div>
            <div className="hd-wekday">
              <WeekDays name="Sunday" />
            </div>
          </div>
        </fieldset>
      </div>
    </>
  );
}
