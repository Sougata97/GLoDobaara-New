import React from "react";
import "./WeekDays.css";
export default function WeekDays(props){
    return(
        <div>
            <fieldset className="wd-box">
                <legend className="wd-name">{props.name}</legend>
            </fieldset>
        </div>
    );
}
