import React from "react";
import "./booktwo.css";
import leftArrow from "../images/leftArrow.png";
import rightArrow from "../images/rightArrow.png";
import back from "../images/back.png";
import next from "../images/next.png";
import chooseImg from "../images/choose_img.png";
import durationAlarm from "../images/duration.png";
import BookingProgressBar from "../book-appoinment-components/BookingProgressBar";
import BookingHeader from "../book-appoinment-components/BookingHeader";
import Footer1 from "../../footer1/Footer_1";
import BookBanner from "../BookBanner";
import APT_TIMSE from "../book-appoinment-components/APT_TIMSE";
import Footer_2 from "../../footer2/Footer_2";
import Nav from "../book-appoinment-components/BookingNav";

export default function Book_appointment2() {
  return (
    <>
      <Nav />
      <BookBanner />
      <section className="bookapmt2">
        <div className="container">
          <BookingProgressBar
            value="2"
            title="Book Appointment"
            subtitle="Let’s Spend A Quality Time Together"
          />
          <div className="apointment2maincontent">
            <div className="apt2-wrap-left">
              <img src={chooseImg} alt="" />
            </div>
            <div className="apt2-wrap-right">
              <div className="monthapt2">
                <h2>MARCH 2023</h2>
              </div>
              <div className="apt2dates">
                <div className="apt2dates_box">
                  <button>
                    <img src={leftArrow} alt="" />
                  </button>
                </div>
                <div className="apt2dates_box">
                  Sun <br /> 05
                </div>
                <div className="apt2dates_box">
                  Mon <br /> 06
                </div>
                <div className="apt2dates_box">
                  Tue <br /> 07
                </div>
                <div className="apt2dates_box">
                  Wed <br /> 08
                </div>
                <div className="apt2dates_box">
                  Thu <br /> 09
                </div>
                <div className="apt2dates_box">
                  Fri <br /> 10
                </div>
                <div className="apt2dates_box">
                  Sat <br /> 11
                </div>
                <div className="apt2dates_box">
                  <button>
                    <img src={rightArrow} alt="" />
                  </button>
                </div>
              </div>
              <div className="apt2times">
                <div className="apt2timeswrap">
                  <ul className="apt2timeul">
                    <APT_TIMSE time="09:00 am" />
                    <APT_TIMSE time="09:30 am" />
                    <APT_TIMSE time="10:00 am" />
                    <APT_TIMSE time="10:30 am" />
                    <APT_TIMSE time="11:00 am" />
                    <APT_TIMSE time="11:30 am" />
                  </ul>
                </div>
                <div className="apt2timeswrap">
                  <ul className="apt2timeul">
                    <APT_TIMSE time="12:00 pm" />
                    <APT_TIMSE time="12:15 pm" />
                    <APT_TIMSE time="12:30 pm" />
                    <APT_TIMSE time="12:45 pm" />
                    <APT_TIMSE time="01:00 pm" />
                  </ul>
                </div>
                <div className="apt2timeswrap">
                  <ul className="apt2timeul">
                    <APT_TIMSE time="01:30 pm" />
                    <APT_TIMSE time="02:00 pm" />
                    <APT_TIMSE time="02:30 pm" />
                    <APT_TIMSE time="03:00 pm" />
                    <APT_TIMSE time="03:30 pm" />
                    <APT_TIMSE time="04:00 pm" />
                    <APT_TIMSE time="04:30 pm" />
                    <APT_TIMSE time="05:00 pm" />
                    <APT_TIMSE time="05:30 pm" />
                  </ul>
                </div>
                <div className="apt2timeswrap">
                  <ul className="apt2timeul">
                    <APT_TIMSE time="06:00 pm" />
                    <APT_TIMSE time="06:30 pm" />
                    <APT_TIMSE time="07:00 pm" />
                    <APT_TIMSE time="07:30 pm" />
                    <APT_TIMSE time="08:00 pm" />
                    <APT_TIMSE time="08:30 pm" />
                    <APT_TIMSE time="09:00 pm" />
                    <APT_TIMSE time="09:30 pm" />
                    <APT_TIMSE time="10:00 pm" />
                  </ul>
                </div>
              </div>
              <div className="apt2duration_select">
                <fieldset>
                  <legend>Duration</legend>
                  <div className="duration_box">
                    <div className="duration-box-left">
                      <img src={durationAlarm} alt="" />
                    </div>
                    <div className="duration-box-right">
                      <div className="custom-select">
                        <div className="select">
                          <select>
                            <option value="1">1 hour</option>
                            <option value="2">2 hour</option>
                            <option value="3">3 hour</option>
                            <option value="4">4 hour</option>
                            <option value="5">5 hour</option>
                          </select>
                        </div>
                      </div>
                    </div>
                  </div>
                </fieldset>
              </div>
              <div className="apt2-btns">
                <div className="apt2-btns_left">
                  <a href="#">
                    <img src={back} alt="" /> Back
                  </a>
                </div>
                <div className="apt2-btns_right">
                  <a href="#">Cancel</a>
                  <a href="#">
                    Next
                    <img src={next} alt="" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer1 />
      <Footer_2 />
    </>
  );
}
