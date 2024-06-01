import React from "react";
import { useState } from "react";
import Calendar from "react-calendar";
import "./calendar_booking.css";
import leftImage from "./choose_img.png";
import Nav from "../book-appoinment-components/BookingNav";
import BookingHeader from "../book-appoinment-components/BookingHeader";
import BookingProgressBar from "../book-appoinment-components/BookingProgressBar";
import ButtomButtonGroup from "../book-appoinment-components/BottomButtonGroup";
import Footer1 from "../../footer1/Footer_1";
import Footer_2 from "../../footer2/Footer_2";

export default function Calendar_Booking() {
  const [date, setDate] = useState(new Date());
  return (
    <>
      <Nav />
      <BookingHeader />
      <br /><br />
      <BookingProgressBar
        value="1"
        title="Book Appointment"
        subtitle="Let’s Spend A Quality Time Together"
      />
      <br />
      <br />
      <div className="calendar_booking">
        <div className="container calender-container">
          <div className="calendar-container-left">
            <img src={leftImage} alt="image" />
          </div>

          <div className="calendar-container-right">
            <div className="react-calendar">
              <div style={{ display: "flex", flexDirection: "column" }}></div>
              <h3 className="h3">Select Date</h3>
              <Calendar onChange={setDate} value={date} />
            </div>
            <br />
            <br />
            <ButtomButtonGroup />
          </div>
        </div>
      </div>
      <br /><br />
      <Footer1 />
      <Footer_2/>
    </>
  );
}
