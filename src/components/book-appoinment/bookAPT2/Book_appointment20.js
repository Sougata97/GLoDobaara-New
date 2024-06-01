import React from "react";
import Nav from "../book-appoinment-components/BookingNav";
import BookBanner from "../BookBanner";
import "../bookAPT2/book20.css";
import { Link } from "react-router-dom";
import sideImg from "../images/img-20page.png";
import BookingProgressBar from "../book-appoinment-components/BookingProgressBar";
import Apt20person from "../book-appoinment-components/Apt20person";
import ButtomButtonGroup from "../book-appoinment-components/BottomButtonGroup";
import Footer1 from "../../footer1/Footer_1";
import Footer_2 from "../../footer2/Footer_2";

export default function Book_appointment20() {
  return (
    <>
      <Nav />
      <BookBanner />
      <br />
      <BookingProgressBar value="4" />
      <div className="apt20-content">
        <div className="container">
          <div className="apt20-box-wrap">
            <div className="apt20_left">
              <img src={sideImg} alt="" />
            </div>
            <div className="apt20_right">
              <div className="apt20form">
                <Apt20person />
                <Apt20person />
                <Apt20person />
                <Link to="#">+ &nbsp;&nbsp; New Person</Link>
              </div>
              <br />
              <br />
              <ButtomButtonGroup />
            </div>
          </div>
        </div>
          </div>
          <Footer1 />
          <Footer_2/>
    </>
  );
}
