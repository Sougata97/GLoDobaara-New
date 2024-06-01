import React from "react";

import Footer1 from "../footer1/Footer_1";
import BookingHeader from "./book-appoinmrnt-components/BookingHeader";
import BookingProgressBar from "./book-appoinmrnt-components/BookingProgressBar";
import ButtomButtonGroup from "./book-appoinmrnt-components/BottomButtonGroup";
import "./bookappointment4.css";
import image from "./Group 78.png";
import InputField from "./book-appoinmrnt-components/inputfield";
import Date from "./book-appoinmrnt-components/DOB";
import Relation from "./book-appoinmrnt-components/RelationDD";
import Relation2 from "./book-appoinmrnt-components/RelationDD2";
import Gender from "./book-appoinmrnt-components/genderRadio";
import Gender1 from "./book-appoinmrnt-components/genderRadio1";
import Gender2 from "./book-appoinmrnt-components/genderRadio2";

export default function Bookapointment4() {
  return (
    <>
      <BookingHeader />
      <BookingProgressBar
        value="4"
        title="Book Appointment"
        subtitle="Let's Spend A Quality Time Together"
      />
      {/* here i'm using a string value 4 which indicates the progress */}
      <div className="middle-partba4">
        <div className="image-divba4">
          <img src={image} className="left-imageba4" />
        </div>
        <div className="element-divba4">
          <div className="element-row-divba4">
            <InputField />
            <Gender/>
            <Date />
          </div>
          <div className="element-row-divba4">
            <InputField />
            <Gender1/>
            <Date />
          </div>
          <div className="element-row-div3ba4">
            <Relation/>
          </div>
          <div className="element-row-divba4">
            <InputField />
            <Gender2/>
            <Date />
          </div>
          <div className="element-row-div3ba4">
            <Relation2/>
          </div>
          <ButtomButtonGroup />
        </div>
      </div>
      <Footer1 />
    </>
  );
}
