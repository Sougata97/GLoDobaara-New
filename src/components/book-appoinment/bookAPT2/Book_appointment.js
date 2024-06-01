import React from "react";
import Nav from "../book-appoinment-components/BookingNav";
import BookBanner from "../BookBanner";
import './book22.css';
import nameImg from '../images/bookapt2-20.png'
import sideImg from "../images/book22.png";
import Footer1 from "../../footer1/Footer_1";
import Footer_2 from "../../footer2/Footer_2";
import BookingProgressBar from "../book-appoinment-components/BookingProgressBar";

export default function Book_appointment22() {
  return (
    <>
      <Nav />
      <BookBanner />
      <br />
      <BookingProgressBar value="6" title="Schedule a Class" />
      <div className="apt22-content">
        <div className="container">
          <div className="apt22wrap">
            <div className="apt22-left">
              <img src={sideImg} alt="" />
            </div>
            <div className="apt22-right">
              <fieldset>
                <legend>Apartment / Flat / Premises</legend>
                <div className="apt20name">
                  <img src={nameImg} alt="" />
                  <input
                    type="text"
                    placeholder="Enter The Apartment No, Name / Flat / Premises Details"
                  />
                </div>
              </fieldset>
            </div>
          </div>
        </div>
      </div>
      <Footer1 />
      <Footer_2 />
    </>
  );
}
