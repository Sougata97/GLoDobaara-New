import { Text, useState } from "react";
import React from "react";
import BookingHeader from "../book-appoinment-components/BookingHeader";
import Footer1 from "../../footer1/Footer_1";
import Footer_2 from "../../footer2/Footer_2";
import "./homedelivery.css";
import BottomButtonGrCS from "./choose_sub/BottomButtonGrCS";
import RadioButtonwoImage from "./RadioButtonwoImage";
import Calendar_Booking from "../bookAPT3/components/Calendar_Booking";
import Dropdwn from "./components/Dropdwn";

export default function HomeDelivery() {
  const [num, setNum] = useState(1);
  const [drawer, setDrawer] = useState(false);
  const add = () => {
    if (num < 5) {
      setNum(num + 1);
    }
  };

  const sub = () => {
    if (num > 1) {
      setNum(num - 1);
    } else {
      alert("Minimum Number Reached.");
      setNum(1);
    }
  };
  function handleChange(value) {
    setDrawer(value);
  }
  return (
    <>
      <BookingHeader />
      <div className="hd-main-container">
        <div className="hd-top-text">
          <p className="text">Order home delivery of foods</p>
        </div>
        <div className="hd-first-box">
          <fieldset className="hd-inside-first-box">
            <legend className="hd-ld-name">Your Food Habit</legend>
            <div className="hd-fh-rdbtn">
              <RadioButtonwoImage
                title="Vegetarian"
                onClick={() => {
                  handleChange("Vegetarian");
                }}
              />
              <RadioButtonwoImage
                title="Non-Vegetarian"
                onClick={() => {
                  handleChange("Non-Vegetarian");
                }}
              />
              <RadioButtonwoImage
                title="Non-vegetarian (Except Tuesday & Saturday)"
                onClick={() => {
                  handleChange("Except");
                }}
              />
            </div>
            <div className="hd-showmore-btn">
              <button className="hd-first-button">Show More</button>
            </div>
          </fieldset>
        </div>
        <div className="hd-drpdwn">
          {drawer == "Vegetarian" ? <Dropdwn titleyfh="Vegetarian" /> : null}
          {drawer == "Non-Vegetarian" ? (
            <Dropdwn titleyfh="Non-Vegetarian" />
          ) : null}
          {drawer == "Except" ? (
            <Dropdwn titleyfh="Non-Vegetarian (Except Tuesday & Saturday)" />
          ) : null}
        </div>
        <div className="hd-second-box">
          <fieldset className="hd-inside-second-box">
            <legend className="hd-ld-name">Time of Meal</legend>
            <div className="hd-fh-rdbtn">
              <RadioButtonwoImage title="Lunch" />
              <RadioButtonwoImage title="Dinner" />
              <RadioButtonwoImage title="Lunch & Dinner both" />
            </div>
          </fieldset>
        </div>
        <div className="hd-mid-box">
          <p className="hd-txt-person">No. of person</p>
          <div className="hd-prsn-count">
            <button onClick={add}>+</button>
            <h3>{num}</h3>
            <button onClick={sub}>-</button>
          </div>
        </div>
        <div className="hd-third-box">
          <fieldset className="hd-inside-third-box">
            <legend className="hd-ld-name">
              Choose starting and ending date
            </legend>
            <div>
              <Calendar_Booking />
            </div>
            <div className="hd-bc">
              <label className="hd-label">Amount to be paid</label>
              <div className="hd-input">
                <input className="hd-inputbox"></input>
              </div>
            </div>
          </fieldset>
        </div>
        <div className="hd-bottom-btn">
          <BottomButtonGrCS />
        </div>
      </div>
      <Footer1 />
      <Footer_2 />
    </>
  );
}
