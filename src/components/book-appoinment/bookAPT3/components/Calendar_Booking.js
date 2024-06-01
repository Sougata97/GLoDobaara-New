import React from "react";
import { useState } from "react";
import Calendar from "react-calendar";
import "./calendar_booking.css";
import leftImage from "./choose_img.png";

export default function Calendar_Booking() {
  const [date, setDate] = useState(new Date());
  return (
    <>
      {/* <div className="calendar_booking"> */}
        {/* <div className="container calender-container">
          <div className="calendar-container-right"> */}
            <div className="react-calendar">
              <div style={{ display: "flex", flexDirection: "column" }}></div>
              <Calendar onChange={setDate} value={date} />
            </div>
            {/* <div className="text-center">
                Selected date: {date.toDateString()}
            </div> */}
          {/* </div> */}
        {/* </div>
      </div> */}
    </>
  );
}
